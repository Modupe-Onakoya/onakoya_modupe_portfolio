import type { SkillGroup } from "@/data/skills";
import Icon from "./Icon";

const delays = ["delay-0", "delay-[80ms]", "delay-[160ms]", "delay-[240ms]"];

export default function SkillCard({ skill, index }: { skill: SkillGroup; index: number }) {
  return (
    <article className={`group reveal relative min-h-0 translate-y-[35px] overflow-hidden border-b border-line p-8 opacity-0 transition-all duration-400 after:absolute after:inset-x-0 after:bottom-0 after:h-0 after:bg-linear-to-t after:from-electric/15 after:to-transparent after:transition-[height] after:duration-400 hover:-translate-y-2 hover:bg-white/[.02] hover:after:h-[65%] sm:min-h-[390px] sm:border-r sm:[&:nth-child(2)]:border-r-0 lg:min-h-[450px] lg:border-b-0 lg:[&:last-child]:border-r-0 [&.visible]:translate-y-0 [&.visible]:opacity-100 ${delays[index]}`}>
      <div className="flex justify-between text-[#7fa0ff]">
        <span className="grid size-[52px] place-items-center border border-line"><Icon name={skill.icon} size={25} /></span>
        <small className="text-[#555a64]">0{index + 1}</small>
      </div>
      <h3 className="mt-[50px] mb-[33px] text-[27px] sm:mt-[74px]">{skill.group}</h3>
      <ul className="relative z-2 m-0 list-none p-0">
        {skill.items.map((item) => (
          <li className="flex justify-between border-t border-line py-[13px] text-xs text-muted" key={item}>
            {item}<i className="mt-1.5 size-1 rounded-full bg-[#484d57] transition-colors group-hover:bg-ember" />
          </li>
        ))}
      </ul>
    </article>
  );
}
