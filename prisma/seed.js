const { PrismaClient, CourseLevel, CourseMode, CourseStatus } = require("@prisma/client");

const prisma = new PrismaClient();

const demoCategories = [
  { name: "Digital Marketing", slug: "digital-marketing", description: "Practical digital marketing skills for modern businesses." },
  { name: "Design", slug: "design", description: "Build visual and product design confidence through practice." },
  { name: "ICC Foundation", slug: "icc-foundation", description: "The everyday computer skills that make work easier." },
  { name: "Programming", slug: "programming", description: "Learn to think, build, and solve problems with code." },
  { name: "Web Development", slug: "web-development", description: "Create useful, responsive experiences for the web." },
  { name: "Artificial Intelligence", slug: "artificial-intelligence", description: "Explore responsible AI and machine learning foundations." },
  { name: "Data Science", slug: "data-science", description: "Turn data into clearer decisions and useful stories." },
  { name: "Cybersecurity", slug: "cybersecurity", description: "Learn the habits and tools that protect digital work." },
  { name: "Mobile App Development", slug: "mobile-app-development", description: "Design and build experiences for mobile users." },
  { name: "Cloud Computing", slug: "cloud-computing", description: "Understand the infrastructure behind modern products." },
  { name: "Computer Fundamentals", slug: "computer-fundamentals", description: "Build confidence with everyday computer tools." },
  { name: "Networking", slug: "networking", description: "Understand how devices and systems connect." },
  { name: "Database Management", slug: "database-management", description: "Organize, query, and maintain reliable data systems." },
];

