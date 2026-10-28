import { mailLink, socialLinks } from "./ui";
import { profile } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 px-4 py-14 sm:px-6">
      <div className="mx-auto flex max-w-6xl flex-col justify-between gap-10 md:flex-row md:items-end">
        <div className="max-w-sm">
          <p className="gradient-text w-fit font-display text-2xl font-extrabold">
            {profile.name}
          </p>
          <p className="mt-3 text-[15px] leading-relaxed text-ink/55">
            {profile.title} based in {profile.location.split(",")[0]}.
          </p>
        </div>

        <div className="md:text-right">
          <p className="text-[12px] font-bold tracking-[0.2em] text-ink/40 uppercase">
            Find me on
          </p>
          <div className="mt-4 flex gap-3">
            {[...socialLinks, mailLink].map(({ label, href, Icon }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith("mailto:") ? undefined : "_blank"}
                rel="noopener noreferrer"
                aria-label={label}
                className="grid h-11 w-11 place-content-center rounded-xl border border-white/20 text-ink/80 transition-colors hover:border-accent hover:text-accent"
              >
                <Icon size={18} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
