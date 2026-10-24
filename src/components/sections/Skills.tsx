import { skills } from "@/data/skills";
import SectionHeading from "@/components/ui/SectionHeading";
import SkillCard from "@/components/ui/SkillCard";
import { siteContent } from "@/data/siteContent";

export default function Skills() {
  return (
    <section className="bg-ink px-[6vw] py-[95px] lg:px-[8vw] lg:py-[130px]" id="skills">
      <SectionHeading eyebrow={siteContent.headings.skills.eyebrow} title={siteContent.headings.skills.title} right={siteContent.headings.skills.description} />
      <div className="grid grid-cols-1 border border-line sm:grid-cols-2 lg:grid-cols-4">
        {skills.map((skill, index) => <SkillCard skill={skill} index={index} key={skill.group} />)}
      </div>
    </section>
  );
}
