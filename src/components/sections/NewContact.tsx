"use client";

import { useState, type ChangeEvent, type FormEvent, type ReactNode } from "react";
import { siteContent } from "@/data/siteContent";
import Button from "@/components/ui/Button";
import Icon from "@/components/ui/Icon";

const reveal = "reveal translate-y-[35px] opacity-0 transition-[opacity,transform] duration-700 [&.visible]:translate-y-0 [&.visible]:opacity-100";
const labelClasses = "text-[8px] tracking-[.15em] text-[#797e87]";
const fieldClasses = "w-full rounded-none border-0 border-b border-line bg-transparent pb-3.5 text-[13px] text-white outline-0 focus:border-electric";

type Status = "idle" | "sending" | "sent" | "error";
const initialForm = { name: "", email: "", type: "", message: "" };

function Field({ label, className = "", children }: { label: string; className?: string; children: ReactNode }) {
    return (
        <label className={`flex flex-col gap-[13px] ${className}`}>
            <span className={labelClasses}>{label.toUpperCase()}</span>
            {children}
        </label>
    );
}

export default function Contact() {
    const [form, setForm] = useState(initialForm);
    const [status, setStatus] = useState<Status>("idle");
    const { contact, projectTypes } = siteContent;

    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const submit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setStatus("sending");
        try {
            const res = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(form),
            });
            if (!res.ok) throw new Error("Failed");
            setForm(initialForm);
            setStatus("sent");
        } catch {
            setStatus("error");
        }
    };

    const buttonText =
        status === "sending" ? "Sending..." : status === "sent" ? contact.sent : contact.submit;

    return (
        <section className="relative bg-contact px-[6vw] py-[95px] before:absolute before:bottom-[-20vw] before:left-[-20vw] before:size-[45vw] before:rounded-full before:bg-electric before:opacity-[.08] before:blur-[180px] lg:px-[8vw] lg:py-[130px]" id="contact">
            <div className={reveal}>
                <span className="flex items-center gap-2.5 text-[10px] uppercase tracking-[.18em] text-eyebrow"><i className="h-px w-6 bg-electric" />{contact.eyebrow}</span>
                <h2 className="mt-[18px] text-[14vw] leading-[.93] tracking-[-.065em] sm:text-[clamp(45px,6.6vw,96px)]">{contact.title}<br /><em className="not-italic text-electric-light">{contact.emphasis}</em></h2>
            </div>

            <div className="relative mt-[65px] grid grid-cols-1 gap-[70px] lg:mt-[100px] lg:grid-cols-2 lg:gap-[11vw]">
                <div className={reveal}>
                    <p className="max-w-[460px] leading-[1.8] text-muted">{siteContent.contactIntro}</p>
                    <a className="mt-[55px] mb-[60px] inline-flex items-center gap-[15px] border-b border-line pb-2 text-[clamp(20px,2.4vw,34px)] lg:mb-[110px] lg:cursor-none" href={`mailto:${siteContent.email}`}>{siteContent.email} <Icon name="arrow" /></a>
                    <div className="flex gap-[30px] text-[8px] leading-8 tracking-[.14em] text-[#666b75] sm:gap-[75px]">
                        <span>{contact.locationLabel.toUpperCase()}<br /><strong className="text-[10px] text-[#c6c9cf]">{siteContent.location}</strong></span>
                        <span>{contact.statusLabel.toUpperCase()}<br /><strong className="text-[10px] text-[#c6c9cf]"><i className="mr-[7px] inline-block size-1.5 rounded-full bg-available" />{contact.status}</strong></span>
                    </div>
                </div>

                <form className={`${reveal} grid max-w-[650px] grid-cols-1 gap-[32px_20px]  sm:grid-cols-2`} onSubmit={submit}>
                    <Field label={contact.fields.name.label}>
                        <input className={fieldClasses} required name="name" value={form.name} onChange={handleChange} placeholder={contact.fields.name.placeholder} />
                    </Field>
                    <Field label={contact.fields.email.label}>
                        <input className={fieldClasses} required type="email" name="email" value={form.email} onChange={handleChange} placeholder={contact.fields.email.placeholder} />
                    </Field>
                    <Field label={contact.fields.type.label} >
                        <select className={`${fieldClasses} [&>option]:bg-testimonial`} name="type" value={form.type} onChange={handleChange}>
                            <option value="" disabled className="">{contact.fields.type.placeholder}</option>
                            {projectTypes.map((type) => <option key={type} className="bg-black">{type}</option>)}
                        </select>
                    </Field>
                    <Field label={contact.fields.message.label} className="col-span-1 sm:col-span-2">
                        <textarea className={`${fieldClasses} min-h-[100px] resize-y`} required name="message" value={form.message} onChange={handleChange} placeholder={contact.fields.message.placeholder} />
                    </Field>

                    <Button className="col-span-1 mt-2 justify-self-start border-0 sm:col-span-2" type="submit" disabled={status === "sending"}>
                        {buttonText}
                    </Button>
                    {status === "error" && <p className="col-span-1 text-xs text-red-400 sm:col-span-2">Something went wrong. Please try again.</p>}
                </form>
            </div>
        </section>
    );
}