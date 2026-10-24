"use client";

import { useState, type FormEvent } from "react";
import { siteContent } from "@/data/siteContent";
import Button from "@/components/ui/Button";
import Icon from "@/components/ui/Icon";

const fieldClasses = "w-full rounded-none border-0 border-b border-line bg-transparent pb-3.5 text-[13px] text-white outline-0 focus:border-electric";

export default function Contact() {
  const [sent, setSent] = useState(false);

  const submit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSent(true);
  };

  return (
    <section className="relative bg-contact px-[6vw] py-[95px] before:absolute before:bottom-[-20vw] before:left-[-20vw] before:size-[45vw] before:rounded-full before:bg-electric before:opacity-[.08] before:blur-[180px] lg:px-[8vw] lg:py-[130px]" id="contact">
      <div className="reveal translate-y-[35px] opacity-0 transition-[opacity,transform] duration-700 [&.visible]:translate-y-0 [&.visible]:opacity-100">
        <span className="flex items-center gap-2.5 text-[10px] uppercase tracking-[.18em] text-eyebrow"><i className="h-px w-6 bg-electric" />{siteContent.contact.eyebrow}</span>
        <h2 className="mt-[18px] text-[14vw] leading-[.93] tracking-[-.065em] sm:text-[clamp(45px,6.6vw,96px)]">{siteContent.contact.title}<br /><em className="not-italic text-electric-light">{siteContent.contact.emphasis}</em></h2>
      </div>
      <div className="relative mt-[65px] grid grid-cols-1 gap-[70px] lg:mt-[100px] lg:grid-cols-2 lg:gap-[11vw]">
        <div className="reveal translate-y-[35px] opacity-0 transition-[opacity,transform] duration-700 [&.visible]:translate-y-0 [&.visible]:opacity-100">
          <p className="max-w-[460px] leading-[1.8] text-muted">{siteContent.contactIntro}</p>
          <a className="mt-[55px] mb-[60px] inline-flex items-center gap-[15px] border-b border-line pb-2 text-[clamp(20px,2.4vw,34px)] lg:mb-[110px] lg:cursor-none" href={`mailto:${siteContent.email}`}>{siteContent.email} <Icon name="arrow" /></a>
          <div className="flex gap-[30px] text-[8px] leading-8 tracking-[.14em] text-[#666b75] sm:gap-[75px]">
            <span>{siteContent.contact.locationLabel.toUpperCase()}<br /><strong className="text-[10px] text-[#c6c9cf]">{siteContent.location}</strong></span>
            <span>{siteContent.contact.statusLabel.toUpperCase()}<br /><strong className="text-[10px] text-[#c6c9cf]"><i className="mr-[7px] inline-block size-1.5 rounded-full bg-available" />{siteContent.contact.status}</strong></span>
          </div>
        </div>
        <form className="reveal grid max-w-[650px] translate-y-[35px] grid-cols-1 gap-[32px_20px] opacity-0 transition-[opacity,transform] duration-700 [&.visible]:translate-y-0 [&.visible]:opacity-100 sm:grid-cols-2" onSubmit={submit}>
          <label className="flex flex-col gap-[13px]"><span className="text-[8px] tracking-[.15em] text-[#797e87]">{siteContent.contact.fields.name.label.toUpperCase()}</span><input className={fieldClasses} required name="name" placeholder={siteContent.contact.fields.name.placeholder} /></label>
          <label className="flex flex-col gap-[13px]"><span className="text-[8px] tracking-[.15em] text-[#797e87]">{siteContent.contact.fields.email.label.toUpperCase()}</span><input className={fieldClasses} required type="email" name="email" placeholder={siteContent.contact.fields.email.placeholder} /></label>
          <label className="flex flex-col gap-[13px]"><span className="text-[8px] tracking-[.15em] text-[#797e87]">{siteContent.contact.fields.type.label.toUpperCase()}</span><select className={`${fieldClasses} [&>option]:bg-testimonial`} name="type" defaultValue=""><option value="" disabled>{siteContent.contact.fields.type.placeholder}</option>{siteContent.projectTypes.map((type) => <option key={type}>{type}</option>)}</select></label>
          <label className="col-span-1 flex flex-col gap-[13px] sm:col-span-2"><span className="text-[8px] tracking-[.15em] text-[#797e87]">{siteContent.contact.fields.message.label.toUpperCase()}</span><textarea className={`${fieldClasses} min-h-[100px] resize-y`} required name="message" placeholder={siteContent.contact.fields.message.placeholder} /></label>
          <Button className="col-span-1 mt-2 justify-self-start border-0 sm:col-span-2" type="submit">{sent ? siteContent.contact.sent : siteContent.contact.submit}</Button>
        </form>
      </div>
    </section>
  );
}
