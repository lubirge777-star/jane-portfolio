import { useState, type FormEvent } from "react";
import { ArrowRight, ArrowUpRight, Dribbble, Facebook, Logo, Pinterest, Sparks, XIcon } from "./Icons";
import { Magnetic, SplitText } from "./Motion";

const budgets = ["< $5k", "$5k – $15k", "$15k – $30k", "$30k+"];
const interests = ["UI/UX", "Website", "Mobile App", "Dashboard", "Design System"];

type Errors = Partial<Record<"name" | "email" | "message", string>>;

export default function Footer() {
  const [picked, setPicked] = useState<string[]>(["Website"]);
  const [budget, setBudget] = useState(budgets[1]);
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");

  const submit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const f = new FormData(e.currentTarget);
    const name = String(f.get("name") || "").trim();
    const email = String(f.get("email") || "").trim();
    const message = String(f.get("message") || "").trim();
    const errs: Errors = {};
    if (name.length < 2) errs.name = "Please tell me your name";
    if (!/^\S+@\S+\.\S+$/.test(email)) errs.email = "That email doesn’t look right";
    if (message.length < 10) errs.message = "A few more words, please (10+ chars)";
    setErrors(errs);
    if (Object.keys(errs).length) return;
    setStatus("sending");
    setTimeout(() => setStatus("sent"), 1400);
  };

  const field =
    "peer w-full rounded-2xl border-2 bg-transparent px-4 pb-2.5 pt-6 text-[16px] text-cream outline-none transition placeholder:text-transparent focus:border-brand";
  const label =
    "pointer-events-none absolute left-4 top-2 text-[12px] text-cream/50 transition-all peer-placeholder-shown:top-[15px] peer-placeholder-shown:text-[16px] peer-focus:top-2 peer-focus:text-[12px] peer-focus:text-brand";

  return (
    <footer id="contact" className="grain relative overflow-hidden bg-coal text-cream">
      <div className="relative mx-auto max-w-[1240px] px-4 pt-16 sm:px-6 md:pt-24">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.1fr] lg:gap-14">
          {/* Left — pitch */}
          <div>
            <p className="reveal inline-flex items-center gap-2 rounded-full border border-cream/15 px-3.5 py-1.5 text-[13px] sm:text-[14px]">
              <span className="relative flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75" />
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-green-400" />
              </span>
              Available for 2 new projects in May
            </p>
            <h2 className="t-h2 reveal mt-5 font-display font-bold tracking-[-0.02em]">
              <SplitText text="Let’s write the" />
              <span className="relative inline-block text-brand">
                <SplitText text="next chapter" start={3} />
                <Sparks className="absolute -right-5 -top-3 h-7 w-7 text-cream md:-right-8 md:h-9 md:w-9" />
              </span>
            </h2>
            <p className="t-body reveal mt-4 max-w-[440px] text-cream/70">
              Tell me about your idea — I reply within 24 hours with honest thoughts and a clear next step.
            </p>

            <div className="reveal mt-8 space-y-3">
              <a href="mailto:hello@jennyscott.design" className="group flex items-center justify-between gap-3 break-all border-b border-cream/10 pb-3 text-[17px] transition-colors hover:text-brand md:text-[20px]">
                hello@jennyscott.design
                <ArrowUpRight className="h-6 w-6 transition-transform group-hover:rotate-45" />
              </a>
              <a href="tel:+14155550123" className="group flex items-center justify-between gap-3 border-b border-cream/10 pb-3 text-[17px] transition-colors hover:text-brand md:text-[20px]">
                +1 (415) 555-0123
                <ArrowUpRight className="h-6 w-6 transition-transform group-hover:rotate-45" />
              </a>
              <p className="text-[17px] text-cream/50">San Francisco, CA · Working worldwide</p>
            </div>
          </div>

          {/* Right — form */}
          <div className="reveal from-right rounded-[24px] border border-cream/10 bg-coal-2/70 p-5 backdrop-blur sm:p-7 md:rounded-[28px] lg:p-8">
            {status === "sent" ? (
              <div className="flex min-h-[460px] flex-col items-center justify-center text-center" role="status">
                <span className="hero-in grid h-24 w-24 place-items-center rounded-full bg-brand text-coal">
                  <svg viewBox="0 0 24 24" className="h-12 w-12" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12.5 10 17 19 7" style={{ strokeDasharray: 24, strokeDashoffset: 0, animation: "draw .8s .2s ease both" }} />
                  </svg>
                </span>
                <h3 className="hero-in mt-6 font-display text-[32px] font-bold" style={{ ["--d" as string]: "150ms" }}>Message received!</h3>
                <p className="hero-in mt-2 max-w-[340px] text-[18px] text-cream/70" style={{ ["--d" as string]: "250ms" }}>
                  Thanks for reaching out. I’ll get back to you within a day — the kettle’s already on. ☕
                </p>
                <button type="button" onClick={() => setStatus("idle")} className="mt-8 rounded-full border-2 border-cream/30 px-6 py-3 transition hover:border-brand hover:text-brand">
                  Send another
                </button>
                <style>{`@keyframes draw{from{stroke-dashoffset:24}to{stroke-dashoffset:0}}`}</style>
              </div>
            ) : (
              <form onSubmit={submit} noValidate className="space-y-6">
                <fieldset>
                  <legend className="mb-3 text-[17px] text-cream/70">I’m interested in…</legend>
                  <div className="flex flex-wrap gap-2.5">
                    {interests.map((it) => {
                      const on = picked.includes(it);
                      return (
                        <button
                          key={it}
                          type="button"
                          aria-pressed={on}
                          onClick={() => setPicked((p) => (on ? p.filter((x) => x !== it) : [...p, it]))}
                          className={`rounded-full border-2 px-4 py-2 text-[16px] font-medium transition-all ${
                            on ? "border-brand bg-brand text-coal" : "border-cream/15 hover:border-brand/60"
                          }`}
                        >
                          {it}
                        </button>
                      );
                    })}
                  </div>
                </fieldset>

                <div className="grid gap-5 sm:grid-cols-2">
                  {(["name", "email"] as const).map((n) => (
                    <div key={n}>
                      <div className="relative">
                        <input id={n} name={n} type={n === "email" ? "email" : "text"} placeholder=" " autoComplete={n} className={`${field} ${errors[n] ? "border-red-400" : "border-cream/15"}`} />
                        <label htmlFor={n} className={label}>
                          {n === "name" ? "Your name" : "Email address"}
                        </label>
                      </div>
                      {errors[n] && <p className="mt-1.5 pl-2 text-[14px] text-red-300">{errors[n]}</p>}
                    </div>
                  ))}
                </div>

                <fieldset>
                  <legend className="mb-3 text-[17px] text-cream/70">Project budget</legend>
                  <div className="grid grid-cols-2 gap-2 rounded-2xl bg-coal p-1.5 sm:grid-cols-4">
                    {budgets.map((b) => (
                      <button
                        key={b}
                        type="button"
                        aria-pressed={budget === b}
                        onClick={() => setBudget(b)}
                        className={`rounded-xl py-2.5 text-[15px] font-medium transition-all ${budget === b ? "bg-cream text-coal" : "text-cream/70 hover:text-cream"}`}
                      >
                        {b}
                      </button>
                    ))}
                  </div>
                </fieldset>

                <div>
                  <div className="relative">
                    <textarea id="message" name="message" rows={4} placeholder=" " className={`${field} resize-none ${errors.message ? "border-red-400" : "border-cream/15"}`} />
                    <label htmlFor="message" className={label}>
                      Tell me about your project
                    </label>
                  </div>
                  {errors.message && <p className="mt-1.5 pl-2 text-[14px] text-red-300">{errors.message}</p>}
                </div>

                <Magnetic strength={0.15} className="w-full">
                  <button
                    type="submit"
                    disabled={status === "sending"}
                    className="group flex h-14 w-full items-center justify-between rounded-full bg-brand pl-6 pr-1.5 text-[17px] font-semibold text-coal transition hover:bg-brand-dark disabled:opacity-80"
                  >
                    {status === "sending" ? "Sending…" : "Send message"}
                    <span className="grid h-12 w-12 place-items-center rounded-full bg-coal text-cream transition-transform duration-300 group-hover:translate-x-1">
                      {status === "sending" ? (
                        <span className="h-5 w-5 animate-spin rounded-full border-2 border-cream/30 border-t-cream" />
                      ) : (
                        <ArrowRight className="h-5 w-5" />
                      )}
                    </span>
                  </button>
                </Magnetic>
              </form>
            )}
          </div>
        </div>

        {/* Giant signature */}
        <div className="reveal mt-14 select-none overflow-hidden text-center md:mt-20" aria-hidden>
          <p className="font-display text-[19vw] font-extrabold leading-[0.85] tracking-[-0.05em] text-cream/[0.06] lg:text-[180px]">
            Jenny<span className="text-brand/60">.</span>
          </p>
        </div>

        <div className="flex flex-col items-center justify-between gap-6 border-t border-cream/10 py-8 md:flex-row">
          <a href="#home" className="flex items-center gap-3">
            <Logo className="h-10 w-10" />
            <span className="font-display text-xl font-bold">Jenny.</span>
          </a>
          <p className="text-[16px] text-cream/50">© {new Date().getFullYear()} Jenny Scott. Crafted with ☕ & curiosity.</p>
          <ul className="flex gap-2">
            {[Facebook, XIcon, Pinterest, Dribbble].map((Icon, i) => (
              <li key={i}>
                <a href="#" aria-label={["Facebook", "X", "Pinterest", "Dribbble"][i]} className="grid h-11 w-11 place-items-center rounded-full text-cream transition hover:-translate-y-1 hover:bg-brand hover:text-coal">
                  <Icon className="h-6 w-6" />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
