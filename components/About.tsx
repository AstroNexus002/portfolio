import Image from "next/image";
import Link from "next/link";
import { FiFileText, FiMail, FiMapPin, FiUser } from "react-icons/fi";
import Reveal from "./Reveal";
import { Section, SectionHeading } from "./ui";
import { profile } from "@/lib/data";

const facts = [
  {
    label: "Name",
    value: profile.name,
    Icon: FiUser,
    tone: "text-accent bg-accent/10",
  },
  {
    label: "Location",
    value: profile.location,
    Icon: FiMapPin,
    tone: "text-accent-2 bg-accent-2/15",
  },
  {
    label: "Email",
    value: profile.email,
    Icon: FiMail,
    tone: "text-accent-3 bg-accent-3/10",
    wide: true,
  },
];

export default function About() {
  const firstName = profile.name.split(" ")[0];

  return (
    <Section id="about">
      <SectionHeading title="About" highlight="Me" />

      <div className="grid items-center gap-14 md:grid-cols-[0.9fr_1.1fr] lg:gap-20">
        <Reveal className="relative mx-auto w-full max-w-sm md:max-w-md">
          <div className="absolute -inset-10 -z-10 rounded-full bg-[radial-gradient(circle,rgb(0_150_255/0.3),rgb(139_92_246/0.15)_45%,transparent_70%)] blur-2xl" />
          <div className="glass rounded-2xl p-2.5 shadow-[0_20px_60px_-20px_rgba(0,0,0,0.6)]">
            <div className="relative aspect-square overflow-hidden rounded-xl bg-[linear-gradient(145deg,#2a1356,#150828)]">
              {profile.photo ? (
                <Image
                  src={profile.photo}
                  alt={profile.name}
                  fill
                  sizes="(min-width: 768px) 28rem, 90vw"
                  className="object-cover"
                />
              ) : (
                <div className="grid h-full place-content-center">
                  <span className="gradient-text font-display text-[clamp(96px,16vw,160px)] leading-none font-extrabold">
                    {profile.initials}
                  </span>
                </div>
              )}
              <span className="absolute bottom-4 left-4 flex items-center gap-2 rounded-full bg-night/80 px-3.5 py-1.5 text-xs font-semibold text-ink backdrop-blur">
                <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_8px_#34d399]" />
                Available for work
              </span>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <h3 className="font-display text-[clamp(26px,3vw,32px)] font-bold text-ink">
            Hi, I&rsquo;m <span className="gradient-text">{firstName}</span>
          </h3>
          <p className="mt-5 text-[clamp(15px,1.6vw,17px)] leading-[1.8] text-ink/75">
            {profile.about}
          </p>

          <dl className="mt-8 grid gap-4 sm:grid-cols-2">
            {facts.map(({ label, value, Icon, tone, wide }) => (
              <div
                key={label}
                className={`glass flex items-center gap-4 rounded-xl p-4 ${wide ? "sm:col-span-2" : ""}`}
              >
                <span
                  className={`grid h-12 w-12 shrink-0 place-content-center rounded-lg ${tone}`}
                >
                  <Icon size={20} />
                </span>
                <div className="min-w-0">
                  <dt className="text-[13px] text-ink/55">{label}</dt>
                  <dd className="truncate font-semibold text-ink">{value}</dd>
                </div>
              </div>
            ))}
          </dl>

          <Link
            href="/resume"
            className="mt-9 inline-flex h-12 items-center gap-2.5 rounded-xl bg-accent-2 px-7 text-[15px] font-bold text-white shadow-[0_8px_30px_-6px_rgba(139,92,246,0.7)] transition-all hover:-translate-y-0.5 hover:brightness-110"
          >
            <FiFileText size={18} /> Download Resume
          </Link>
        </Reveal>
      </div>
    </Section>
  );
}
