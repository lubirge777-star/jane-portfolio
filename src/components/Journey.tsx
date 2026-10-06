import { useRef } from "react";
import { LabelDots, Sparks } from "./Icons";
import { SplitText } from "./Motion";
import { useScrollProgress } from "../hooks/motion";

const chapters = [
  { year: "2017", title: "The first pixel", place: "Freelance", text: "Started redesigning local bakery menus and fell in love with how design changes behaviour." },
  { year: "2019", title: "Joined a startup", place: "Brightly · Junior UI Designer", text: "Shipped my first app to 100k users and learned that research beats opinions every time." },
  { year: "2021", title: "Leading product", place: "Pulse Labs · Product Designer", text: "Owned the analytics suite end-to-end, built the team’s first design system." },
  { year: "2023", title: "Awards & stages", place: "Awwwards · CSS Design Awards", text: "Two Site of the Day awards and talks at Config and UX London about storytelling in UI." },
  { year: "Now", title: "Your next chapter", place: "Independent · Open for work", text: "Partnering with ambitious founders to turn bold ideas into products people love." },
];

const steps = [
  { n: "01", title: "Discover", text: "Workshops, interviews & audits to find the real problem." },
  { n: "02", title: "Define", text: "Flows, wireframes and a clear north-star metric." },
  { n: "03", title: "Design", text: "High-fidelity UI, motion and a living design system." },
  { n: "04", title: "Deliver", text: "Prototypes, handoff and post-launch iteration." },
];

export default function Journey() {
  const line = useRef<HTMLOListElement>(null);
  const p = useScrollProgress(line, { start: 0.7, end: 0.45 });

  return (
    <section id="journey" className="relative overflow-hidden py-16 md:py-24">
      <div className="mx-auto max-w-[1240px] px-4 sm:px-6">
        <div className="text-center">
          <div className="t-label reveal inline-flex items-center gap-3 font-medium">
            <LabelDots />
            My Journey
          </div>
          <h2 className="t-h2 reveal mt-3 font-display font-bold tracking-[-0.02em]">
            <SplitText text="The Story" />
            <span className="relative inline-block text-brand">
              <SplitText text="So Far" start={2} />
              <Sparks className="absolute -right-4 -top-3 h-6 w-6 text-ink md:-right-6 md:h-8 md:w-8" />
            </span>
          </h2>
        </div>

        <ol ref={line} className="relative mx-auto mt-12 max-w-[900px] md:mt-14">
          {/* track */}
          <span className="absolute left-[19px] top-0 h-full w-[3px] rounded-full bg-ink/10 md:left-1/2 md:-translate-x-1/2" />
          <span
            className="absolute left-[19px] top-0 w-[3px] rounded-full bg-gradient-to-b from-brand to-brand-dark shadow-[0_0_18px_rgba(247,154,30,0.7)] md:left-1/2 md:-translate-x-1/2"
            style={{ height: `${p * 100}%` }}
          />

          {chapters.map((c, i) => {
            const lit = p >= (i + 0.2) / chapters.length;
            const left = i % 2 === 0;
            return (
              <li key={c.year} className="relative mb-10 grid pl-12 last:mb-0 md:grid-cols-2 md:gap-14 md:pl-0">
                <span
                  className={`absolute left-[8px] top-2 grid h-[25px] w-[25px] place-items-center rounded-full border-[3px] transition-all duration-500 md:left-1/2 md:-translate-x-1/2 ${
                    lit ? "scale-110 border-brand bg-brand" : "border-ink/20 bg-page"
                  }`}
                >
                  <span className={`h-2 w-2 rounded-full transition-colors ${lit ? "bg-coal" : "bg-transparent"}`} />
                </span>

                <div className={`reveal ${left ? "from-left md:col-start-1 md:text-right" : "from-right md:col-start-2"}`}>
                  <p className={`font-display text-[34px] font-extrabold leading-none transition-colors duration-500 md:text-[48px] ${lit ? "text-brand" : "text-stroke"}`}>
                    {c.year}
                  </p>
                  <h3 className="mt-2 font-display text-[20px] font-bold md:text-[22px]">{c.title}</h3>
                  <p className="mt-0.5 text-[14px] font-medium text-brand-dark">{c.place}</p>
                  <p className={`t-body mt-2 max-w-[400px] text-muted ${left ? "md:ml-auto" : ""}`}>{c.text}</p>
                </div>
              </li>
            );
          })}
        </ol>

        {/* Process */}
        <div className="mt-16 grid gap-4 sm:grid-cols-2 md:mt-20 lg:grid-cols-4 lg:gap-5">
          {steps.map((s, i) => (
            <div
              key={s.n}
              className="reveal group relative overflow-hidden rounded-[22px] bg-card p-6 transition-all duration-500 hover:-translate-y-2 hover:bg-coal hover:text-cream"
              style={{ ["--d" as string]: `${i * 100}ms` }}
            >
              <span className="absolute -right-3 -top-4 font-display text-[84px] font-extrabold leading-none text-ink/[0.05] transition-colors duration-500 group-hover:text-brand/20">
                {s.n}
              </span>
              <span className="grid h-12 w-12 place-items-center rounded-full bg-brand font-display font-bold text-coal transition-transform duration-500 group-hover:rotate-[360deg]">
                {s.n}
              </span>
              <h3 className="mt-5 font-display text-[20px] font-bold">{s.title}</h3>
              <p className="mt-1.5 text-[15px] leading-relaxed opacity-75">{s.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
