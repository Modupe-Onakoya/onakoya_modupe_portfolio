import { siteContent } from "@/data/siteContent";
import SectionHeading from "@/components/ui/SectionHeading";

export default function About() {
  return (
    <section className="relative bg-panel px-[6vw] pt-[95px] pb-0 lg:px-[8vw] lg:pt-[130px]" id="about">
      <SectionHeading eyebrow={siteContent.headings.about.eyebrow} title={siteContent.headings.about.title} right={siteContent.headings.about.description} />
      <div className="grid grid-cols-1 items-center gap-[75px] lg:grid-cols-[.9fr_1.1fr] lg:gap-[9vw]">
        <div className="reveal relative w-[calc(100%-18px)] max-w-[500px] translate-y-[35px] opacity-0 transition-[opacity,transform] duration-700 before:absolute before:inset-[18px_-18px_-18px_18px] before:border before:border-line [&.visible]:translate-y-0 [&.visible]:opacity-100 sm:w-[85%]">
          <div className="absolute top-[18px] left-[18px] z-2 bg-ink/70 px-3 py-2 text-[9px] tracking-[.12em] backdrop-blur-lg">01 / 07</div>
          <img
            className="relative block aspect-[.82] w-full object-cover "
            src="/profile.png"
            alt="Developer in a creative studio"
          />
          {/* <img className="relative block aspect-[.82] w-full object-cover grayscale contrast-110" src="/profile.png" alt="Developer in a creative studio" /> */}
          <div className="absolute right-[-18px] bottom-[42px] z-2 grid size-[88px] rotate-[8deg] place-items-center rounded-full bg-ember text-center text-[10px] leading-[1.4] tracking-[.1em] lg:right-[-42px]">BUILD<br />BOLDLY</div>
        </div>
        <div>
          hi
        </div>
        <div className="reveal translate-y-[35px] opacity-0 transition-[opacity,transform] duration-700 [&.visible]:translate-y-0 [&.visible]:opacity-100">
          <p className="mb-[38px] text-[clamp(26px,3.2vw,47px)] leading-[1.2] tracking-[-.035em] text-paper">{siteContent.aboutLead.start}<em className="not-italic text-[#6c92ff]">{siteContent.aboutLead.emphasis}</em></p>
          {siteContent.aboutParagraphs.map((paragraph) => <p className="max-w-[610px] text-sm leading-[1.8] text-muted" key={paragraph}>{paragraph}</p>)}
          <div className="mt-[45px] flex justify-between gap-[25px] border-t border-line pt-[35px] sm:justify-start sm:gap-[70px]">
            {siteContent.stats.map((stat) => (
              <div className="block items-center gap-[18px] sm:flex" key={stat.value}>
                <strong className="block text-[44px] tracking-[-.06em] sm:text-[52px]">{stat.value}{stat.suffix && <sup className="text-xl text-ember">{stat.suffix}</sup>}</strong>
                <span className="text-[10px] leading-[1.5] tracking-[.09em] text-muted uppercase">{stat.lines[0]}<br />{stat.lines[1]}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="mx-[-6vw] mt-[120px] overflow-hidden border-y border-line py-5 text-[13px] tracking-[.17em] whitespace-nowrap text-[#4f535b] lg:mx-[-8vw]" aria-hidden="true">
        <div className="animate-marquee w-max motion-reduce:animate-none">
          {siteContent.ticker.map((item, index) => <span key={`${item}-${index}`}>{item.toUpperCase()}{index < siteContent.ticker.length - 1 && <b className="mx-6 text-electric">✦</b>}</span>)}
        </div>
      </div>
    </section>
  );
}
