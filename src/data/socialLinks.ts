import type { IconName } from "./icons";

export interface SocialLink {
  label: string;
  href: string;
  icon: IconName;
  external?: boolean;
}

export const socialLinks: SocialLink[] = [
  { label: "GitHub", href: "https://github.com/Modupe-Onakoya", icon: "github", external: true },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/modupe-onakoya", icon: "linkedin", external: true },
  { label: "Email", href: "mailto:onakoyamodupe0@gmail.com", icon: "mail" },
  { label: "X", href: "https://x.com/dhuks__", icon: "x", external: true },
  { label: "Whatsapp", href: "https://wa.me/2349066291370", icon: "whatsapp", external: true },


];

