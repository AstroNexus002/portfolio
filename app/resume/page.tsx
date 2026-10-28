import type { Metadata } from "next";
import Link from "next/link";
import { FiArrowLeft } from "react-icons/fi";
import PrintButton from "@/components/PrintButton";
import Reveal from "@/components/Reveal";
import {
  education,
  experience,
  profile,
  projects,
  skills,
  socials,
  tools,
} from "@/lib/data";

export const metadata: Metadata = {
  title: `Resume | ${profile.name}`,
};

function Heading({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="border-b border-ink/10 pb-2 text-sm font-semibold tracking-[0.15em] text-muted uppercase">
      {children}
    </h2>
  );
}

export default function ResumePage() {
  return (
    <div className="mx-auto max-w-4xl px-4 pt-28 pb-16 sm:px-6 sm:pt-32">
      <div className="no-print mb-6 flex items-center justify-between gap-4">
        <Link
          href="/"
          className="flex items-center gap-2 text-sm font-medium text-ink/70 hover:text-ink"
        >
          <FiArrowLeft /> Back home
        </Link>
        <PrintButton />
      </div>

      <Reveal>
        <article className="print-plain grid gap-8 glass rounded-3xl p-6 md:p-10">
          <header className="grid gap-2">
            <h1 className="text-[clamp(28px,5vw,44px)] leading-none font-display font-semibold text-ink">
              {profile.name}
            </h1>
            <p className="text-lg text-muted">{profile.title}</p>
            <p className="flex flex-wrap gap-x-4 gap-y-1 text-sm font-light text-ink/80">
              <a href={`mailto:${profile.email}`} className="hover:text-accent">
                {profile.email}
              </a>
              <span>{profile.location}</span>
              <a href={socials.github} className="hover:text-accent">
                GitHub
              </a>
              <a href={socials.linkedin} className="hover:text-accent">
                LinkedIn
              </a>
            </p>
            <p className="pt-2 leading-relaxed font-light text-ink/80">
              {profile.summary}
            </p>
          </header>

          <section className="grid gap-4">
            <Heading>Experience</Heading>
            {experience.map((job) => (
              <div key={job.company} className="grid gap-2">
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <h3 className="font-medium text-ink">
                    {job.role} ·{" "}
                    <span className="text-muted">{job.company}</span>
                  </h3>
                  <span className="text-sm font-light text-muted">
                    {job.period}
                  </span>
                </div>
                <ul className="list-disc space-y-1 pl-5 text-[15px] leading-snug font-light text-ink/80">
                  {job.points.map((p) => (
                    <li key={p}>{p}</li>
                  ))}
                </ul>
              </div>
            ))}
          </section>

          <section className="grid gap-4">
            <Heading>Projects</Heading>
            {projects.map((project) => (
              <div key={project.name} className="grid gap-2">
                <h3 className="font-medium text-ink">
                  <a href={project.liveUrl} className="hover:text-accent">
                    {project.name}
                  </a>
                </h3>
                <p className="text-[15px] font-light text-ink/80">
                  {project.description}
                </p>
                <p className="text-sm font-light text-muted">
                  {project.tags.join(" · ")}
                </p>
              </div>
            ))}
          </section>

          <section className="grid gap-4">
            <Heading>Education</Heading>
            {education.map((edu) => (
              <div
                key={edu.title}
                className="flex flex-wrap items-baseline justify-between gap-2"
              >
                <div>
                  <h3 className="font-medium text-ink">
                    {edu.title}, {edu.type}
                  </h3>
                  <p className="text-sm font-light text-muted">{edu.school}</p>
                </div>
                <span className="text-sm font-light text-muted">
                  {edu.period}
                </span>
              </div>
            ))}
          </section>

          <section className="grid gap-4 md:grid-cols-2">
            <div className="grid content-start gap-3">
              <Heading>Skills</Heading>
              <p className="text-[15px] leading-relaxed font-light text-ink/80">
                {skills.map((s) => s.name).join(" · ")}
              </p>
            </div>
            <div className="grid content-start gap-3">
              <Heading>Tools</Heading>
              <p className="text-[15px] leading-relaxed font-light text-ink/80">
                {tools.map((t) => t.name).join(" · ")}
              </p>
            </div>
          </section>
        </article>
      </Reveal>
    </div>
  );
}
