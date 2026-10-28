import TechIcon from "./TechIcon";
import { SectionHeading } from "./ui";
import { skills, tools, type Tech } from "@/lib/data";

function Row({ items, reverse = false }: { items: Tech[]; reverse?: boolean }) {
  return (
    <div className="marquee overflow-hidden py-3">
      {/* Rendered twice so the strip can loop seamlessly. */}
      <ul
        className={`marquee-track flex w-max gap-5 ${reverse ? "reverse" : ""}`}
      >
        {[...items, ...items].map((item, i) => (
          <li
            key={`${item.name}-${i}`}
            aria-hidden={i >= items.length}
            className="glass group flex h-30 w-30 shrink-0 flex-col items-center justify-center gap-3 rounded-2xl transition-all hover:-translate-y-1 hover:border-accent/50 sm:h-32 sm:w-32"
          >
            <span className="transition-transform group-hover:scale-110">
              <TechIcon icon={item.icon} color={item.color} size={44} />
            </span>
            <span className="max-w-[90%] truncate text-[12px] font-medium text-ink/60">
              {item.name}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function TechStack() {
  return (
    <section id="skills" className="scroll-mt-20 py-20 md:py-28">
      <div className="px-4 sm:px-6">
        <SectionHeading title="Tech" highlight="Stack" />
      </div>
      <div className="grid gap-4">
        <Row items={skills} />
        <Row items={tools} reverse />
      </div>
    </section>
  );
}
