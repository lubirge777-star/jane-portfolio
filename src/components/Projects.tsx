import { useEffect, useRef, useState } from "react";
import { ArrowUpRight, LabelDots, Sparks } from "./Icons";
import { SplitText } from "./Motion";
import { useScrollProgress } from "../hooks/motion";

const projects = [
  {
    title: "Pocket — Banking for Gen Z",
    client: "Pocket Finance",
    year: "2025",
    tags: ["Mobile App", "Fintech", "Branding"],
    img: "/images/project-1.jpg",
    story: "Young users found banking stressful. I turned onboarding into a 90-second conversation and budgets into playful goals.",
    metric: { value: "+212%", label: "Daily active users" },
    theme: "light",
  },
  {
    title: "Pulse — SaaS Analytics",
    client: "Pulse Labs",
    year: "2024",
    tags: ["Dashboard", "Data Viz", "SaaS"],
    img: "/images/project-2.jpg",
    story: "Forty charts became five clear insights — a calm dark interface that helps teams decide in minutes, not meetings.",
    metric: { value: "−48%", label: "Time to insight" },
    theme: "dark",
  },
  {
    title: "Roast & Root — Coffee Store",
    client: "Roast & Root",
    year: "2024",
    tags: ["Website", "E-commerce", "Storytelling"],
    img: "/images/project-3.jpg",
    story: "A slow-coffee brand needed a site that tastes like their beans. Editorial layouts and a 2-step checkout did the trick.",
    metric: { value: "3.4×", label: "Conversion rate" },
    theme: "brand",
  },
  {
    title: "Atlas — Design System",
    client: "Atlas Cloud",
    year: "2023",
    tags: ["Design System", "Tokens", "Docs"],
    img: "/images/project-4.jpg",
    story: "320 components, one source of truth. Atlas unified six product teams and shipped features twice as fast.",
    metric: { value: "2×", label: "Faster shipping" },
    theme: "light",
  },
] as const;

const themes = {
  light: { card: "bg-card text-ink", metric: "text-brand", btn: "bg-brand text-coal" },
  dark: { card: "bg-coal text-cream", metric: "text-brand", btn: "bg-brand text-coal" },
  brand: { card: "bg-brand text-coal", metric: "text-coal", btn: "bg-coal text-cream" },
};

function useIsDesktop() {
  const [d, setD] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia("(min-width: 768px)");
    const on = () => setD(mq.matches);
    on();
    mq.addEventListener("change", on);
    return () => mq.removeEventListener("change", on);
  }, []);
  return d;
}

export default function Projects() {
  const wrap = useRef<HTMLDivElement>(null);
  const p = useScrollProgress(wrap, { start: 0.2, end: 0.8 });
  const desktop = useIsDesktop();
  const N = projects.length;

  return (
    <section id="projects" className="py-16 md:py-24">
      <div className="mx-auto max-w-[1240px] px-4 sm:px-6">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between md:gap-6">
          <div>
            <div className="t-label reveal flex items-center gap-3 font-medium">
              <LabelDots />
              Selected Work
            </div>
            <h2 className="t-h2 reveal mt-3 font-display font-bold tracking-[-0.02em]">
              <SplitText text="Stories Told" />
              <span className="relative inline-block text-brand">
                <SplitText text="Through Pixels" start={2} />
                <Sparks className="absolute -right-3 -top-2 h-5 w-5 text-ink md:-right-5 md:h-7 md:w-7" />
              </span>
            </h2>
          </div>
          <p className="t-body reveal max-w-[360px] text-muted md:text-right">
            Every project starts with a problem and ends with people smiling. Scroll through a few chapters.
          </p>
        </div>

        <div ref={wrap} className="relative mt-10 flex flex-col gap-6 md:mt-12 md:block">
          {projects.map((pr, i) => {
            const t = themes[pr.theme];
            const passed = desktop ? Math.max(0, Math.min(1, p * N - i - 0.15)) : 0;
            const last = i === N - 1;
            const scale = last ? 1 : 1 - passed * 0.05;
            const dim = last ? 0 : passed * 0.3;
            return (
              <article key={pr.title} className="reveal md:sticky md:mb-8 md:last:mb-0" style={desktop ? { top: `${96 + i * 18}px` } : undefined}>
                <div
                  className={`${t.card} relative grid origin-top overflow-hidden rounded-[24px] shadow-[0_30px_60px_-34px_rgba(29,20,16,0.5)] md:h-[400px] md:grid-cols-[1.1fr_1fr] md:rounded-[28px] lg:h-[440px]`}
                  style={desktop ? { transform: `scale(${scale})`, filter: `brightness(${1 - dim})` } : undefined}
                >
                  <a href="#contact" data-cursor="View" className="group relative block aspect-[16/10] overflow-hidden md:aspect-auto md:h-full">
                    <img
                      src={pr.img}
                      alt={`${pr.title} case study preview`}
                      loading="lazy"
                      className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-105"
                    />
                    <span className="absolute left-4 top-4 rounded-full bg-coal/80 px-3 py-1 font-display text-[12px] font-semibold text-cream backdrop-blur sm:text-[13px]">
                      Chapter {String(i + 1).padStart(2, "0")}
                    </span>
                  </a>

                  <div className="flex min-h-0 flex-col p-5 sm:p-7 lg:p-9">
                    <div className="flex items-center justify-between text-[14px] opacity-70">
                      <span>{pr.client}</span>
                      <span>{pr.year}</span>
                    </div>
                    <h3 className="t-h3 mt-2.5 font-display font-bold tracking-[-0.01em]">{pr.title}</h3>
                    <ul className="mt-3 flex flex-wrap gap-1.5">
                      {pr.tags.map((tag) => (
                        <li key={tag} className="rounded-full border border-current/20 px-3 py-0.5 text-[13px] opacity-85">
                          {tag}
                        </li>
                      ))}
                    </ul>
                    <p className="mt-3 text-[15px] leading-relaxed opacity-80 lg:text-[16px]">{pr.story}</p>

                    <div className="mt-auto flex items-end justify-between gap-4 pt-5">
                      <div>
                        <p className={`font-display text-[32px] font-extrabold leading-none lg:text-[40px] ${t.metric}`}>{pr.metric.value}</p>
                        <p className="mt-1 text-[14px] opacity-70">{pr.metric.label}</p>
                      </div>
                      <a
                        href="#contact"
                        aria-label={`Read ${pr.title} case study`}
                        className={`grid h-11 w-11 shrink-0 place-items-center rounded-full transition-transform duration-500 hover:rotate-45 hover:scale-110 lg:h-12 lg:w-12 ${t.btn}`}
                      >
                        <ArrowUpRight className="h-5 w-5" />
                      </a>
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
