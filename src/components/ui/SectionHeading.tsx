interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  right?: string;
}

export default function SectionHeading({ eyebrow, title, right }: SectionHeadingProps) {
  return (
    <div className="reveal mb-[55px] block translate-y-[35px] opacity-0 transition-[opacity,transform] duration-700 ease-[cubic-bezier(.2,.8,.2,1)] motion-reduce:translate-y-0 motion-reduce:opacity-100 [&.visible]:translate-y-0 [&.visible]:opacity-100 lg:mb-[75px] lg:flex lg:items-end lg:justify-between">
      <div>
        <span className="flex items-center gap-2.5 text-[10px] uppercase tracking-[.18em] text-eyebrow">
          <i className="h-px w-6 bg-electric" />
          {eyebrow}
        </span>
        <h2 className="mt-[18px] text-[14vw] leading-[.93] tracking-[-.065em] sm:text-[clamp(45px,6.6vw,96px)]">{title}</h2>
      </div>
      {right && <p className="mt-6 max-w-[360px] text-sm leading-[1.7] text-muted lg:mt-0">{right}</p>}
    </div>
  );
}
