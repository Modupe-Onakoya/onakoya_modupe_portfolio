import { projects } from "@/data/projects";
import ProjectCard from "@/components/ui/ProjectCard";
import SectionHeading from "@/components/ui/SectionHeading";
import { siteContent } from "@/data/siteContent";

export default function Projects() {
  return (
    <section className="bg-work px-[6vw] py-[95px] lg:px-[8vw] lg:py-[130px]" id="work">
      <SectionHeading eyebrow={siteContent.headings.projects.eyebrow} title={siteContent.headings.projects.title} right={siteContent.headings.projects.description} />
      <div className="grid grid-cols-1 gap-[60px_18px] lg:grid-cols-2 lg:gap-[80px_26px]">
        {projects.map((project, index) => <ProjectCard project={project} index={index} key={project.title} />)}
      </div>
    </section>
  );
}
