import Reveal from "./Reveal";
import Typewriter from "./Typewriter";
import HeroIllustration from "./HeroIllustration";
import { Highlighted, socialLinks } from "./ui";
import { profile } from "@/lib/data";

export default function Hero() {
  const [firstName, ...rest] = profile.name.toUpperCase().split(" ");
  const lastName = rest.join(" ");

  return (
    <section className="relative flex min-h-svh items-center px-4 pt-28 pb-24 sm:px-6">
      <div className="mx-auto grid w-full max-w-6xl items-center gap-12 lg:grid-cols-[1.1fr_1fr]">
        <Reveal>
          <h1 className="font-sans text-[clamp(56px,10vw,108px)] leading-[0.95] font-black tracking-tight">
            <span className="gradient-text block w-fit pb-2">{firstName}</span>
            <span className="relative block w-fit">
              <span className="gradient-text-warm">{lastName}</span>
              <span
                aria-hidden="true"
                className="reflection gradient-text-warm pointer-events-none absolute top-[78%] left-0 select-none"
              >
                {lastName}
              </span>
            </span>
          </h1>

          <p className="relative mt-8 min-h-[1.3em] font-display text-[clamp(22px,2.8vw,32px)] font-semibold text-accent">
            <Typewriter phrases={profile.roles} />
          </p>

          <p className="mt-6 max-w-xl text-[clamp(15px,1.7vw,17px)] leading-[1.85] text-ink/80">
            <Highlighted text={profile.intro} />
          </p>

          <a
            href="#projects"
            className="glow-soft mt-10 inline-flex h-13 items-center rounded-xl bg-accent px-8 text-[15px] font-bold text-night transition-all hover:-translate-y-0.5 hover:brightness-110"
          >
            Explore My Work
          </a>

          <div className="mt-10 flex gap-4">
            {socialLinks.map(({ label, href, Icon, brand }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="grid h-12 w-12 place-content-center rounded-xl text-white ring-1 ring-white/10 transition-transform hover:-translate-y-1"
                style={{ background: brand }}
              >
                <Icon size={20} />
              </a>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.15} className="relative hidden lg:block">
          <div className="absolute inset-10 rounded-full bg-accent-2/25 blur-3xl" />
          <div className="relative">
            <HeroIllustration />
          </div>
        </Reveal>
      </div>

      <a
        href="#about"
        aria-label="Scroll to About"
        className="absolute bottom-8 left-1/2 hidden h-12 w-7 -translate-x-1/2 justify-center rounded-full border-2 border-accent pt-2 md:flex"
      >
        <span className="scroll-dot h-2.5 w-1 rounded-full bg-accent" />
      </a>
    </section>
  );
}
