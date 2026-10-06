import { Star4 } from "./Icons";

const items = ["UI/UX Design", "Dashboard", "Website Design", "Wireframe", "Mobile App", "Design System", "Prototype"];

export default function Marquee() {
  const row = [...items, ...items];
  return (
    <div className="marquee-wrap relative z-10 overflow-hidden border-b-4 border-brand bg-coal py-3.5 md:py-5" aria-label="Services overview">
      <div className="animate-marquee flex w-max items-center">
        {row.map((t, i) => (
          <div key={i} className="flex items-center" aria-hidden={i >= items.length}>
            <span className="whitespace-nowrap px-5 font-display text-[20px] font-bold text-cream transition-colors duration-300 hover:text-brand sm:px-8 sm:text-[26px] lg:px-10 lg:text-[32px]">
              {t}
            </span>
            <Star4 className="h-6 w-6 shrink-0 text-brand sm:h-8 sm:w-8" />
          </div>
        ))}
      </div>
    </div>
  );
}
