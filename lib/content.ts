type CourseSearchCourse = {
  title: string;
  slug: string;
  shortDescription?: string;
  category?: string;
  duration?: string;
};

type CourseSearchGroup = {
  id: string;
  name: string;
  slug: string;
  description: string;
  keywords: string[];
  courses: CourseSearchCourse[];
};

const normalizeText = (value: string) => value.toLowerCase().replace(/[^a-z0-9\s]/g, " ").replace(/\s+/g, " ").trim();

export const courseSearchGroups: CourseSearchGroup[] = [
  {
    id: "design",
    name: "Design",
    slug: "design",
    description: "Visual thinking and digital design foundations.",
    keywords: ["design", "ui design", "ux design", "uiux", "graphic", "graphics", "web design", "visual", "branding"],
    courses: [
      { title: "UI/UX Design", slug: "ui-ux-design", shortDescription: "Design digital experiences that are clear, useful, and user-friendly." },
      { title: "Graphic Design", slug: "graphic-design", shortDescription: "Create posters, flyers, branding visuals, and digital artwork." },
      { title: "Web Design", slug: "web-design", shortDescription: "Turn design ideas into modern, responsive web layouts." },
    ],
  },
  {
    id: "web-development",
    name: "Web Development",
    slug: "web-development",
    description: "Build responsive websites and web-based applications.",
    keywords: ["web development", "website", "frontend", "backend", "html", "css", "javascript", "react", "full stack"],
    courses: [
      { title: "Frontend Web Development", slug: "frontend-web-development", shortDescription: "Build accessible websites with HTML, CSS, JavaScript, and modern UI patterns." },
      { title: "Full-Stack Web Development", slug: "full-stack-web-development", shortDescription: "Connect front-end interfaces to server logic and databases." },
      { title: "Responsive Web Design", slug: "responsive-web-design", shortDescription: "Create layouts that adapt beautifully across desktop, tablet, and mobile screens." },
    ],
  },
  {
    id: "data-analysis",
    name: "Data Analysis",
    slug: "data-analysis",
    description: "Understand data, spot trends, and support better decisions.",
    keywords: ["data", "data analysis", "analysis", "analytics", "excel", "dashboard", "reporting"],
    courses: [
      { title: "Data Analysis Fundamentals", slug: "data-analysis-fundamentals", shortDescription: "Work with spreadsheets and data to answer practical business questions." },
      { title: "Power BI & Dashboards", slug: "power-bi-dashboards", shortDescription: "Turn raw data into visual dashboards and meaningful insights." },
      { title: "Excel for Data Work", slug: "excel-for-data-work", shortDescription: "Use Excel for cleaning, analysing, and presenting data clearly." },
    ],
  },
  {
    id: "data-science",
    name: "Data Science",
    slug: "data-science",
    description: "Learn the analytical mindset behind machine learning and intelligence.",
    keywords: ["data science", "machine learning", "ml", "python for data", "ai data"],
    courses: [
      { title: "Data Science Starter", slug: "data-science-starter", shortDescription: "Understand the workflow behind data collection, cleaning, exploration, and model building." },
      { title: "Python for Data Science", slug: "python-for-data-science", shortDescription: "Use Python to explore data, automate patterns, and prepare datasets." },
    ],
  },
  {
    id: "ict-basics",
    name: "ICT Basics",
    slug: "ict-basics",
    description: "Practical computer confidence for everyday digital work.",
    keywords: ["ict", "ict basics", "computer basics", "computer skills", "basic computer", "microsoft office", "office"],
    courses: [
      { title: "Computer Fundamentals", slug: "computer-fundamentals", shortDescription: "Learn core computer operations, file handling, and setup basics." },
      { title: "Microsoft Office Essentials", slug: "microsoft-office-essentials", shortDescription: "Get confident with Word, Excel, and PowerPoint for school and work." },
      { title: "Internet & Email Skills", slug: "internet-email-skills", shortDescription: "Use email, browsing, and online tools efficiently and safely." },
    ],
  },
  {
    id: "video-editing",
    name: "Video Editing",
    slug: "video-editing",
    description: "Edit, arrange, and produce video content with clarity and purpose.",
    keywords: ["video", "video editing", "editing", "premiere", "after effects", "film", "motion"],
    courses: [
      { title: "Video Editing Basics", slug: "video-editing-basics", shortDescription: "Learn trimming, transitions, pacing, and clean storytelling for video content." },
      { title: "Short-Form Video Production", slug: "short-form-video-production", shortDescription: "Create engaging videos for social media, ads, and online campaigns." },
    ],
  },
  {
    id: "cybersecurity",
    name: "Cybersecurity",
    slug: "cybersecurity",
    description: "Build safe habits and security awareness for digital life.",
    keywords: ["cybersecurity", "security", "cyber", "ethical hacking", "network security"],
    courses: [
      { title: "Cybersecurity Essentials", slug: "cybersecurity-essentials", shortDescription: "Understand online threats, device safety, and everyday protection practices." },
      { title: "Network Security Basics", slug: "network-security-basics", shortDescription: "Explore how networks are protected and how access is managed securely." },
    ],
  },
  {
    id: "digital-marketing",
    name: "Digital Marketing",
    slug: "digital-marketing",
    description: "Learn to plan, create, and promote online growth campaigns.",
    keywords: ["digital marketing", "marketing", "seo", "social media", "brand"],
    courses: [
      { title: "Digital Marketing Fundamentals", slug: "digital-marketing-fundamentals", shortDescription: "Build the foundation for campaigns, content, and customer acquisition online." },
      { title: "Social Media Marketing", slug: "social-media-marketing", shortDescription: "Learn how to plan content, engage audiences, and grow a digital presence." },
    ],
  },
  {
    id: "networking",
    name: "Networking",
    slug: "networking",
    description: "Understand how devices, systems, and services connect.",
    keywords: ["networking", "network", "ccna", "lan", "wan", "internet setup"],
    courses: [
      { title: "Networking Fundamentals", slug: "networking-fundamentals", shortDescription: "Learn how networks work, how devices connect, and how data moves." },
      { title: "IT Infrastructure Basics", slug: "it-infrastructure-basics", shortDescription: "Understand the setup behind reliable devices, networks, and support systems." },
    ],
  },
  {
    id: "cloud-computing",
    name: "Cloud Computing",
    slug: "cloud-computing",
    description: "Learn the systems behind modern digital services and infrastructure.",
    keywords: ["cloud", "cloud computing", "aws", "azure", "hosting"],
    courses: [
      { title: "Cloud Computing Foundations", slug: "cloud-computing-foundations", shortDescription: "Explore hosting, cloud tools, and modern infrastructure basics." },
      { title: "Cloud Essentials for Beginners", slug: "cloud-essentials-for-beginners", shortDescription: "Learn how cloud systems support apps, work, and digital services." },
    ],
  },
  {
    id: "database-management",
    name: "Database Management",
    slug: "database-management",
    description: "Learn how data is stored, structured, and managed safely.",
    keywords: ["database", "db", "sql", "data management", "mysql", "postgres"],
    courses: [
      { title: "Database Management Basics", slug: "database-management-basics", shortDescription: "Understand tables, records, queries, and reliable data access." },
      { title: "SQL Fundamentals", slug: "sql-fundamentals", shortDescription: "Work with structured data and learn the language behind many business systems." },
    ],
  },
  {
    id: "mobile-app-development",
    name: "Mobile App Development",
    slug: "mobile-app-development",
    description: "Design and build apps for mobile users and everyday experiences.",
    keywords: ["mobile app", "android", "ios", "app development", "mobile"],
    courses: [
      { title: "Mobile App Development Basics", slug: "mobile-app-development-basics", shortDescription: "Learn how interfaces, logic, and user flows come together in mobile apps." },
      { title: "App Design for Mobile", slug: "app-design-for-mobile", shortDescription: "Build mobile-first layouts and friendly app experiences for users." },
    ],
  },
  {
    id: "artificial-intelligence",
    name: "Artificial Intelligence",
    slug: "artificial-intelligence",
    description: "Explore AI, automation, and responsible digital intelligence.",
    keywords: ["ai", "artificial intelligence", "generative ai", "machine learning", "automation", "prompt", "prompt engineering", "ai engineering"],
    courses: [
      { title: "AI Foundations", slug: "ai-foundations", shortDescription: "Understand core ideas, tools, and responsible use of AI systems." },
      { title: "Prompt Engineering for AI", slug: "prompt-engineering-for-ai", shortDescription: "Learn how to craft better prompts for productivity, research, and creative work." },
      { title: "Generative AI for Work", slug: "generative-ai-for-work", shortDescription: "Use AI to accelerate writing, analysis, research, and everyday business tasks." },
      { title: "AI Productivity and Automation", slug: "ai-productivity-and-automation", shortDescription: "Automate routine work and build practical AI workflows that save time." },
      { title: "AI Engineering Fundamentals", slug: "ai-engineering-fundamentals", shortDescription: "Learn the building blocks behind AI tools, models, and intelligent systems." },
    ],
  },
  {
    id: "programming",
    name: "Programming",
    slug: "programming",
    description: "Build logic, problem-solving, and real working code skills.",
    keywords: ["programming", "coding", "python", "javascript", "logic", "software", "java", "csharp", "sql"],
    courses: [
      { title: "Python Programming", slug: "python-programming", shortDescription: "Learn fundamentals of coding through practical, real-world tasks." },
      { title: "Python for Data Science", slug: "python-for-data-science", shortDescription: "Apply Python to data cleaning, analysis, reporting, and predictive workflows." },
      { title: "JavaScript Essentials", slug: "javascript-essentials", shortDescription: "Understand the language behind interactive web experiences." },
      { title: "Java Programming", slug: "java-programming", shortDescription: "Learn structured programming, object-oriented thinking, and backend fundamentals." },
      { title: "C# for Beginners", slug: "csharp-for-beginners", shortDescription: "Build beginner confidence in C# and modern application logic." },
      { title: "SQL for Developers", slug: "sql-for-developers", shortDescription: "Use SQL to query, filter, analyse, and manage data in real systems." },
    ],
  },
  {
    id: "project-management",
    name: "Project Management",
    slug: "project-management",
    description: "Manage timelines, teams, risks, and outcomes with confidence.",
    keywords: ["project management", "agile", "scrum", "risk", "pmp", "delivery", "stakeholder"],
    courses: [
      { title: "Project Management Fundamentals", slug: "project-management-fundamentals", shortDescription: "Learn the essentials of planning, scheduling, stakeholders, and delivery." },
      { title: "Agile and Scrum Essentials", slug: "agile-and-scrum-essentials", shortDescription: "Use agile practices to deliver projects with better collaboration and visibility." },
      { title: "Risk and Stakeholder Management", slug: "risk-and-stakeholder-management", shortDescription: "Plan for uncertainty, align people, and keep your projects on track." },
      { title: "Microsoft Project for Teams", slug: "microsoft-project-for-teams", shortDescription: "Use project planning tools to organise tasks, resources, and milestones." },
    ],
  },
  {
    id: "computer-fundamentals",
    name: "Computer Fundamentals",
    slug: "computer-fundamentals",
    description: "Learn the essentials for using computers confidently.",
    keywords: ["computer fundamentals", "computer", "windows", "laptop", "hardware", "software"],
    courses: [
      { title: "Computer Essentials", slug: "computer-essentials", shortDescription: "Build confidence using computers for work, study, and everyday tasks." },
      { title: "Laptop & Device Basics", slug: "laptop-device-basics", shortDescription: "Learn the essentials of setup, navigation, and device productivity." },
    ],
  },
  {
    id: "product-design",
    name: "Product Design",
    slug: "product-design",
    description: "Turn user needs into thoughtful digital experiences.",
    keywords: ["product design", "ux", "user experience", "prototype", "design thinking"],
    courses: [
      { title: "Product Design Starter", slug: "product-design-starter", shortDescription: "Learn design thinking and how to shape useful digital experiences." },
      { title: "UX Research Basics", slug: "ux-research-basics", shortDescription: "Understand users better and make more informed product decisions." },
    ],
  },
];

