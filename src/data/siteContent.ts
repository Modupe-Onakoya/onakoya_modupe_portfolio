export interface Stat {
  value: string;
  suffix?: string;
  lines: [string, string];
}

export const siteContent = {
  name: "Alex Morgan",
  email: "hello@onakoyamodupe0@gmail.com",
  location: "Ibadan Nigeria",
  roleLine: "Frontend Developer  •  React  •  Next.js",
  heroDescription: "I build expressive digital products where sharp engineering meets distinct visual direction. Spot the gap. Shape the idea. Build it better",
  hero: {
    availability: "Available for select projects",
    intro: "Hello, I’m",
    firstName: "Modupe",
    lastName: "Onakoya",
    locationLabel: "Based in",
    locationValue: "Ibadan Nigeria",
    timeLabel: "Local time",
    timeValue: "10:24 EST",
    scrollLabel: "Scroll to explore",
    primaryAction: "View work",
    secondaryAction: "Download CV",
  },
  headings: {
    about: { eyebrow: "About me", title: "Ideas, engineered.", description: "I care about the details people notice—and the ones they simply feel." },
    skills: { eyebrow: "Capabilities", title: "Built to perform.", description: "A modern toolkit for ambitious products and teams." },
    projects: { eyebrow: "Selected work", title: "Made to matter.", description: "A selection of products shaped through strategy, design, and code." },
    experience: { eyebrow: "Experience", title: "Where I’ve made impact." },
    testimonials: { eyebrow: "Kind words", title: "Good work travels." },
  },
  aboutLead: {
    start: "I’m a creative developer who solves problems, shapes new ideas, and turns them into ",
    emphasis: "simple, memorable experiences.",
  },
  aboutParagraphs: [
    "My work spans complex transactional systems and high-performance web applications. I bring strong technical execution and sharp problem solving to the team, tackle complex challenges and deliver exceptional digital products.",
    "Outside coding, I enjoy exploring design, discovering new ideas, and finding inspiration in the little things.",
  ],
  stats: [
    {
      value: "01",
      suffix: "",
      lines: ["End-to-end", "payment integration"],
    },
    {
      value: "04",
      suffix: "+",
      lines: ["Modern web", "technologies"],
    },
  ] satisfies Stat[],
  ticker: ["React", "TypeScript", "Next.js", "Motion", "Creative Code", "React", "TypeScript", "Next.js"],
  contactIntro: "Whether you have a product to launch, a story to tell, or just want to compare notes—my inbox is open.",
  projectTypes: ["Website / Product", "Creative Development", "Frontend Consulting"],
  contact: {
    eyebrow: "Start a conversation",
    title: "Have a great idea?",
    emphasis: "Let’s make it real.",
    locationLabel: "Based in",
    statusLabel: "Status",
    status: "Available",
    submit: "Send inquiry",
    sent: "Message sent — thank you",
    fields: {
      name: { label: "Your name", placeholder: "Modupe" },
      email: { label: "Email address", placeholder: "modupe@company.com" },
      type: { label: "Project type", placeholder: "Select a service" },
      message: { label: "Tell me a little about it", placeholder: "A few words about your idea, timeline, and goals..." },
    },
  },
  footer: {
    credit: "Designed & built Nextjs",
    copyright: "© 2026 Modupe Onakoya",
  },
  cv: "Modupe Onakoya — Frontend Developer\n\nReact · Next.js · TypeScript · Creative Development\n\nhello@alexmorgan.dev",
};
