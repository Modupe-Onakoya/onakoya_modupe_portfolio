import { testimonials } from "@/data/testimonials";
import SectionHeading from "@/components/ui/SectionHeading";
import TestimonialCard from "@/components/ui/TestimonialCard";
import { siteContent } from "@/data/siteContent";

export default function Testimonials() {
  return (
    <section className="overflow-hidden bg-testimonial py-[120px]">
      <div className="px-[6vw] lg:px-[8vw]"><SectionHeading eyebrow={siteContent.headings.testimonials.eyebrow} title={siteContent.headings.testimonials.title} /></div>
      <div className="animate-quote-scroll flex w-max gap-[18px] motion-reduce:animate-none hover:[animation-play-state:paused]">
        {[...testimonials, ...testimonials].map((testimonial, index) => <TestimonialCard testimonial={testimonial} key={`${testimonial.name}-${index}`} />)}
      </div>
    </section>
  );
}
