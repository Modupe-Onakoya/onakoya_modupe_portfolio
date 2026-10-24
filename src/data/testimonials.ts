export interface Testimonial {
  quote: string;
  name: string;
  role: string;
}

export const testimonials: Testimonial[] = [
  {
    quote: "Alex turns ambitious ideas into products that feel inevitable. The craft is exceptional, but the clarity they bring is the real superpower.",
    name: "Maya Chen",
    role: "Founder, Forma",
  },
  {
    quote: "The rare engineer who understands that every millisecond and every pixel contributes to the story. Our launch exceeded every expectation.",
    name: "Daniel Reid",
    role: "Creative Director, Northstar",
  },
  {
    quote: "We shipped in half the expected time without compromising quality. Alex elevated both our product and the way our team thinks about frontend.",
    name: "Priya Shah",
    role: "VP Product, Nexus",
  },
];
