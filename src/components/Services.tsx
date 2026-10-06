import { useState } from "react";
import { ArrowRight, ArrowUpRight, LabelDots, Sparks } from "./Icons";

const services = [
  {
    title: "UI/UX Design",
    tags: ["User Research", "Information Architecture", "User Flows", "High-Fidelity UI"],
    desc: "Research-driven interfaces that feel intuitive from the very first tap — balancing beauty, clarity and measurable usability.",
  },
  {
    title: "Website Design",
    tags: ["Landing Page Design", "Responsive Website Design", "Wireframing and Prototyping", "Custom Website UI Design"],
    desc: "Designing modern, user-friendly websites focused on seamless experiences, usability, and business growth.",
  },
  {
    title: "Application Design",
    tags: ["iOS & Android", "Onboarding Flows", "Micro-interactions", "App Store Assets"],
    desc: "Native-feeling mobile and desktop apps crafted around real user habits, with polished interactions and scalable patterns.",
  },
  {
    title: "Dashboard Design",
    tags: ["SaaS Dashboards", "Data Visualization", "Admin Panels", "Analytics UI"],
    desc: "Turning complex data into calm, actionable dashboards that help teams make faster and smarter decisions.",
  },
  {
    title: "Wireframing & Prototyping",
    tags: ["Low-Fidelity Wireframes", "Clickable Prototypes", "User Testing", "Design Handoff"],
    desc: "Rapidly validating ideas with wireframes and interactive prototypes before a single line of code is written.",
  },
];

export default function Services() {
  const [open, setOpen] = useState(1);

  return (
    <section id="services" className="py-16 md:py-24">
      <div className="mx-auto max-w-[1240px] px-4 sm:px-6">
        <div className="t-label reveal flex items-center gap-3 font-medium text-ink">
          <LabelDots />
          My Services
        </div>

        <div className="mt-4 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <h2 className="t-h2 reveal font-display font-bold tracking-[-0.02em] text-ink" style={{ ["--d" as string]: "100ms" }}>
            How I Bring{" "}
            <span className="relative inline-block text-brand">
              Ideas to Life
              <Sparks className="absolute -right-6 -top-3 h-6 w-6 text-ink md:-right-8 md:h-8 md:w-8" />
            </span>
          </h2>

          <a
            href="#services"
            className="reveal group inline-flex h-12 shrink-0 items-center self-start rounded-full border-2 border-coal bg-coal md:h-14 md:self-auto dark:border-brand"
            style={{ ["--d" as string]: "200ms" }}
          >
            <span className="flex h-full items-center rounded-full bg-brand px-6 text-[16px] font-semibold text-coal transition-all duration-300 group-hover:px-8 md:text-[17px]">
              View All Services
            </span>
            <span className="mx-2.5 grid h-10 w-10 place-items-center rounded-full bg-cream text-coal transition-transform duration-300 group-hover:-rotate-45">
              <ArrowRight className="h-5 w-5" />
            </span>
          </a>
        </div>

        <ul className="mt-10 flex flex-col gap-5 md:mt-8">
          {services.map((s, i) => {
            const isOpen = open === i;
            return (
              <li key={s.title} className="reveal" style={{ ["--d" as string]: `${i * 80}ms` }}>
                <div
                  role="button"
                  tabIndex={0}
                  aria-expanded={isOpen}
                  onClick={() => setOpen(isOpen ? -1 : i)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      e.preventDefault();
                      setOpen(isOpen ? -1 : i);
                    }
                  }}
                  className={`notch group relative block w-full cursor-pointer text-left outline-none transition-colors duration-500 focus-visible:ring-4 focus-visible:ring-brand/40 ${
                    isOpen ? "bg-coal text-cream" : "bg-card text-ink hover:bg-white/80 dark:hover:bg-coal-2"
                  }`}
                >
                  <div className="flex items-start gap-3 px-5 py-6 sm:gap-4 sm:px-7 md:grid md:grid-cols-[26%_1fr_auto] md:gap-0 md:px-10 md:py-6">
                    <div className="flex items-center gap-4 pt-1 md:pr-10 md:pt-2">
                      <span className="font-display text-[15px] font-bold text-brand md:text-[17px]">
                        {String(i + 1).padStart(2, "0")}.
                      </span>
                      <span
                        className={`hidden h-px flex-1 transition-opacity duration-300 md:block ${
                          isOpen ? "opacity-0" : "bg-ink/15"
                        }`}
                      />
                    </div>

                    <div className="min-w-0 flex-1">
                      <h3 className="t-h3 font-display font-bold tracking-[-0.01em]">
                        {s.title}
                      </h3>
                      <div
                        className={`grid transition-all duration-500 ease-[cubic-bezier(0.2,0.7,0.2,1)] ${
                          isOpen ? "mt-3 grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                        }`}
                      >
                        <div className="overflow-hidden">
                          <ul className="flex max-w-[600px] flex-wrap gap-2.5">
                            {s.tags.map((t) => (
                              <li
                                key={t}
                                className="rounded-full border border-cream/20 px-3 py-1 text-[13px] text-cream/85 transition-colors hover:border-brand hover:text-brand sm:px-3.5 sm:text-[15px]"
                              >
                                {t}
                              </li>
                            ))}
                          </ul>
                          <p className="t-body mt-4 max-w-[540px] pb-1 text-cream/75">{s.desc}</p>
                        </div>
                      </div>
                    </div>

                    <span
                      className={`grid h-9 w-9 shrink-0 place-items-center rounded-full bg-brand text-coal transition-transform duration-500 md:mt-0.5 md:h-11 md:w-11 ${
                        isOpen ? "rotate-0" : "group-hover:rotate-45"
                      }`}
                    >
                      <ArrowUpRight className="h-5 w-5" />
                    </span>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
