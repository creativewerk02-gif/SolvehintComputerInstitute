import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import { prisma } from "@/lib/db";
import { getPublishedCourseResult } from "@/server/catalog";
import { CourseImageError, generateCourseImage } from "@/server/image-generation";

export const dynamic = "force-dynamic";

export async function GET(_request: NextRequest, { params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const result = await getPublishedCourseResult(slug);
  if (!result.databaseAvailable) return NextResponse.json({ success: false, message: "Unable to connect to the course service.", code: result.error }, { status: 503 });
  if (!result.course) return NextResponse.json({ success: false, message: "Course not found.", code: "COURSE_NOT_FOUND" }, { status: 404 });
  return NextResponse.json({ success: true, data: result.course });
}

export async function POST(request: NextRequest, { params }: { params: Promise<{ slug: string }> }) {
  if (process.env.NODE_ENV === "production" && (!process.env.IMAGE_ADMIN_SECRET || request.headers.get("x-image-admin-secret") !== process.env.IMAGE_ADMIN_SECRET)) {
    return NextResponse.json({ success: false, message: "Image generation requires administrator authorization.", code: process.env.IMAGE_ADMIN_SECRET ? "UNAUTHORIZED" : "AUTH_NOT_CONFIGURED" }, { status: process.env.IMAGE_ADMIN_SECRET ? 401 : 501 });
  }

  const { slug } = await params;
  let course;
  try {
    course = await prisma.course.findUnique({ where: { slug }, include: { category: true } });
  } catch (error) {
    if (process.env.NODE_ENV !== "production") console.error("Course image database query failed:", error);
    return NextResponse.json({ success: false, message: "Unable to connect to the course service.", code: "DATABASE_UNAVAILABLE" }, { status: 503 });
  }
  if (!course) return NextResponse.json({ success: false, message: "Course not found.", code: "COURSE_NOT_FOUND" }, { status: 404 });

  try {
    const generated = await generateCourseImage({ slug: course.slug, title: course.title, category: course.category.name, description: course.description, level: course.level, subject: course.title, audience: "Nigerian students and Black African technology learners" });
    const saved = await prisma.course.update({ where: { id: course.id }, data: { thumbnail: generated.imageUrl } });
    return NextResponse.json({ success: true, data: { courseId: saved.id, imageUrl: generated.imageUrl, prompt: generated.prompt, provider: generated.provider } });
  } catch (error) {
    const code = error instanceof CourseImageError ? error.code : "IMAGE_GENERATION_FAILED";
    const message = error instanceof CourseImageError ? error.message : "The course image could not be generated.";
    if (process.env.NODE_ENV !== "production") console.error("Course image generation failed:", error);
    return NextResponse.json({ success: false, message, code }, { status: code === "IMAGE_PROVIDER_NOT_CONFIGURED" ? 503 : 502 });
  }
}