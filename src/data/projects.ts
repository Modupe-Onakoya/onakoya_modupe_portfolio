export interface Project {
  title: string;
  type: string;
  year: string;
  stack: string[];
  image: string;
  description: string;
  github: string;
  live: string
}

export const projects: Project[] = [
  {
    title: "Solar website",
    type: "Solar System platform",
    year: "2026",
    stack: ["Next.js", "TypeScript", "Supabase", "Paystack",],
    image: "/solar-site.jpg",
    description: "A full-stack solar energy platform that helps Nigerian homeowners calculate electricity savings,Recommend systems, make purchases, and manage their energy journey.",
    github: "https://github.com/Modupe-Onakoya/solara-energy",
    live: "https://solara-energy-34sy.vercel.app/"
  },
  {
    title: "Aether Studio",
    type: "Creative portfolio",
    year: "2024",
    stack: ["React", "Three.js", "WebGL"],
    image: "https://images.unsplash.com/photo-1679193559894-5e27935d00c5?auto=format&fit=crop&w=1400&q=85",
    description: "An immersive digital home for a multidisciplinary design studio, built around motion.",
    github: "https://github.com/Modupe-Onakoya/solara-energy",
    live: "https://solara-energy-34sy.vercel.app/"
  },
  {
    title: "Forma AI",
    type: "AI workspace",
    year: "2024",
    stack: ["Next.js", "OpenAI", "Supabase"],
    image: "https://images.unsplash.com/photo-1637789594401-5a0dac0d3e36?auto=format&fit=crop&w=1400&q=85",
    description: "A focused collaborative workspace that makes generative workflows feel effortless.",
    github: "https://github.com/Modupe-Onakoya/solara-energy",
    live: "https://solara-energy-34sy.vercel.app/"
  },
  {
    title: "Sonic Archive",
    type: "Music discovery",
    year: "2023",
    stack: ["React", "Node.js", "Spotify API"],
    image: "https://images.unsplash.com/photo-1646038572822-432f8ccf2522?auto=format&fit=crop&w=1400&q=85",
    description: "An editorial music archive with rich transitions and deeply personal discovery tools.",
    github: "https://github.com/Modupe-Onakoya/solara-energy",
    live: "https://solara-energy-34sy.vercel.app/"
  },
];
