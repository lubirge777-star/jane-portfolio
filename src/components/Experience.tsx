import { useEffect, useRef, useState } from "react";
import { Logo } from "./Icons";

const words = ["Research", "Sketch", "Design", "Prototype", "Launch"];

/** Intro curtain with a counter + word ticker — tells the story in 2 seconds. */
export function Preloader({ onDone }: { onDone: () => void }) {
  const [n, setN] = useState(0);
  const [leaving, setLeaving] = useState(false);
  const [gone, setGone] = useState(false);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setGone(true);
      onDone();
      return;
    }
    document.body.style.overflow = "hidden";
    let raf = 0;
    const t0 = performance.now();
    const D = 1900;
    const tick = (t: number) => {
      const k = Math.min(1, (t - t0) / D);
      setN(Math.round(100 * (1 - Math.pow(1 - k, 3))));
      if (k < 1) raf = requestAnimationFrame(tick);
      else {
        setLeaving(true);
        onDone();
        setTimeout(() => {
          setGone(true);
          document.body.style.overflow = "";
        }, 900);
      }
    };
    raf = requestAnimationFrame(tick);
    return () => {
      cancelAnimationFrame(raf);
      document.body.style.overflow = "";
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (gone) return null;
  const word = words[Math.min(words.length - 1, Math.floor((n / 100) * words.length))];

  return (
    <div
      className={`grain fixed inset-0 z-[200] flex flex-col justify-between bg-coal p-6 text-cream md:p-12 ${leaving ? "curtain-out" : ""}`}
      aria-hidden
    >
      <div className="flex items-center gap-3">
        <Logo className="h-12 w-12 animate-spin-slow" />
        <span className="font-display text-2xl font-bold">Jenny.</span>
      </div>
      <div className="flex flex-col-reverse items-start gap-2 pb-4 sm:flex-row sm:items-end sm:justify-between sm:gap-6">
        <p className="font-display text-[22px] font-bold text-cream/70 sm:text-[28px] md:text-[36px]">
          <span className="text-brand">✦</span> {word}
          <span className="caret">_</span>
        </p>
        <p className="font-display text-[72px] font-extrabold leading-none tabular-nums text-brand sm:text-[96px] md:text-[140px]">
          {n}
          <span className="text-cream/30">%</span>
        </p>
      </div>
      <div className="absolute inset-x-0 bottom-0 h-1.5 bg-cream/10">
        <div className="h-full bg-brand" style={{ width: `${n}%` }} />
      </div>
    </div>
  );
}

/** Dot + lagging ring cursor that reacts to links and "view" targets. */
export function Cursor() {
  const dot = useRef<HTMLDivElement>(null);
  const ring = useRef<HTMLDivElement>(null);
  const [label, setLabel] = useState("");

  useEffect(() => {
    if (!window.matchMedia("(hover: hover) and (pointer: fine)").matches) return;
    let x = -100, y = -100, rx = -100, ry = -100, raf = 0;
    const move = (e: MouseEvent) => {
      x = e.clientX;
      y = e.clientY;
      if (dot.current) dot.current.style.transform = `translate(${x}px, ${y}px)`;
      const t = e.target as HTMLElement;
      const view = t.closest<HTMLElement>("[data-cursor]");
      const hover = t.closest("a, button, [role='button'], input, textarea, select");
      const r = ring.current;
      if (!r) return;
      r.classList.toggle("is-view", !!view);
      r.classList.toggle("is-hover", !view && !!hover);
      setLabel(view?.dataset.cursor ?? "");
    };
    const loop = () => {
      rx += (x - rx) * 0.16;
      ry += (y - ry) * 0.16;
      if (ring.current) ring.current.style.transform = `translate(${rx}px, ${ry}px)`;
      raf = requestAnimationFrame(loop);
    };
    window.addEventListener("mousemove", move);
    raf = requestAnimationFrame(loop);
    return () => {
      window.removeEventListener("mousemove", move);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <>
      <div ref={ring} className="cursor-ring" aria-hidden>
        {label}
      </div>
      <div ref={dot} className="cursor-dot" aria-hidden />
    </>
  );
}

/** Top reading-progress bar + circular back-to-top button. */
export function ScrollProgress() {
  const [p, setP] = useState(0);
  useEffect(() => {
    const on = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      setP(max > 0 ? window.scrollY / max : 0);
    };
    on();
    window.addEventListener("scroll", on, { passive: true });
    window.addEventListener("resize", on);
    return () => {
      window.removeEventListener("scroll", on);
      window.removeEventListener("resize", on);
    };
  }, []);
  const C = 2 * Math.PI * 22;
  return (
    <>
      <div className="fixed inset-x-0 top-0 z-[60] h-[3px] origin-left bg-brand" style={{ transform: `scaleX(${p})` }} />
      <button
        type="button"
        aria-label="Back to top"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className={`fixed bottom-4 right-4 z-50 grid h-12 w-12 place-items-center md:h-14 md:w-14 rounded-full bg-coal text-cream shadow-xl transition-all duration-500 hover:-translate-y-1 hover:bg-brand hover:text-coal md:bottom-8 md:right-8 ${
          p > 0.06 ? "opacity-100" : "pointer-events-none translate-y-6 opacity-0"
        }`}
      >
        <svg viewBox="0 0 50 50" className="absolute inset-0 -rotate-90">
          <circle cx="25" cy="25" r="22" fill="none" stroke="currentColor" strokeOpacity=".15" strokeWidth="2.5" />
          <circle cx="25" cy="25" r="22" fill="none" stroke="#F79A1E" strokeWidth="2.5" strokeDasharray={C} strokeDashoffset={C * (1 - p)} strokeLinecap="round" />
        </svg>
        <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round">
          <path d="M12 19V5M6 11l6-6 6 6" />
        </svg>
      </button>
    </>
  );
}
