import { useEffect, useRef, useState, type MouseEvent } from "react";
import { Magnetic, SplitText } from "./Motion";
import { ArrowRight, Dribbble, Facebook, Move, Pinterest, Quote, Sparks, XIcon } from "./Icons";

const roles = ["Product Designer", "UI/UX Designer", "Design Storyteller", "Prototype Maker"];

const avatars = [
  "https://images.pexels.com/photos/3936894/pexels-photo-3936894.jpeg?auto=compress&cs=tinysrgb&w=96&h=96&fit=crop",
  "https://images.pexels.com/photos/16160871/pexels-photo-16160871.jpeg?auto=compress&cs=tinysrgb&w=96&h=96&fit=crop",
  "https://images.pexels.com/photos/1820559/pexels-photo-1820559.jpeg?auto=compress&cs=tinysrgb&w=96&h=96&fit=crop",
  "https://images.pexels.com/photos/6497112/pexels-photo-6497112.jpeg?auto=compress&cs=tinysrgb&w=96&h=96&fit=crop",
];

const socials = [
  { label: "Facebook", Icon: Facebook },
  { label: "X (Twitter)", Icon: XIcon },
  { label: "Pinterest", Icon: Pinterest },
  { label: "Dribbble", Icon: Dribbble },
];

/** Scalloped seal with lettering placed one glyph at a time around the ring. */
function HireBadge({ className = "" }: { className?: string }) {
  const bumps = Array.from({ length: 28 }, (_, i) => {
    const a = (i / 28) * Math.PI * 2;
    return { x: 80 + Math.cos(a) * 72, y: 80 + Math.sin(a) * 72 };
  });
  const ring = Array.from("HIRE ME NOW ✦ AVAILABLE ");
  return (
    <a href="#contact" aria-label="Hire me now" className={`group block rounded-full transition-transform duration-500 hover:scale-105 ${className}`}>
      <svg viewBox="0 0 160 160" className="h-full w-full drop-shadow-[0_12px_20px_rgba(29,20,16,0.25)]">
        <circle cx="80" cy="80" r="72" fill="#1D1410" />
        {bumps.map((b, i) => (
          <circle key={i} cx={b.x} cy={b.y} r="6.4" fill="#1D1410" />
        ))}
        <circle cx="80" cy="80" r="44" fill="none" stroke="#F6EFE6" strokeOpacity=".12" />

        <g className="animate-spin-slow" style={{ transformBox: "view-box", transformOrigin: "center" }}>
          <g transform="translate(80 80)">
            {ring.map((c, i) => (
              <text
                key={i}
                x="0"
                y="-52"
                transform={`rotate(${(360 * i) / ring.length})`}
                textAnchor="middle"
                dominantBaseline="central"
                fontFamily="Syne, sans-serif"
                fontWeight="700"
                fontSize="13"
                fill="#F6EFE6"
              >
                {c}
              </text>
            ))}
          </g>
        </g>

        <circle cx="80" cy="80" r="21" fill="#F79A1E" className="transition-colors duration-500 group-hover:fill-[#ffb04a]" />
        <circle cx="73" cy="80" r="2.5" fill="#1D1410" />
        <circle cx="80" cy="80" r="2.5" fill="#1D1410" />
        <circle cx="87" cy="80" r="2.5" fill="#1D1410" />
      </svg>
    </a>
  );
}

function Globe() {
  return (
    <svg viewBox="0 0 800 800" className="h-full w-full" aria-hidden>
      <defs>
        <mask id="globe-mask">
          <circle cx="400" cy="400" r="400" fill="#fff" />
          <circle cx="400" cy="400" r="300" fill="#000" />
          <rect x="0" y="200" width="800" height="70" fill="#000" />
          <rect x="0" y="400" width="800" height="70" fill="#000" />
          <rect x="0" y="590" width="800" height="70" fill="#000" />
        </mask>
      </defs>
      <g mask="url(#globe-mask)">
        <circle cx="400" cy="400" r="400" className="fill-ring-soft" />
      </g>
      <rect x="70" y="270" width="660" height="130" rx="10" className="fill-ring-soft" opacity=".9" />
      <rect x="20" y="470" width="760" height="120" rx="10" className="fill-ring-soft" opacity=".9" />
    </svg>
  );
}

