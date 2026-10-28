import Image from "next/image";
import { FaStar } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";
import type { Project } from "@/lib/data";

const MAX_TAGS = 4;

export default function ProjectCard({
  project,
  priority = false,
}: {
  project: Project;
  priority?: boolean;
}) {
  const visibleTags = project.tags.slice(0, MAX_TAGS);
  const hiddenTags = project.tags.slice(MAX_TAGS);

  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-3xl border border-white/10 bg-card/60 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-accent/50 hover:shadow-[0_20px_50px_-20px_rgba(0,216,255,0.35)]">
      <div className="relative aspect-40/21 overflow-hidden bg-black/30">
        <Image
          src={project.image}
          alt={`${project.name} preview`}
          fill
          priority={priority}
          sizes="(min-width: 1280px) 30vw, (min-width: 640px) 45vw, 100vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/2 bg-linear-to-t from-black/70 to-transparent" />
        {project.featured && (
          <span
            title="Featured project"
            className="absolute top-3.5 right-3.5 grid h-9 w-9 place-content-center rounded-full border border-amber-400/60 bg-black/70 text-amber-400 backdrop-blur-sm"
          >
            <FaStar size={14} />
          </span>
        )}
      </div>

      <div className="flex flex-1 flex-col p-6">
        <h3 className="font-display text-[clamp(17px,1.6vw,19px)] leading-snug font-bold text-ink">
          {project.name}
        </h3>
        <p className="mt-3 line-clamp-2 text-[14px] leading-relaxed text-ink/60">
          {project.description}
        </p>

        <div className="mt-5 flex flex-wrap items-center gap-2">
          {visibleTags.map((tag) => (
            <span
              key={tag}
              className="rounded-md border border-white/10 bg-white/5 px-2.5 py-1 text-[12px] font-semibold text-ink/90"
            >
              {tag}
            </span>
          ))}
          {hiddenTags.length > 0 && (
            <span
              title={hiddenTags.join(", ")}
              className="px-1 text-[12px] font-semibold text-ink/50"
            >
              +{hiddenTags.length}
            </span>
          )}
        </div>

        <div className="mt-auto pt-6">
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-10 items-center justify-center gap-2 rounded-lg bg-white text-[14px] font-semibold text-night transition-colors hover:bg-accent"
          >
            <FiExternalLink /> Visit Website
          </a>
        </div>
      </div>
    </article>
  );
}
