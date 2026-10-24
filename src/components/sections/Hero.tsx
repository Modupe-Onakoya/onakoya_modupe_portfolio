"use client";

import { useEffect, useState, type MouseEvent } from "react";
import { siteContent } from "@/data/siteContent";
import Button from "@/components/ui/Button";
import Icon from "@/components/ui/Icon";
import SocialLink from "@/components/ui/SocialLink";
import { socialLinks } from "@/data/socialLinks";


export default function Hero() {
  const [typed, setTyped] = useState("");

  useEffect(() => {
    let index = 0;
    const timer = window.setInterval(() => {
      setTyped(siteContent.roleLine.slice(0, index + 1));
      index++;
      if (index === siteContent.roleLine.length) window.clearInterval(timer);
    }, 55);
    return () => window.clearInterval(timer);
  }, []);

  const downloadCv = (event: MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    const url = URL.createObjectURL(new Blob([siteContent.cv], { type: "text/plain" }));
    const anchor = document.createElement("a");
    anchor.href = url;
    anchor.download = "Alex-Morgan-CV.txt";
    anchor.click();
    URL.revokeObjectURL(url);
  };

  return (
    <section className="relative flex min-h-screen items-center overflow-hidden px-[6vw] pt-[130px] pb-[70px] after:absolute after:top-[20%] after:-right-[35vw] after:size-[90vw] after:rounded-full after:border after:border-white/[.07] after:shadow-[0_0_0_8vw_rgba(255,255,255,.012),0_0_0_16vw_rgba(255,255,255,.01)] sm:after:-right-[8vw] sm:after:size-[48vw] lg:px-[8vw] lg:pt-40" id="home">
      <div className="absolute inset-0 bg-[linear-gradient(var(--color-line)_1px,transparent_1px),linear-gradient(90deg,var(--color-line)_1px,transparent_1px)] bg-size-[9vw_9vw] opacity-30 mask-[linear-gradient(to_bottom,black,transparent_90%)]" />
      <div className="animate-float absolute top-[10%] right-[2%] h-[28vw] w-[42vw] rounded-full bg-[#174eff] opacity-30 blur-[90px] motion-reduce:animate-none" />
      <div className="animate-float absolute bottom-[-12%] left-[20%] h-[20vw] w-[25vw] rounded-full bg-[#ff4d00] opacity-[.18] blur-[90px] [animation-delay:-4s] motion-reduce:animate-none" />
      <div className="absolute top-[110px] left-[6vw] z-2 flex items-center gap-2.5 text-[10px] tracking-[.18em] text-[#b2b6bd] lg:top-[17%] lg:right-[8vw] lg:left-auto">
        <span className="size-[7px] rounded-full bg-available shadow-[0_0_0_5px_rgba(91,234,139,.1)]" />{siteContent.hero.availability.toUpperCase()}
      </div>
      <div className="relative z-2 w-full lg:w-[min(1040px,90%)]">
        <p className="mb-[5px] text-[clamp(18px,2vw,28px)] text-[#b9bec7]">{siteContent.hero.intro}</p>
        <h1 className="text-[20.5vw] leading-[.78] font-bold tracking-[-.085em] sm:text-[clamp(76px,13vw,190px)]">
          {siteContent.hero.firstName.toUpperCase()}<br /><span className="bg-[linear-gradient(100deg,#fafafa_15%,#a8b5d6_48%,#356cff_72%,#ff6534_110%)] bg-clip-text text-transparent">{siteContent.hero.lastName.toUpperCase()}</span><b className="text-ember">.</b>
        </h1>
        <div className="mt-[42px] flex h-[27px] items-center text-[13px] tracking-[.04em] text-[#d5d7db] sm:text-base">
          <span>{typed}</span><i className="animate-blink ml-[5px] inline-block h-5 w-0.5 bg-electric motion-reduce:animate-none" />
        </div>
        <p className="max-w-[90%] text-[15px] leading-[1.7] text-muted lg:max-w-[520px]">{siteContent.heroDescription}</p>
        <div className="flex gap-2 z-100  md:hidden ">{socialLinks.map((link) => <SocialLink link={link} key={link.label} />)}</div>

        <div className="mt-[34px] flex flex-col items-stretch gap-3 sm:flex-row">
          <Button href="#work">{siteContent.hero.primaryAction}</Button>
          <Button href="#cv" secondary onClick={downloadCv}>{siteContent.hero.secondaryAction}</Button>
        </div>
      </div>
      <div className="absolute right-[8vw] bottom-[72px] z-2 hidden gap-[50px] text-[8px] leading-[1.8] tracking-[.17em] text-[#6f747e] lg:flex">
        <span>{siteContent.hero.locationLabel.toUpperCase()}<br /><b className="font-medium text-subtle">{siteContent.hero.locationValue.toUpperCase()}</b></span>
        <span>{siteContent.hero.timeLabel.toUpperCase()}<br /><b className="font-medium text-subtle">{siteContent.hero.timeValue}</b></span>
      </div>

      <a className="absolute bottom-[65px] left-[4vw] z-2 hidden items-center gap-[18px] text-[8px] tracking-[.2em] text-[#777c85] [writing-mode:vertical-rl] lg:flex lg:cursor-none" href="#about">
        <span>{siteContent.hero.scrollLabel.toUpperCase()}</span><i className="animate-bob grid size-[34px] rotate-90 place-items-center rounded-full border border-line motion-reduce:animate-none"><Icon name="arrow" /></i>
      </a>
      <div className="flex gap-2 z-100 max-sm:hidden">{socialLinks.map((link) => <SocialLink link={link} key={link.label} />)}</div>

    </section>
  );
}
