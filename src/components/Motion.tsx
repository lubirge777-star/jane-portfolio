import { useRef, type ReactNode, type CSSProperties } from "react";

/** Splits text into words that slide up one by one (inside a `.reveal` or `.split-run` parent). */
export function SplitText({ text, start = 0 }: { text: string; start?: number }) {
  return (
    <>
      {text.split(" ").map((w, i) => (
        <span key={i} className="split-word">
          <span style={{ ["--i" as string]: i + start } as CSSProperties}>{w}</span>
          {"\u00A0"}
        </span>
      ))}
    </>
  );
}

/** Element gently follows the cursor while hovered. */
export function Magnetic({ children, strength = 0.3, className = "" }: { children: ReactNode; strength?: number; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  return (
    <div
      ref={ref}
      className={`inline-block transition-transform duration-300 ease-out ${className}`}
      onMouseMove={(e) => {
        const el = ref.current;
        if (!el || !window.matchMedia("(hover: hover)").matches) return;
        const r = el.getBoundingClientRect();
        const x = (e.clientX - r.left - r.width / 2) * strength;
        const y = (e.clientY - r.top - r.height / 2) * strength;
        el.style.transform = `translate(${x}px, ${y}px)`;
      }}
      onMouseLeave={() => {
        if (ref.current) ref.current.style.transform = "";
      }}
    >
      {children}
    </div>
  );
}
