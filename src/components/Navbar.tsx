import { useEffect, useState } from "react";
import { Close, Logo, Menu, Moon, Sun } from "./Icons";
import { useScrollSpy } from "../hooks/motion";

const links = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "Projects", href: "#projects" },
  { label: "About Me", href: "#about" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Blogs", href: "#blogs" },
];
const ids = ["home", "services", "projects", "about", "journey", "testimonials", "blogs", "contact"];
const idToLabel: Record<string, string> = {
  home: "Home",
  services: "Services",
  projects: "Projects",
  about: "About Me",
  journey: "About Me",
  testimonials: "Testimonials",
  blogs: "Blogs",
  contact: "",
};

type Props = { dark: boolean; onToggle: () => void };

export default function Navbar({ dark, onToggle }: Props) {
  const [open, setOpen] = useState(false);
  const spy = useScrollSpy(ids);
  const active = idToLabel[spy] ?? "Home";
  const setActive = (_: string) => {};
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-3 sm:px-6 md:pt-4">
      <nav
        aria-label="Primary"
        className={`mx-auto flex h-14 max-w-[1208px] items-center justify-between rounded-full bg-coal px-2 text-cream transition-all duration-500 md:h-16 md:px-2.5 ${
          scrolled ? "shadow-[0_18px_40px_-18px_rgba(29,20,16,0.55)] ring-1 ring-white/5" : ""
        }`}
      >
        <a href="#home" className="group flex items-center gap-3" aria-label="Jenny — home">
          <Logo className="h-10 w-10 transition-transform duration-500 group-hover:rotate-[20deg] md:h-12 md:w-12" />
          <span className="font-display text-lg font-bold tracking-tight md:text-xl">Jenny.</span>
        </a>

        <ul className="hidden items-center gap-6 lg:flex xl:gap-8">
          {links.map((l) => (
            <li key={l.label}>
              <a
                href={l.href}
                onClick={() => setActive(l.label)}
                className={`relative py-1 text-[15px] font-medium transition-colors after:absolute after:-bottom-0.5 after:left-0 after:h-[2px] after:bg-brand after:transition-all after:duration-300 ${
                  active === l.label
                    ? "text-brand after:w-full"
                    : "text-cream/90 after:w-0 hover:text-brand hover:after:w-full"
                }`}
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2.5">
          <button
            type="button"
            onClick={onToggle}
            aria-label={dark ? "Switch to light mode" : "Switch to dark mode"}
            className="grid h-10 w-10 place-items-center rounded-full bg-coal-2 text-cream/80 transition hover:bg-brand hover:text-coal md:h-12 md:w-12"
          >
            {dark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
          </button>
          <a
            href="#contact"
            className="hidden h-10 items-center rounded-full border-2 border-coal-2 bg-cream px-5 text-[15px] font-semibold md:h-12 md:px-6 text-coal shadow-[inset_0_-2px_0_rgba(0,0,0,0.06)] transition hover:bg-brand sm:inline-flex"
          >
            Let’s Talk
          </a>
          <button
            type="button"
            onClick={() => setOpen((o) => !o)}
            aria-expanded={open}
            aria-label="Toggle menu"
            className="grid h-10 w-10 place-items-center rounded-full bg-brand text-coal md:h-12 md:w-12 lg:hidden"
          >
            {open ? <Close className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <div
        className={`mx-auto mt-2 max-w-[1208px] overflow-hidden rounded-3xl bg-coal text-cream transition-all duration-500 lg:hidden ${
          open ? "max-h-[480px] opacity-100" : "pointer-events-none max-h-0 opacity-0"
        }`}
      >
        <ul className="flex flex-col p-4">
          {links.map((l) => (
            <li key={l.label}>
              <a
                href={l.href}
                onClick={() => {
                  setActive(l.label);
                  setOpen(false);
                }}
                className={`block rounded-2xl px-4 py-3 text-lg font-medium transition hover:bg-coal-2 ${
                  active === l.label ? "text-brand" : ""
                }`}
              >
                {l.label}
              </a>
            </li>
          ))}
          <li className="mt-2 sm:hidden">
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="block rounded-full bg-brand px-4 py-3 text-center text-lg font-semibold text-coal"
            >
              Let’s Talk
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}
