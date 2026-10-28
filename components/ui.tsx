import type { ReactNode } from "react";
import type { IconType } from "react-icons";
import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";
import { FaXTwitter } from "react-icons/fa6";
import { profile, socials } from "@/lib/data";

export const socialLinks: {
  label: string;
  href: string;
  Icon: IconType;
  brand: string;
}[] = [
  { label: "GitHub", href: socials.github, Icon: FiGithub, brand: "#24292f" },
  {
    label: "LinkedIn",
    href: socials.linkedin,
    Icon: FiLinkedin,
    brand: "#0a66c2",
  },
  { label: "X (Twitter)", href: socials.x, Icon: FaXTwitter, brand: "#000000" },
];

export const mailLink = {
  label: "Email",
  href: `mailto:${profile.email}`,
  Icon: FiMail,
};

export function Section({
  id,
  children,
  className = "",
}: {
  id?: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <section
      id={id}
      className={`scroll-mt-20 px-4 py-20 sm:px-6 md:py-28 ${className}`}
    >
      <div className="mx-auto max-w-6xl">{children}</div>
    </section>
  );
}

// "About **Me**" style heading: the last word gets the gradient.
export function SectionHeading({
  title,
  highlight,
  eyebrow,
  subtitle,
}: {
  title: string;
  highlight: string;
  eyebrow?: string;
  subtitle?: string;
}) {
  return (
    <div className="mx-auto mb-12 max-w-2xl text-center md:mb-16">
      {eyebrow && (
        <p className="mb-3 font-mono text-[13px] font-semibold tracking-[0.3em] text-accent uppercase">
          {eyebrow}
        </p>
      )}
      <h2 className="font-display text-[clamp(34px,5vw,52px)] leading-tight font-extrabold text-ink">
        {title} <span className="gradient-text">{highlight}</span>
      </h2>
      {subtitle && (
        <p className="mt-4 text-[clamp(15px,1.6vw,17px)] leading-relaxed text-ink/65">
          {subtitle}
        </p>
      )}
    </div>
  );
}

// Renders "**word**" segments in the accent color.
export function Highlighted({ text }: { text: string }) {
  return text.split(/\*\*(.+?)\*\*/g).map((part, i) =>
    i % 2 ? (
      <span key={i} className="font-medium text-accent">
        {part}
      </span>
    ) : (
      part
    ),
  );
}

export function Monogram({
  text,
  color,
  className = "h-12 w-12",
}: {
  text: string;
  color: string;
  className?: string;
}) {
  return (
    <div
      className={`grid shrink-0 place-content-center rounded-xl font-display text-sm font-bold text-white ring-1 ring-white/15 ${className}`}
      style={{ background: color }}
    >
      {text}
    </div>
  );
}