export function getCourseSearchGroups(search = "", databaseCategories: Array<{ id: string; name: string; slug: string; courses: Array<{ id: string; title: string; slug: string; shortDescription?: string; duration?: string; category?: { name: string; slug: string } }> }> = []) {
  const query = normalizeText(search);

  const categoryMap = new Map(databaseCategories.map((category) => [normalizeText(category.name), category]));

  const groups = courseSearchGroups.map((group) => {
    const relatedCategory = categoryMap.get(normalizeText(group.name)) ?? categoryMap.get(normalizeText(group.slug)) ?? Array.from(categoryMap.values()).find((category) => {
      const categoryText = normalizeText(category.name);
      return group.keywords.some((keyword) => categoryText.includes(normalizeText(keyword)) || normalizeText(keyword).includes(categoryText));
    });

    const dbCourses = relatedCategory?.courses ?? [];
    const mergedCourses: CourseSearchCourse[] = [...dbCourses.map((course) => ({
      title: course.title,
      slug: course.slug,
      shortDescription: course.shortDescription ?? "",
      category: course.category?.name ?? relatedCategory?.name ?? group.name,
      duration: course.duration ?? undefined,
    })), ...group.courses].filter((course, index, all) => all.findIndex((item) => item.slug === course.slug || item.title.toLowerCase() === course.title.toLowerCase()) === index);

    const matches = !query
      ? mergedCourses
      : mergedCourses.filter((course) => {
          const courseText = normalizeText(`${course.title} ${course.shortDescription} ${course.category ?? group.name}`);
          const keywordHits = group.keywords.some((keyword) => {
            const normalizedKeyword = normalizeText(keyword);
            return normalizedKeyword.includes(query) || query.includes(normalizedKeyword) || courseText.includes(query) || courseText.includes(normalizedKeyword);
          });
          return keywordHits || courseText.includes(query);
        });

    return {
      ...group,
      courses: matches.length > 0 ? matches : mergedCourses.slice(0, 3),
    };
  });

  if (!query) {
    return groups;
  }

  return groups.filter((group) => {
    const groupText = normalizeText(`${group.name} ${group.description} ${group.keywords.join(" ")}`);
    const courseMatches = group.courses.some((course) => normalizeText(`${course.title} ${course.shortDescription} ${group.name}`).includes(query));
    return groupText.includes(query) || courseMatches;
  });
}

export const courses = [
  { title: "Web development", category: "Build for the web", duration: "12 weeks", format: "Live online + studio", tone: "orange", icon: "</>" },
  { title: "Data analytics", category: "Find the story in data", duration: "10 weeks", format: "Live online", tone: "charcoal", icon: "◒" },
  { title: "Product design", category: "Design with purpose", duration: "8 weeks", format: "Hybrid studio", tone: "cream", icon: "✦" },
] as const;

export const reasons = [
  { number: "01", title: "Learn by doing", text: "Every class moves from a clear concept to a real task you can add to your portfolio." },
  { number: "02", title: "Get unstuck faster", text: "Small cohorts and thoughtful feedback mean you never have to figure it out alone." },
  { number: "03", title: "Build your next move", text: "Leave with practical confidence, a body of work, and a path you can actually follow." },
] as const;
