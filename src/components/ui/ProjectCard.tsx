import type { Project } from "@/data/projects";
import Icon from "./Icon";
import TechTag from "./TechTag";

export default function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <article className="group reveal translate-y-[35px] opacity-0 transition-[opacity,transform] duration-700 ease-[cubic-bezier(.2,.8,.2,1)] [&.visible]:translate-y-0 [&.visible]:opacity-100 sm:even:mt-0 lg:even:mt-[100px]">
      <div className="relative aspect-[1.25] overflow-hidden bg-[#151820] after:absolute after:inset-0 after:bg-linear-[135deg] after:from-transparent after:to-black/25">
        <img className="size-full object-cover transition-transform duration-700 ease-[cubic-bezier(.2,.8,.2,1)] group-hover:scale-[1.06]" src={project.image} alt={`Abstract artwork for ${project.title}`} />
        {/* <div className="absolute inset-0 z-3 flex flex-col justify-end bg-[rgba(5,7,12,.82)] p-8 opacity-0 backdrop-blur-[10px] transition-opacity duration-300 group-hover:opacity-100">
          <p className="max-w-[400px] text-lg leading-normal">{project.description}</p>
          <a className="flex items-center gap-2.5 text-[10px] uppercase tracking-[.14em] text-[#8dabff] lg:cursor-none" href="#contact">
            View case study <Icon name="external" />
          </a>
        </div> */}
        <span className="absolute top-5 right-5 z-4 bg-ink/60 p-[7px] text-[10px] backdrop-blur-lg">0{index + 1}</span>
      </div>
      <div className="flex flex-col gap-3 pt-[22px] ">
        <div className="">
          <p className="mb-2 text-[8px] uppercase tracking-[.15em] text-[#686d76]">{project.type} · {project.year}</p>
          <div className="flex justify-between gap-2">
            <h3 className="text-[23px] tracking-[-.035em] sm:text-[28px]">{project.title}</h3>
            <div className="flex  gap-2">
              <a className="grid size-[34px] place-items-center border border-line transition-colors hover:border-electric hover:bg-electric lg:cursor-none" href={project.live} aria-label={`${project.title} live link`}><Icon name="external" /></a>
              <a className="grid size-[34px] place-items-center border border-line transition-colors hover:border-electric hover:bg-electric lg:cursor-none" href={project.github} target="_blank" rel="noreferrer" aria-label={`${project.title} GitHub link`}><Icon name="github" /></a>
            </div>
          </div>
        </div>
        <div className="flex-wrap gap-[5px] lg:flex">{project.stack.map((tag) => <TechTag key={tag}>{tag}</TechTag>)}</div>
        <p>{project.description}</p>

      </div>
    </article>
  );
}
