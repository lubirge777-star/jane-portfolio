import type { SVGProps } from "react";

type P = SVGProps<SVGSVGElement>;

export const Logo = (p: P) => (
  <svg viewBox="0 0 48 48" fill="none" {...p}>
    <circle cx="24" cy="24" r="24" fill="#F79A1E" />
    <circle cx="24" cy="24" r="17" fill="#F79A1E" stroke="#1D1410" strokeOpacity=".15" strokeWidth="1.5" />
    <path
      d="M15 31c2.5-8.5 9-14 18-15-1 8.5-7 14.5-15.5 15.5 3-3.2 6-6.4 9-10.5-4 2.6-7.6 5.9-11.5 10z"
      fill="#1D1410"
    />
  </svg>
);

export const Sparks = (p: P) => (
  <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="3.4" strokeLinecap="round" {...p}>
    <path d="M6 15 3 4" />
    <path d="M13 19 24 10" />
    <path d="M12 27 27 26" />
  </svg>
);

export const Star4 = (p: P) => (
  <svg viewBox="0 0 40 40" fill="currentColor" {...p}>
    <path d="M20 2c.9 0 1.5 6.6 1.9 11.1.8.5 1.5 1.2 2 2C28.4 15.5 38 16 38 20s-9.6 4.5-14.1 4.9c-.5.8-1.2 1.5-2 2C21.5 31.4 20.9 38 20 38s-1.5-6.6-1.9-11.1c-.8-.5-1.5-1.2-2-2C11.6 24.5 2 24 2 20s9.6-4.5 14.1-4.9c.5-.8 1.2-1.5 2-2C18.5 8.6 19.1 2 20 2z" />
    <circle cx="20" cy="20" r="3.2" fill="#1D1410" />
  </svg>
);

export const ArrowRight = (p: P) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" {...p}>
    <path d="M5 12h14M13 6l6 6-6 6" />
  </svg>
);

export const ArrowUpRight = (p: P) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" {...p}>
    <path d="M7 17 17 7M8 7h9v9" />
  </svg>
);

export const Moon = (p: P) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...p}>
    <path d="M20 14.5A8.5 8.5 0 0 1 9.5 4a8.5 8.5 0 1 0 10.5 10.5z" />
  </svg>
);

export const Sun = (p: P) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" {...p}>
    <circle cx="12" cy="12" r="4" />
    <path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" />
  </svg>
);

export const Move = (p: P) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...p}>
    <path d="M12 3v18M3 12h18M9 6l3-3 3 3M9 18l3 3 3-3M6 9l-3 3 3 3M18 9l3 3-3 3" />
  </svg>
);

export const Quote = (p: P) => (
  <svg viewBox="0 0 48 36" fill="currentColor" {...p}>
    <path d="M10 36C4.4 36 0 31.6 0 26 0 14 7.5 4 19 0l2 4C13.5 7.5 10 12 9.5 16.5 15 16 20 20.4 20 26c0 5.6-4.5 10-10 10zm26 0c-5.6 0-10-4.4-10-10 0-12 7.5-22 19-26l2 4c-7.5 3.5-11 8-11.5 12.5C41 16 46 20.4 46 26c0 5.6-4.5 10-10 10z" />
  </svg>
);

export const Facebook = (p: P) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...p}>
    <path d="M24 12a12 12 0 1 0-13.9 11.9v-8.4h-3V12h3V9.4c0-3 1.8-4.7 4.5-4.7 1.3 0 2.7.2 2.7.2v3h-1.5c-1.5 0-2 .9-2 1.9V12h3.4l-.5 3.5h-2.9v8.4A12 12 0 0 0 24 12z" />
  </svg>
);

export const XIcon = (p: P) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...p}>
    <path d="M12 0a12 12 0 1 0 0 24 12 12 0 0 0 0-24zm3.6 18-3.2-4.3L8.5 18H6.6l4.9-5.5L6.8 6h3.6l2.9 3.9L16.8 6h1.9l-4.6 5.1L19.2 18h-3.6zm-6.4-10.8 7 9.6h1l-6.9-9.6h-1.1z" />
  </svg>
);

export const Pinterest = (p: P) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...p}>
    <path d="M12 0a12 12 0 0 0-4.4 23.2c-.1-.9-.2-2.4 0-3.4l1.4-6s-.3-.7-.3-1.8c0-1.7 1-2.9 2.2-2.9 1 0 1.5.8 1.5 1.7 0 1-.7 2.6-1 4-.3 1.2.6 2.2 1.8 2.2 2.1 0 3.8-2.3 3.8-5.5 0-2.9-2.1-4.9-5-4.9-3.4 0-5.4 2.6-5.4 5.2 0 1 .4 2.1.9 2.7.1.1.1.2.1.4l-.3 1.4c-.1.2-.2.3-.4.2-1.5-.7-2.4-2.9-2.4-4.6 0-3.8 2.7-7.2 7.9-7.2 4.1 0 7.3 2.9 7.3 6.9 0 4.1-2.6 7.4-6.2 7.4-1.2 0-2.3-.6-2.7-1.4l-.7 2.8c-.3 1-1 2.3-1.5 3.1A12 12 0 1 0 12 0z" />
  </svg>
);

export const Dribbble = (p: P) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...p}>
    <path d="M12 0a12 12 0 1 0 0 24 12 12 0 0 0 0-24zm7.9 5.6a10.2 10.2 0 0 1 2.3 6.3c-.3-.1-3.7-.8-7.1-.3l-.9-2c3.8-1.6 5.5-3.8 5.7-4zM12 1.8c2.6 0 5 1 6.8 2.6-.2.2-1.7 2.3-5.3 3.7a51 51 0 0 0-3.8-6c.8-.2 1.5-.3 2.3-.3zM7.7 2.7a61 61 0 0 1 3.8 5.9c-4.8 1.3-9 1.2-9.5 1.2a10.3 10.3 0 0 1 5.7-7.1zM1.8 12v-.3c.4 0 5.4.1 10.6-1.5l.8 1.7c-5.2 1.5-8.2 5.6-8.4 6A10.1 10.1 0 0 1 1.8 12zM12 22.2c-2.3 0-4.5-.8-6.2-2.1.2-.3 2.4-4.4 8.1-6.5h.1a42 42 0 0 1 2.2 7.8c-1.3.5-2.7.8-4.2.8zm5.9-1.8a44 44 0 0 0-2-7.4c3.2-.5 6 .3 6.3.4a10.2 10.2 0 0 1-4.3 7z" />
  </svg>
);

export const Menu = (p: P) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" {...p}>
    <path d="M4 7h16M4 12h16M4 17h10" />
  </svg>
);

export const Close = (p: P) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" {...p}>
    <path d="M6 6l12 12M18 6 6 18" />
  </svg>
);

/** Two overlapping dots used before section labels */
export const LabelDots = ({ light = false }: { light?: boolean }) => (
  <span className="relative inline-flex h-6 w-12 items-center" aria-hidden>
    <span className="absolute left-4 h-6 w-6 rounded-full bg-brand ring-2 ring-brand/30" />
    <span className={`absolute left-0 h-6 w-6 rounded-full ${light ? "bg-cream" : "bg-ink"}`} />
  </span>
);
