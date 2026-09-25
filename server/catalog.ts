import { prisma } from "@/lib/db";
import { getCourseImageFallback } from "@/server/image-generation";

export type CatalogCourse = {
  id: string;
  title: string;
  slug: string;
  shortDescription: string;
  imageUrl: string;
  duration: string;
  level: string;
  mode: string;
  featured: boolean;
  category: { name: string; slug: string };
};

export type CatalogResult = { categories: Array<{ id: string; name: string; slug: string; courses: CatalogCourse[] }>; databaseAvailable: boolean; error?: "DATABASE_UNAVAILABLE" };

export async function getPublishedCatalog(): Promise<CatalogResult> {
  try {
    const categories = await prisma.courseCategory.findMany({
      orderBy: { name: "asc" },
      include: { courses: { where: { status: "PUBLISHED" }, orderBy: [{ featured: "desc" }, { title: "asc" }] } },
    });

    const mappedCategories = categories.map((category) => ({
      id: category.id,
      name: category.name,
      slug: category.slug,
      courses: category.courses.map((course) => ({
        ...course,
        imageUrl: course.thumbnail ?? getCourseImageFallback(category.name),
        level: course.level.toLowerCase(),
        mode: course.mode.toLowerCase(),
        category: { name: category.name, slug: category.slug },
      })),
    }));

    return { categories: mappedCategories, databaseAvailable: true };
  } catch (error) {
    if (process.env.NODE_ENV !== "production") console.error("Course catalog query failed:", error);
    return { categories: [], databaseAvailable: false, error: "DATABASE_UNAVAILABLE" };
  }
}

export async function getPublishedCourseResult(slug: string) {
  try {
    const course = await prisma.course.findFirst({ where: { slug, status: "PUBLISHED" }, include: { category: true, modules: { orderBy: { sortOrder: "asc" }, include: { lessons: { where: { status: "PUBLISHED" }, orderBy: { sortOrder: "asc" } } } } } });
    return { course: course ? { ...course, imageUrl: course.thumbnail ?? getCourseImageFallback(course.category.name) } : null, databaseAvailable: true };
  } catch (error) {
    if (process.env.NODE_ENV !== "production") console.error("Course detail query failed:", error);
    return { course: null, databaseAvailable: false, error: "DATABASE_UNAVAILABLE" as const };
  }
}

export async function getPublishedCourse(slug: string) {
  return (await getPublishedCourseResult(slug)).course;
}