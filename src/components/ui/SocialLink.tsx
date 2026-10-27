import type { SocialLink as SocialLinkData } from "@/data/socialLinks";
import Icon from "./Icon";


export default function SocialLink({ link }: { link: SocialLinkData }) {



  return (
    <a
      className="grid size-[35px] mt-2 place-items-center border border-line text-[#8c919b] transition-colors hover:border-electric hover:bg-electric hover:text-white lg:cursor-none"
      href={link.href}
      target={link.external ? "_blank" : undefined}
      rel={link.external ? "noreferrer" : undefined}
      aria-label={link.label}
    >
      <Icon name={link.icon} />
    </a>
  );
}
