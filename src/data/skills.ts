import type { IconName } from "./icons";

export interface SkillGroup {
  group: string;
  icon: IconName;
  items: string[];
}

export const skills: SkillGroup[] = [
  {
    group: "Frontend",
    icon: "code",
    items: ["JavaScript (ES6+)", "TypeScript", "React", "Next.js", "Tailwind CSS", "Bootstrap", "Framer Motion"],
  },
  {
    group: "State & Forms",
    icon: "motion",
    items: ["Zustand", "TanStack Query", "React Hook Form", "Zod"],
  },
  {
    group: "Backend",
    icon: "server",
    items: ["Supabase (Auth)", "PostgreSQL", "Row-Level Security", "Next.js Route Handlers"],
  },
  {
    group: "Tools",
    icon: "tool",
    items: ["Git", "GitHub", "Vercel", "Figma", "VS Code"],
  },
];