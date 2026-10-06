import { ArrowRight, LabelDots, Sparks } from "./Icons";
import { useCountUp, useInView } from "../hooks/motion";

const stats = [
  { value: 8, suffix: "+", label: "Years of Experience" },
  { value: 250, suffix: "+", label: "Projects Delivered" },
  { value: 350, suffix: "+", label: "Happy Clients" },
];

function Stat({ value, suffix, label, run }: { value: number; suffix: string; label: string; run: boolean }) {
  const n = useCountUp(value, run);
  return (
    <div className="group">
      <dt className="sr-only">{label}</dt>
      <dd className="font-display text-[26px] font-bold leading-none tabular-nums text-brand transition-transform duration-300 group-hover:-translate-y-1 sm:text-[34px]">
        {n}
        {suffix}
      </dd>
      <dd className="mt-2 text-[15px] text-cream/70 sm:text-[18px]">{label}</dd>
    </div>
  );
}

function Stats() {
  const { ref, inView } = useInView<HTMLDListElement>(0.4);
  return (
    <dl ref={ref} className="reveal mt-7 grid grid-cols-3 gap-3 border-y border-cream/10 py-5 sm:gap-4 sm:py-6" style={{ ["--d" as string]: "260ms" }}>
      {stats.map((s) => (
        <Stat key={s.label} {...s} run={inView} />
      ))}
    </dl>
  );
}

function Pixels({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 60 60" className={className} aria-hidden>
      <g fill="#E2850C" opacity=".75">
        <rect x="20" y="0" width="20" height="20" />
        <rect x="0" y="20" width="20" height="20" />
        <rect x="20" y="20" width="20" height="20" opacity=".6" />
        <rect x="20" y="40" width="20" height="20" />
        <rect x="40" y="20" width="20" height="20" opacity=".5" />
      </g>
    </svg>
  );
}

export default function About() {
  return (
    <section id="about" className="relative overflow-hidden border-t-4 border-brand bg-coal py-16 text-cream md:py-24">
      {/* subtle glow */}
      <div className="pointer-events-none absolute -right-40 top-1/3 h-[360px] w-[360px] rounded-full bg-brand/10 blur-[120px]" />

      <div className="relative mx-auto grid max-w-[1240px] items-center gap-12 px-4 sm:px-6 lg:grid-cols-[minmax(0,420px)_1fr] lg:gap-20 xl:gap-24">
        {/* Visual — inset padding keeps floating cards inside the section */}
        <div className="reveal zoom relative mx-auto w-full max-w-[340px] px-3 py-4 sm:max-w-[380px] lg:max-w-none">
          <div className="chamfer relative aspect-[4/5] overflow-hidden rounded-bl-[24px] bg-brand">
            <img
              src="/images/about.jpg"
              alt="Portrait of Jenny Scott"
              loading="lazy"
              className="h-full w-full object-cover object-top transition-transform duration-[1.2s] ease-out hover:scale-105"
            />
            <Pixels className="absolute left-4 top-4 h-10 w-10 mix-blend-multiply sm:h-12 sm:w-12" />
            <Pixels className="absolute bottom-20 right-4 h-9 w-9 rotate-90 mix-blend-multiply sm:h-10 sm:w-10" />
          </div>

          {/* floating cards (kept within the padded wrapper) */}
          <div className="animate-float absolute bottom-0 right-0 rounded-2xl bg-cream px-4 py-3 text-coal shadow-[0_24px_40px_-20px_rgba(0,0,0,0.6)]">
            <p className="font-display text-[26px] font-bold leading-none text-brand sm:text-[30px]">8+</p>
            <p className="mt-1 text-[13px] font-medium sm:text-[14px]">Years crafting products</p>
          </div>
          <div className="absolute left-0 top-10 rotate-[-6deg] rounded-full bg-cream px-3.5 py-1.5 font-display text-[13px] font-semibold text-coal shadow-lg sm:text-[14px]">
            Hello! 👋
          </div>
        </div>

        {/* Copy */}
        <div>
          <div className="t-label reveal flex items-center gap-3 font-medium">
            <LabelDots light />
            About Me
          </div>
          <h2 className="t-h2 reveal mt-3 font-display font-bold tracking-[-0.02em]" style={{ ["--d" as string]: "100ms" }}>
            Who is{" "}
            <span className="relative inline-block text-brand">
              Jenny Scott?
              <Sparks className="absolute -right-4 -top-2 h-5 w-5 text-cream md:-right-6 md:h-7 md:w-7" />
            </span>
          </h2>
          <p className="t-body reveal mt-5 max-w-[580px] text-cream/75" style={{ ["--d" as string]: "180ms" }}>
            I’m a product designer based in the USA who loves turning complex problems into simple, delightful
            experiences. Over the last eight years I’ve partnered with startups and global brands to design apps,
            websites, dashboards and design systems that people genuinely enjoy using.
          </p>

          <Stats />

          <div className="reveal mt-8 flex flex-wrap items-center gap-3" style={{ ["--d" as string]: "340ms" }}>
            <a
              href="#contact"
              className="group inline-flex h-12 items-center gap-3 rounded-full bg-brand pl-6 pr-1.5 text-[16px] font-semibold text-coal transition hover:bg-brand-dark md:h-14"
            >
              Download CV
              <span className="grid h-9 w-9 md:h-11 md:w-11 place-items-center rounded-full bg-coal text-cream transition-transform duration-300 group-hover:translate-x-1">
                <ArrowRight className="h-5 w-5" />
              </span>
            </a>
            <a
              href="#contact"
              className="inline-flex h-12 items-center rounded-full border-2 border-cream/80 px-6 text-[16px] font-semibold transition md:h-14 md:px-8 hover:border-brand hover:bg-brand hover:text-coal"
            >
              Let’s Talk
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
