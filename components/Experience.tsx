import { FiBriefcase } from "react-icons/fi";
import Reveal from "./Reveal";
import { Monogram, Section, SectionHeading } from "./ui";
import { experience } from "@/lib/data";

export default function Experience() {
  return (
    <Section id="experience">
      <SectionHeading
        title="Work"
        highlight="Experience"
        subtitle="Where I've been building products, and what I shipped along the way."
      />

      <ol className="relative mx-auto grid max-w-4xl gap-10 border-l border-white/10 pl-8 sm:pl-12">
        {experience.map((job, i) => (
          <li key={job.company} className="relative">
            <span className="absolute top-7 -left-[calc(2rem+9px)] grid h-4.5 w-4.5 place-content-center rounded-full bg-night ring-2 ring-accent sm:-left-[calc(3rem+9px)]">
              <span className="h-2 w-2 rounded-full bg-accent" />
            </span>
            <Reveal delay={i * 0.08}>
              <article className="glass rounded-2xl p-6 transition-colors hover:border-accent/40 sm:p-8">
                <div className="flex flex-wrap items-start justify-between gap-4">
                  <div className="flex items-center gap-4">
                    <Monogram text={job.initials} color={job.color} />
                    <div>
                      <h3 className="font-display text-xl font-bold text-ink">
                        {job.role}
                      </h3>
                      <p className="flex items-center gap-1.5 text-[15px] text-ink/60">
                        <FiBriefcase size={14} /> {job.company}
                      </p>
                    </div>
                  </div>
                  <span className="rounded-full border border-accent/30 bg-accent/10 px-3.5 py-1 font-mono text-xs font-semibold text-accent">
                    {job.period}
                  </span>
                </div>
                <ul className="mt-6 grid gap-3">
                  {job.points.map((point) => (
                    <li
                      key={point}
                      className="flex gap-3 text-[15px] leading-relaxed text-ink/75"
                    >
                      <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                      {point}
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          </li>
        ))}
      </ol>
    </Section>
  );
}
