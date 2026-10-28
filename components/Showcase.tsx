"use client";

import { useState } from "react";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import ProjectCard from "./ProjectCard";
import Reveal from "./Reveal";
import { Monogram } from "./ui";
import { education, projects } from "@/lib/data";

const PAGE_SIZE = 6;
const categories = ["All", ...new Set(projects.map((p) => p.category))];

export default function Showcase() {
  const [tab, setTab] = useState<"projects" | "education">("projects");
  const [category, setCategory] = useState("All");
  const [expanded, setExpanded] = useState(false);

  const filtered =
    category === "All"
      ? projects
      : projects.filter((p) => p.category === category);
  const shown = expanded ? filtered : filtered.slice(0, PAGE_SIZE);

  return (
    <>
      <div
        role="tablist"
        aria-label="Showcase"
        className="glass mx-auto flex w-fit gap-1 rounded-2xl p-1.5"
      >
        {(["projects", "education"] as const).map((key) => (
          <button
            key={key}
            role="tab"
            type="button"
            aria-selected={tab === key}
            onClick={() => setTab(key)}
            className={`rounded-xl px-6 py-2.5 text-[15px] font-bold capitalize transition-colors sm:px-9 ${
              tab === key
                ? "bg-white/15 text-ink shadow-inner"
                : "text-ink/45 hover:text-ink/80"
            }`}
          >
            {key}
          </button>
        ))}
      </div>

      {tab === "projects" ? (
        <>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            {categories.map((name) => {
              const count =
                name === "All"
                  ? projects.length
                  : projects.filter((p) => p.category === name).length;
              const active = category === name;
              return (
                <button
                  key={name}
                  type="button"
                  aria-pressed={active}
                  onClick={() => {
                    setCategory(name);
                    setExpanded(false);
                  }}
                  className={`flex items-center gap-2.5 rounded-full border px-6 py-2.5 text-[13px] font-bold tracking-[0.15em] uppercase transition-colors ${
                    active
                      ? "border-white/25 bg-white/15 text-ink"
                      : "border-white/10 text-ink/45 hover:border-white/20 hover:text-ink/80"
                  }`}
                >
                  {name}
                  <span
                    className={`grid h-5 min-w-5 place-content-center rounded-full px-1 text-[11px] tracking-normal ${
                      active ? "bg-white text-night" : "bg-white/10 text-ink/70"
                    }`}
                  >
                    {count}
                  </span>
                </button>
              );
            })}
          </div>

          <div className="mt-12 grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
            {shown.map((project, i) => (
              <Reveal
                key={project.name}
                delay={(i % 3) * 0.08}
                className="h-full"
              >
                <ProjectCard project={project} priority={i < 3} />
              </Reveal>
            ))}
          </div>

          {filtered.length > PAGE_SIZE && (
            <button
              type="button"
              onClick={() => setExpanded((v) => !v)}
              className="glass mx-auto mt-12 flex items-center gap-2 rounded-full px-7 py-3 text-[15px] font-bold text-ink transition-colors hover:border-accent/50"
            >
              {expanded ? (
                <>
                  Show Less <FiChevronUp />
                </>
              ) : (
                <>
                  View More Projects <FiChevronDown />
                </>
              )}
            </button>
          )}
        </>
      ) : (
        <div className="mx-auto mt-12 grid max-w-4xl gap-7 sm:grid-cols-2">
          {education.map((edu, i) => (
            <Reveal key={edu.title} delay={i * 0.08}>
              <article className="glass flex h-full flex-col gap-5 rounded-3xl p-7 transition-colors hover:border-accent/40">
                <div className="flex items-center justify-between gap-4">
                  <Monogram
                    text={edu.initials}
                    color={edu.color}
                    className="h-14 w-14"
                  />
                  <span className="rounded-full border border-accent-2/40 bg-accent-2/15 px-3.5 py-1 text-xs font-bold text-[#c4b5fd]">
                    {edu.type}
                  </span>
                </div>
                <div>
                  <h3 className="font-display text-xl font-bold text-ink">
                    {edu.title}
                  </h3>
                  <p className="mt-1 text-[15px] text-ink/65">{edu.school}</p>
                </div>
                <p className="mt-auto font-mono text-[13px] text-accent">
                  {edu.period}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      )}
    </>
  );
}