const demoCourses = [
  { categorySlug: "digital-marketing", title: "Digital Marketing Fundamentals", slug: "digital-marketing-fundamentals", shortDescription: "Build a practical foundation in content, campaigns, and customer journeys.", description: "Demo course content for development. Replace this record with the confirmed SolveHint curriculum before production launch.", duration: "8 weeks", level: CourseLevel.BEGINNER, mode: CourseMode.ONLINE, featured: true },
  { categorySlug: "design", title: "Product Design Starter", slug: "product-design-starter", shortDescription: "Learn how to turn useful ideas into clear, human-centered digital experiences.", description: "Demo course content for development. Replace this record with the confirmed SolveHint curriculum before production launch.", duration: "8 weeks", level: CourseLevel.BEGINNER, mode: CourseMode.HYBRID, featured: true },
  { categorySlug: "icc-foundation", title: "Computer Skills Foundation", slug: "computer-skills-foundation", shortDescription: "Get comfortable with the tools you use to study, work, and communicate.", description: "Demo course content for development. Replace this record with the confirmed SolveHint curriculum before production launch.", duration: "6 weeks", level: CourseLevel.BEGINNER, mode: CourseMode.IN_PERSON, featured: false },
  { categorySlug: "web-development", title: "Frontend Web Development", slug: "frontend-web-development", shortDescription: "Build accessible interfaces with HTML, CSS, and JavaScript.", description: "Demo course content for development. Replace this record with the confirmed SolveHint curriculum before production launch.", duration: "10 weeks", level: CourseLevel.BEGINNER, mode: CourseMode.ONLINE, featured: true },
  { categorySlug: "web-development", title: "Full-Stack Web Development", slug: "full-stack-web-development", shortDescription: "Connect polished interfaces to reliable server-side applications.", description: "Demo course content for development. Replace this record with the confirmed SolveHint curriculum before production launch.", duration: "12 weeks", level: CourseLevel.INTERMEDIATE, mode: CourseMode.HYBRID, featured: true },
  { categorySlug: "programming", title: "Python Programming", slug: "python-programming", shortDescription: "Learn programming fundamentals through useful, readable Python projects.", description: "Demo course content for development. Replace this record with the confirmed SolveHint curriculum before production launch.", duration: "10 weeks", level: CourseLevel.BEGINNER, mode: CourseMode.ONLINE, featured: false },
  { categorySlug: "programming", title: "JavaScript Essentials", slug: "javascript-essentials", shortDescription: "Understand the language that powers interactive web experiences.", description: "Demo course content for development. Replace this record with the confirmed SolveHint curriculum before production launch.", duration: "8 weeks", level: CourseLevel.INTERMEDIATE, mode: CourseMode.ONLINE, featured: false },
  { categorySlug: "artificial-intelligence", title: "Artificial Intelligence Foundations", slug: "artificial-intelligence-foundations", shortDescription: "Build a grounded understanding of AI, data, and responsible experimentation.", description: "Demo course content for development. Replace this record with the confirmed SolveHint curriculum before production launch.", duration: "8 weeks", level: CourseLevel.BEGINNER, mode: CourseMode.ONLINE, featured: false },
  { categorySlug: "data-science", title: "Data Science Starter", slug: "data-science-starter", shortDescription: "Use data analysis and visualization to answer practical questions.", description: "Demo course content for development. Replace this record with the confirmed SolveHint curriculum before production launch.", duration: "10 weeks", level: CourseLevel.INTERMEDIATE, mode: CourseMode.HYBRID, featured: false },
  { categorySlug: "cybersecurity", title: "Cybersecurity Essentials", slug: "cybersecurity-essentials", shortDescription: "Learn core security concepts for people, systems, and digital work.", description: "Demo course content for development. Replace this record with the confirmed SolveHint curriculum before production launch.", duration: "8 weeks", level: CourseLevel.BEGINNER, mode: CourseMode.ONLINE, featured: false },
  { categorySlug: "mobile-app-development", title: "Mobile App Development Basics", slug: "mobile-app-development-basics", shortDescription: "Explore the foundations of planning and building mobile apps.", description: "Demo course content for development. Replace this record with the confirmed SolveHint curriculum before production launch.", duration: "10 weeks", level: CourseLevel.INTERMEDIATE, mode: CourseMode.ONLINE, featured: false },
  { categorySlug: "cloud-computing", title: "Cloud Computing Foundations", slug: "cloud-computing-foundations", shortDescription: "Understand the building blocks of modern cloud infrastructure.", description: "Demo course content for development. Replace this record with the confirmed SolveHint curriculum before production launch.", duration: "6 weeks", level: CourseLevel.BEGINNER, mode: CourseMode.ONLINE, featured: false },
  { categorySlug: "networking", title: "Networking Fundamentals", slug: "networking-fundamentals", shortDescription: "Learn how devices, services, and networks communicate.", description: "Demo course content for development. Replace this record with the confirmed SolveHint curriculum before production launch.", duration: "6 weeks", level: CourseLevel.BEGINNER, mode: CourseMode.IN_PERSON, featured: false },
  { categorySlug: "database-management", title: "Database Management Basics", slug: "database-management-basics", shortDescription: "Model, query, and care for data that applications depend on.", description: "Demo course content for development. Replace this record with the confirmed SolveHint curriculum before production launch.", duration: "8 weeks", level: CourseLevel.INTERMEDIATE, mode: CourseMode.ONLINE, featured: false },
];

async function main() {
  for (const category of demoCategories) {
    await prisma.courseCategory.upsert({ where: { slug: category.slug }, update: category, create: category });
  }

  for (const course of demoCourses) {
    const category = await prisma.courseCategory.findUniqueOrThrow({ where: { slug: course.categorySlug } });
    const { categorySlug, ...data } = course;
    await prisma.course.upsert({ where: { slug: course.slug }, update: { ...data, categoryId: category.id, status: CourseStatus.PUBLISHED, publishedAt: new Date() }, create: { ...data, categoryId: category.id, status: CourseStatus.PUBLISHED, publishedAt: new Date() } });
  }

  await prisma.siteSetting.upsert({ where: { key: "contact.email" }, update: {}, create: { key: "contact.email", value: "" } });
  await prisma.siteSetting.upsert({ where: { key: "contact.phone" }, update: {}, create: { key: "contact.phone", value: "" } });
  await prisma.siteSetting.upsert({ where: { key: "contact.address" }, update: {}, create: { key: "contact.address", value: "" } });

  console.log("Seeded development course categories and demo courses.");
}

main().catch((error) => { console.error(error); process.exitCode = 1; }).finally(() => prisma.$disconnect());