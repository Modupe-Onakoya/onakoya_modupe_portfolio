import { socialLinks } from "@/data/socialLinks";
import Logo from "@/components/ui/Logo";
import SocialLink from "@/components/ui/SocialLink";
import { siteContent } from "@/data/siteContent";

export default function Footer() {
  return (
    <footer className="flex items-start justify-between border-t border-line px-[4vw] py-10 sm:items-center">
      <Logo label="Back to home" />
      <p className="hidden text-center text-[8px] leading-[1.8] tracking-[.13em] text-[#5b6069] sm:block">{siteContent.footer.credit.toUpperCase()}<br />{siteContent.footer.copyright.toUpperCase()}</p>
      <div className="flex gap-2">{socialLinks.map((link) => <SocialLink link={link} key={link.label} />)}</div>
    </footer>
  );
}
