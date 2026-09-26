export const schoolMedia = {
  hero: "/images/brand/school-1.png",
  heroSlides: [
    "/images/brand/school-1.png",
    "/images/brand/school-2.png",
    "/images/brand/school-3.png",
    "/images/brand/school-4.png",
    "/images/brand/school-5.jpg",
    "/images/brand/school-6.jpg",
  ],
  aboutSlides: [
    "/images/brand/school-1.png",
    "/images/brand/school-2.png",
    "/images/brand/school-3.png",
    "/images/brand/school-4.png",
  ],
  testimonialSlides: [
    "/images/brand/school-5.jpg",
    "/images/brand/school-6.jpg",
    "/images/brand/school-3.png",
    "/images/brand/school-2.png",
  ],
  course: {
    web: "/images/brand/course-web.svg",
    design: "/images/brand/course-design.svg",
    data: "/images/brand/course-data.svg",
    generic: "/images/brand/course-generic.svg",
  },
};

export function resolveCourseMedia(title: string, category = "") {
  const haystack = `${title} ${category}`.toLowerCase();

  if (haystack.includes("web") || haystack.includes("frontend") || haystack.includes("javascript") || haystack.includes("programming") || haystack.includes("python")) {
    return schoolMedia.course.web;
  }

  if (haystack.includes("design") || haystack.includes("ux") || haystack.includes("graphic") || haystack.includes("brand") || haystack.includes("product")) {
    return schoolMedia.course.design;
  }

  if (haystack.includes("data") || haystack.includes("excel") || haystack.includes("analytics") || haystack.includes("power bi") || haystack.includes("ai") || haystack.includes("project management") || haystack.includes("management")) {
    return schoolMedia.course.data;
  }

  return schoolMedia.course.generic;
}
