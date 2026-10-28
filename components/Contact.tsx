"use client";

import type { FormEvent } from "react";
import { FiMail, FiMapPin, FiMessageSquare, FiSend } from "react-icons/fi";
import Reveal from "./Reveal";
import { Section, SectionHeading, socialLinks } from "./ui";
import { profile } from "@/lib/data";

const inputClass =
  "w-full rounded-xl border border-white/10 bg-night/40 px-4 py-3.5 text-[15px] text-ink placeholder:text-ink/35 transition-colors outline-none focus:border-accent focus:ring-2 focus:ring-accent/20";

export default function Contact() {
  // No backend: open the visitor's mail app with the message already filled in.
  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const subject = `Portfolio enquiry from ${data.get("name")}`;
    const body = `${data.get("message")}\n\n${data.get("name")} <${data.get("email")}>`;
    window.location.href = `mailto:${profile.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  }

  const details = [
    {
      label: "Email",
      value: profile.email,
      href: `mailto:${profile.email}`,
      Icon: FiMail,
    },
    { label: "Location", value: profile.location, Icon: FiMapPin },
  ];

  return (
    <Section id="contact">
      <SectionHeading
        eyebrow="Get in touch"
        title="Let's"
        highlight="Connect"
        subtitle="Have a project in mind or want to collaborate? I'd love to hear from you."
      />

      <div className="mx-auto grid max-w-5xl gap-8 lg:grid-cols-[0.8fr_1.2fr]">
        <Reveal className="grid content-start gap-4">
          <div className="glass rounded-3xl p-8">
            <span className="grid h-12 w-12 place-content-center rounded-xl bg-linear-to-br from-accent to-accent-2 text-white shadow-[0_8px_24px_-6px_rgba(0,216,255,0.6)]">
              <FiMessageSquare size={22} />
            </span>
            <h3 className="mt-6 font-display text-xl font-bold text-ink">
              Open to Opportunities
            </h3>
            <p className="mt-2 text-[15px] leading-relaxed text-ink/70">
              {profile.availability}
            </p>
          </div>

          {details.map(({ label, value, href, Icon }) => (
            <div
              key={label}
              className="glass flex items-center gap-4 rounded-2xl p-5"
            >
              <span className="grid h-10 w-10 shrink-0 place-content-center rounded-lg bg-accent/10 text-accent">
                <Icon size={18} />
              </span>
              <div className="min-w-0">
                <p className="text-[12px] font-medium tracking-wider text-ink/50 uppercase">
                  {label}
                </p>
                {href ? (
                  <a
                    href={href}
                    className="block truncate font-semibold text-ink hover:text-accent"
                  >
                    {value}
                  </a>
                ) : (
                  <p className="truncate font-semibold text-ink">{value}</p>
                )}
              </div>
            </div>
          ))}

          <div className="grid grid-cols-3 gap-3">
            {socialLinks.map(({ label, href, Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="flex h-13 items-center justify-center gap-2 rounded-xl bg-white/5 text-[15px] font-bold text-ink ring-1 ring-white/5 transition-colors hover:bg-white/10 hover:text-accent"
              >
                <Icon size={18} />
                <span className="hidden sm:inline">{label.split(" ")[0]}</span>
              </a>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <form
            onSubmit={onSubmit}
            className="glass grid gap-6 rounded-3xl p-6 sm:p-10"
          >
            <h3 className="font-display text-xl font-bold text-ink">
              Send a Message
            </h3>
            <label className="grid gap-2.5 text-sm font-semibold text-ink/90">
              Your Name
              <input
                name="name"
                required
                autoComplete="name"
                placeholder="John Doe"
                className={inputClass}
              />
            </label>
            <label className="grid gap-2.5 text-sm font-semibold text-ink/90">
              Email Address
              <input
                name="email"
                type="email"
                required
                autoComplete="email"
                placeholder="john@example.com"
                className={inputClass}
              />
            </label>
            <label className="grid gap-2.5 text-sm font-semibold text-ink/90">
              Message
              <textarea
                name="message"
                required
                rows={5}
                placeholder="Tell me about your project..."
                className={`${inputClass} resize-y`}
              />
            </label>
            <button
              type="submit"
              className="glow-soft flex h-13 items-center justify-center gap-2.5 rounded-xl bg-accent text-[15px] font-bold text-night transition-all hover:-translate-y-0.5 hover:brightness-110"
            >
              <FiSend size={17} /> Send Message
            </button>
          </form>
        </Reveal>
      </div>
    </Section>
  );
}
