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
