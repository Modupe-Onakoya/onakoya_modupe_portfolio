import type { Testimonial } from "@/data/testimonials";

export default function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <blockquote className="m-0 w-[80vw] border border-line bg-white/[.025] p-7 backdrop-blur-xl sm:w-[min(520px,80vw)] sm:p-10">
      <span className="font-serif text-[64px] leading-[.5] text-electric">“</span>
      <p className="min-h-[120px] text-[17px] leading-[1.65] text-[#c8cbd1]">{testimonial.quote}</p>
      <footer className="flex items-center gap-3 border-t border-line pt-5">
        <i className="grid size-[38px] place-items-center rounded-full bg-[#232732] not-italic text-[#9eb4ef]">{testimonial.name.slice(0, 1)}</i>
        <div><strong className="block text-xs">{testimonial.name}</strong><small className="mt-[3px] block text-[9px] text-muted">{testimonial.role}</small></div>
      </footer>
    </blockquote>
  );
}
