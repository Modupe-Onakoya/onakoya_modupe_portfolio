interface LogoProps {
  label?: string;
}

export default function Logo({ label = "Alex Morgan home" }: LogoProps) {
  return (
    <a className="text-[22px] font-bold tracking-[-.08em] lg:cursor-none" href="#home" aria-label={label}>
      MO<span className="text-ember">.</span>
    </a>
  );
}
