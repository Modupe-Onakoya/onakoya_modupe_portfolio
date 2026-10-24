import { experience } from "@/data/experience";
import SectionHeading from "@/components/ui/SectionHeading";
import { siteContent } from "@/data/siteContent";

export default function Experience() {
  return (
    <section className="bg-ink px-[6vw] py-[95px] lg:px-[8vw] lg:py-[130px]" id="experience">
      <SectionHeading eyebrow={siteContent.headings.experience.eyebrow} title={siteContent.headings.experience.title} />
      <div className="border-t border-line">
        {experience.map((item, index) => (
          <article className="reveal grid translate-y-[35px] grid-cols-[18px_1fr] gap-[15px] border-b border-line py-[38px] opacity-0 transition-all duration-300 hover:bg-linear-to-r hover:from-electric/[.06] hover:to-transparent sm:grid-cols-[20px_120px_1fr] sm:gap-[30px] lg:grid-cols-[35px_150px_1fr_1fr_30px] lg:hover:pl-3 [&.visible]:translate-y-0 [&.visible]:opacity-100" key={item.period}>
            <div className="relative h-full border-l border-[#2f333b]"><span className="absolute top-[5px] -left-1 size-[7px] rounded-full bg-electric shadow-[0_0_0_5px_rgba(53,108,255,.1)]" /></div>
            <p className="col-start-2 text-[9px] tracking-[.12em] text-[#696e77] sm:col-auto">{item.period}</p>
            <div className="col-start-2 sm:col-auto"><h3 className="mb-[5px] text-[21px]">{item.role}</h3><h4 className="text-xs font-medium text-[#6f92f6]">{item.company}</h4></div>
            <p className="col-start-2 max-w-[440px] text-[13px] leading-[1.7] text-muted sm:col-start-3 lg:col-auto">{item.text}</p>
            <small className="hidden text-[9px] tracking-[.12em] text-[#696e77] lg:block">0{index + 1}</small>
          </article>
        ))}
      </div>
    </section>
  );
}
