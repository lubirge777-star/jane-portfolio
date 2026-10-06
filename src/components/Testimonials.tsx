import { useEffect, useRef, useState } from "react";
import { ArrowRight, LabelDots, Quote, Sparks } from "./Icons";
import { SplitText } from "./Motion";

const items = [
  {
    name: "Marcus Bennett",
    role: "CEO, Pocket Finance",
    img: "https://images.pexels.com/photos/26150470/pexels-photo-26150470.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop",
    quote:
      "Jenny didn’t just design an app — she redesigned how our users feel about money. Our retention doubled within a quarter of launch.",
  },
  {
    name: "Amara Okafor",
    role: "Founder, Glow Skincare",
    img: "https://images.pexels.com/photos/18351014/pexels-photo-18351014.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop",
    quote:
      "She has a rare gift: listening deeply, then delivering something better than what you imagined. Every pixel has a reason.",
  },
  {
    name: "Daniel Reyes",
    role: "Head of Product, Pulse Labs",
    img: "https://images.pexels.com/photos/38740728/pexels-photo-38740728.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop",
    quote:
      "Our dashboard went from ‘where do I click?’ to ‘wow’. Jenny’s design system still saves our engineers hours every week.",
  },
  {
    name: "Leo Hartmann",
    role: "CTO, Atlas Cloud",
    img: "https://images.pexels.com/photos/33799456/pexels-photo-33799456.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop",
    quote:
      "Organised, fast, and genuinely fun to work with. The handoff files were the cleanest our dev team has ever seen.",
  },
];

const logos = ["Pocket", "Pulse", "Atlas", "Roast&Root", "Glow", "Brightly", "Nimbus", "Orbit"];
const DURATION = 6000;

export default function Testimonials() {
  const [i, setI] = useState(0);
  const [paused, setPaused] = useState(false);
  const [tick, setTick] = useState(0);
  const touch = useRef(0);

  const go = (n: number) => {
    setI((n + items.length) % items.length);
    setTick((t) => t + 1);
  };

  useEffect(() => {
    if (paused) return;
    const id = setTimeout(() => go(i + 1), DURATION);
    return () => clearTimeout(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [i, paused, tick]);

  const t = items[i];

  return (
    <section id="testimonials" className="grain relative overflow-hidden bg-coal py-16 text-cream md:py-24">
      <div className="pointer-events-none absolute -left-40 top-10 h-[420px] w-[420px] rounded-full bg-brand/10 blur-[120px]" />
      <div className="relative mx-auto max-w-[1240px] px-4 sm:px-6">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <div className="t-label reveal flex items-center gap-3 font-medium">
              <LabelDots light />
              Testimonials
            </div>
            <h2 className="t-h2 reveal mt-3 font-display font-bold tracking-[-0.02em]">
              <SplitText text="Kind Words From" />
              <span className="relative inline-block text-brand">
                <SplitText text="Kind People" start={3} />
                <Sparks className="absolute -right-4 -top-3 h-6 w-6 text-cream md:-right-6 md:h-8 md:w-8" />
              </span>
            </h2>
          </div>
          <div className="reveal flex gap-3">
            <button type="button" onClick={() => go(i - 1)} aria-label="Previous testimonial" className="grid h-12 w-12 place-items-center rounded-full border-2 border-cream/25 transition hover:border-brand hover:bg-brand hover:text-coal">
              <ArrowRight className="h-5 w-5 rotate-180" />
            </button>
            <button type="button" onClick={() => go(i + 1)} aria-label="Next testimonial" className="grid h-12 w-12 place-items-center rounded-full bg-brand text-coal transition hover:scale-105">
              <ArrowRight className="h-5 w-5" />
            </button>
          </div>
        </div>

        <div
          className="reveal mt-10 grid gap-6 rounded-[24px] border border-cream/10 bg-coal-2/60 p-5 backdrop-blur sm:p-7 md:grid-cols-[200px_1fr] md:gap-10 md:rounded-[28px] md:p-10"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          onTouchStart={(e) => (touch.current = e.touches[0].clientX)}
          onTouchEnd={(e) => {
            const dx = e.changedTouches[0].clientX - touch.current;
            if (Math.abs(dx) > 50) go(dx < 0 ? i + 1 : i - 1);
          }}
          aria-roledescription="carousel"
          aria-live="polite"
        >
          <div className="flex items-center gap-5 md:flex-col md:items-start">
            <div key={`img-${i}`} className="hero-in relative h-16 w-16 shrink-0 sm:h-20 sm:w-20 md:h-32 md:w-32">
              <img src={t.img} alt={t.name} className="h-full w-full rounded-[20px] object-cover md:rounded-[24px]" />
              <span className="absolute -bottom-2 -right-2 grid h-8 w-8 place-items-center rounded-full bg-brand text-coal md:h-10 md:w-10">
                <Quote className="h-4 w-5" />
              </span>
            </div>
            <div key={`n-${i}`} className="hero-in" style={{ ["--d" as string]: "100ms" }}>
              <p className="font-display text-[17px] font-bold md:mt-3 md:text-[19px]">{t.name}</p>
              <p className="text-[14px] text-cream/60">{t.role}</p>
              <p className="mt-2 text-brand" aria-label="5 out of 5 stars">★★★★★</p>
            </div>
          </div>

          <div className="flex flex-col">
            <blockquote key={`q-${i}`} className="split-run min-h-[7.5em] font-display text-[17px] font-semibold leading-[1.45] sm:min-h-[5.5em] sm:text-[21px] lg:text-[26px]">
              “<SplitText text={t.quote} />”
            </blockquote>

            <div className="mt-auto flex gap-2 pt-6">
              {items.map((_, k) => (
                <button
                  key={k}
                  type="button"
                  onClick={() => go(k)}
                  aria-label={`Show testimonial ${k + 1}`}
                  className="relative h-1.5 flex-1 overflow-hidden rounded-full bg-cream/15"
                >
                  <span
                    key={`${k}-${i}-${tick}`}
                    className="absolute inset-y-0 left-0 rounded-full bg-brand"
                    style={{
                      width: k < i ? "100%" : k === i ? undefined : "0%",
                      animation: k === i ? `grow ${DURATION}ms linear forwards` : undefined,
                      animationPlayState: paused ? "paused" : "running",
                    }}
                  />
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Logo wall */}
        <div className="marquee-wrap mt-16 overflow-hidden [mask-image:linear-gradient(90deg,transparent,#000_15%,#000_85%,transparent)]">
          <p className="mb-5 text-center text-[15px] text-cream/50">Trusted by teams who care about craft</p>
          <div className="animate-marquee flex w-max items-center gap-16" style={{ animationDuration: "40s" }}>
            {[...logos, ...logos].map((l, k) => (
              <span key={k} className="font-display text-[22px] font-extrabold tracking-tight text-cream/25 transition-colors hover:text-brand md:text-[28px]">
                {l}
              </span>
            ))}
          </div>
        </div>
      </div>
      <style>{`@keyframes grow{from{width:0}to{width:100%}}`}</style>
    </section>
  );
}