function SocialBlock() {
  return (
    <div>
      <p className="t-label font-medium text-muted">Follow Me On</p>
      <ul className="mt-2 flex items-center gap-1">
        {socials.map(({ label, Icon }) => (
          <li key={label}>
            <a
              href="#"
              aria-label={label}
              className="grid h-10 w-10 place-items-center rounded-full text-ink transition-all duration-300 hover:-translate-y-1 hover:bg-brand hover:text-coal"
            >
              <Icon className="h-6 w-6" />
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

function ReviewBlock() {
  return (
    <div>
      <div className="flex -space-x-2.5">
        {avatars.map((src, i) => (
          <img
            key={src}
            src={src}
            alt={`Happy client ${i + 1}`}
            width={40}
            height={40}
            className="h-10 w-10 rounded-full border-2 border-page object-cover transition-transform duration-300 hover:z-10 hover:-translate-y-1"
          />
        ))}
      </div>
      <p className="mt-2.5 font-display text-[17px] font-bold leading-tight xl:text-[20px]">
        <span className="text-brand">350+ Reviews</span> <span className="text-ink">(4.9 of 5)</span>
      </p>
      <p className="mt-0.5 text-[15px] text-muted xl:text-[17px]">Reviews from Valued Clients</p>
    </div>
  );
}

function QuoteBlock() {
  return (
    <div className="lg:text-right">
      <Quote className="h-6 w-8 text-brand lg:ml-auto" />
      <p className="mt-2 max-w-[260px] text-[16px] leading-snug text-muted lg:ml-auto xl:max-w-[290px] xl:text-[19px]">
        Highly Professional Product Designer with Great Creativity!
      </p>
    </div>
  );
}

const pill = "inline-flex h-8 items-center rounded-full px-3.5 font-display text-[13px] font-semibold whitespace-nowrap transition-all duration-300 hover:-translate-y-0.5 xl:h-9 xl:text-[14px]";
const darkPill = `${pill} bg-coal text-cream hover:bg-brand hover:text-coal dark:bg-cream dark:text-coal`;
const orangePill = `${pill} bg-brand text-coal hover:bg-coal hover:text-cream`;

function TagBlock() {
  return (
    <div className="flex flex-wrap gap-2 lg:flex-col lg:items-end">
      <div className="flex flex-wrap gap-2 lg:justify-end">
        <span className={darkPill}>Prototype</span>
        <span className={orangePill}>Dashboard</span>
      </div>
      <div className="flex flex-wrap items-center gap-2 lg:justify-end">
        <span className="grid h-8 w-8 place-items-center rounded-full bg-brand text-coal transition-transform duration-500 hover:rotate-90 xl:h-9 xl:w-9">
          <Move className="h-4 w-4" />
        </span>
        <span className={darkPill}>Mobile App Design</span>
      </div>
      <div className="flex flex-wrap gap-2 lg:justify-end">
        <span className={darkPill}>Website</span>
        <span className={orangePill}>Design System</span>
      </div>
    </div>
  );
}

export default function Hero() {
  const stage = useRef<HTMLDivElement>(null);
  const [scrollY, setScrollY] = useState(0);
  const [role, setRole] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setRole((r) => (r + 1) % roles.length), 2600);
    return () => clearInterval(id);
  }, []);

  useEffect(() => {
    let raf = 0;
    const on = () => {
      if (raf) return;
      raf = requestAnimationFrame(() => {
        raf = 0;
        setScrollY(Math.min(window.scrollY, 800));
      });
    };
    window.addEventListener("scroll", on, { passive: true });
    return () => {
      window.removeEventListener("scroll", on);
      cancelAnimationFrame(raf);
    };
  }, []);

  const onMove = (e: MouseEvent<HTMLDivElement>) => {
    const el = stage.current;
    if (!el || !window.matchMedia("(hover: hover)").matches) return;
    const r = el.getBoundingClientRect();
    el.style.setProperty("--mx", (((e.clientX - r.left) / r.width) * 2 - 1).toFixed(3));
    el.style.setProperty("--my", (((e.clientY - r.top) / r.height) * 2 - 1).toFixed(3));
  };

  return (
    <section id="home" aria-label="Introduction" className="relative overflow-hidden">
      {/* ── First viewport: headline + portrait + CTAs ── */}
      <div className="hero-screen mx-auto flex max-w-[1240px] flex-col px-4 pt-[84px] sm:px-6 md:pt-[100px]">
        {/* Headline */}
        <div className="relative shrink-0 text-center">
          <HireBadge className="animate-float absolute right-0 top-0 hidden h-[104px] w-[104px] lg:block xl:h-[132px] xl:w-[132px]" />

          <p
            className="hero-in inline-flex items-center gap-2 rounded-full bg-chip py-1.5 pl-1.5 pr-4 text-[13px] font-medium text-ink shadow-[0_6px_20px_-12px_rgba(29,20,16,0.25)] sm:text-[15px] md:text-[16px]"
            style={{ ["--d" as string]: "0ms" }}
          >
            <span className="grid h-7 w-7 place-items-center rounded-full bg-coal ring-2 ring-brand/30 sm:h-8 sm:w-8">
              <span className="grid h-3.5 w-3.5 place-items-center rounded-full bg-brand">
                <span className="h-0.5 w-1.5 rounded-full bg-coal" />
              </span>
            </span>
            Award-Winning Product Designer
          </p>

          <h1 className="t-hero hero-in mt-3 font-display font-bold tracking-[-0.02em] text-ink" style={{ ["--d" as string]: "120ms" }}>
            I’m{" "}
            <span className="relative inline-block text-brand">
              Jenny Scott
              <Sparks className="absolute -right-[0.42em] -top-[0.05em] h-[0.36em] w-[0.36em] text-ink" />
            </span>
          </h1>

          <p className="t-lead hero-in mt-1.5 text-muted sm:mt-2" style={{ ["--d" as string]: "220ms" }}>
            <span className="font-semibold text-ink">
              <span key={role} className="split-run inline-block">
                <SplitText text={roles[role]} />
              </span>
            </span>
            based in USA
          </p>
        </div>

        {/* Stage — takes all remaining viewport height */}
        <div
          ref={stage}
          onMouseMove={onMove}
          onMouseLeave={() => {
            stage.current?.style.setProperty("--mx", "0");
            stage.current?.style.setProperty("--my", "0");
          }}
          className="relative mt-2 min-h-[300px] flex-1 sm:min-h-[380px] lg:min-h-[400px]"
          style={{ ["--mx" as string]: 0, ["--my" as string]: 0 }}
        >
          {/* Globe backdrop sized from stage height */}
          <div
            className="pointer-events-none absolute bottom-[-12%] left-1/2 aspect-square h-[100%] -translate-x-1/2"
            aria-hidden
          >
            <div
              className="h-full w-full transition-transform duration-700 ease-out"
              style={{ transform: `translate3d(calc(var(--mx) * -20px), calc(var(--my) * -14px), 0) rotate(${scrollY * 0.04}deg)` }}
            >
              <Globe />
            </div>
          </div>

          {/* Portrait — cropped to a tall frame so Jenny owns the stage */}
          <div
            className="pointer-events-none absolute inset-0 flex items-end justify-center transition-transform duration-700 ease-out"
            style={{ transform: `translate3d(calc(var(--mx) * 10px), calc(var(--my) * 6px + ${scrollY * 0.1}px), 0)` }}
          >
            <div
              className="portrait-frame hero-in absolute bottom-0 left-0 right-0 mx-auto aspect-[4/5] h-full w-auto max-w-none lg:bottom-[-9%] lg:h-[112%]"
              style={{ ["--d" as string]: "300ms" }}
            >
              <img
                src="/images/hero.png"
                alt="Jenny Scott smiling, wearing a cap and glasses"
                width={1536}
                height={1024}
                fetchPriority="high"
                className="h-full w-full object-cover object-[center_18%]"
              />
            </div>
          </div>

          {/* Desktop side content */}
          <div className="reveal from-left absolute left-0 top-[10%] hidden lg:block">
            <SocialBlock />
          </div>
          <div className="reveal from-left absolute bottom-[24%] left-0 hidden max-w-[250px] lg:block" style={{ ["--d" as string]: "120ms" }}>
            <ReviewBlock />
          </div>
          <div className="reveal from-right absolute right-0 top-[6%] hidden lg:block">
            <QuoteBlock />
          </div>
          <div className="reveal from-right absolute bottom-[24%] right-0 hidden lg:block" style={{ ["--d" as string]: "120ms" }}>
            <TagBlock />
          </div>

          {/* CTA group */}
          <div className="absolute inset-x-0 bottom-5 z-10 flex justify-center sm:bottom-7 lg:bottom-9">
            <div
              className="hero-in flex items-center gap-1.5 rounded-full bg-white/95 p-1 shadow-[0_18px_40px_-16px_rgba(29,20,16,0.35)] backdrop-blur sm:gap-2 sm:p-1.5 dark:bg-coal-2/90"
              style={{ ["--d" as string]: "500ms" }}
            >
              <Magnetic strength={0.25}>
                <a
                  href="#projects"
                  className="group inline-flex h-11 items-center gap-2 whitespace-nowrap rounded-full bg-brand pl-5 pr-1.5 text-[16px] font-semibold text-coal transition-colors duration-300 hover:bg-brand-dark sm:h-14 sm:gap-3 sm:pl-7 sm:pr-2 sm:text-[20px]"
                >
                  Portfolio
                  <span className="grid h-8 w-8 place-items-center rounded-full bg-coal text-cream transition-transform duration-300 group-hover:translate-x-1 sm:h-10 sm:w-10">
                    <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5" />
                  </span>
                </a>
              </Magnetic>
              <Magnetic strength={0.25}>
                <a
                  href="#contact"
                  className="inline-flex h-11 items-center whitespace-nowrap rounded-full border-2 border-coal px-6 text-[16px] font-semibold text-coal transition-colors duration-300 hover:bg-coal hover:text-cream sm:h-14 sm:px-9 sm:text-[20px] dark:border-cream dark:text-cream dark:hover:bg-cream dark:hover:text-coal"
                >
                  Hire Me
                </a>
              </Magnetic>
            </div>
          </div>
        </div>
      </div>

      {/* ── Mobile / tablet: secondary info below the fold ── */}
      <div className="mx-auto max-w-[1240px] px-4 pb-10 pt-8 sm:px-6 lg:hidden">
        <div className="grid gap-6 rounded-[24px] bg-card p-5 shadow-[0_20px_40px_-30px_rgba(29,20,16,0.35)] sm:grid-cols-2 sm:p-7">
          <div className="reveal flex flex-col gap-5">
            <ReviewBlock />
            <SocialBlock />
          </div>
          <div className="reveal flex flex-col gap-5" style={{ ["--d" as string]: "120ms" }}>
            <QuoteBlock />
            <TagBlock />
          </div>
        </div>
      </div>
    </section>
  );
}
