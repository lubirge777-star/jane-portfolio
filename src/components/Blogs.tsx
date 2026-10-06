import { ArrowUpRight, LabelDots, Sparks } from "./Icons";
import { SplitText } from "./Motion";

const posts = [
  {
    title: "Designing with story arcs: why your UI needs a beginning, middle and end",
    cat: "UX Strategy",
    date: "Mar 12, 2026",
    read: "6 min",
    img: "https://images.pexels.com/photos/3688759/pexels-photo-3688759.jpeg?auto=compress&cs=tinysrgb&w=900&h=600&fit=crop",
  },
  {
    title: "Motion that means something: 7 micro-interaction rules I live by",
    cat: "Motion",
    date: "Feb 02, 2026",
    read: "4 min",
    img: "https://images.pexels.com/photos/3850210/pexels-photo-3850210.jpeg?auto=compress&cs=tinysrgb&w=900&h=600&fit=crop",
  },
  {
    title: "From chaos to tokens: scaling a design system across six teams",
    cat: "Design Systems",
    date: "Jan 18, 2026",
    read: "8 min",
    img: "https://images.pexels.com/photos/3850211/pexels-photo-3850211.jpeg?auto=compress&cs=tinysrgb&w=900&h=600&fit=crop",
  },
];

export default function Blogs() {
  return (
    <section id="blogs" className="py-16 md:py-24">
      <div className="mx-auto max-w-[1240px] px-4 sm:px-6">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between md:gap-6">
          <div>
            <div className="t-label reveal flex items-center gap-3 font-medium">
              <LabelDots />
              Journal
            </div>
            <h2 className="t-h2 reveal mt-3 font-display font-bold tracking-[-0.02em]">
              <SplitText text="Thoughts &" />
              <span className="relative inline-block text-brand">
                <SplitText text="Notebooks" start={2} />
                <Sparks className="absolute -right-4 -top-3 h-6 w-6 text-ink md:-right-6 md:h-8 md:w-8" />
              </span>
            </h2>
          </div>
          <a href="#blogs" className="reveal group inline-flex items-center gap-2 self-start text-[16px] font-semibold md:self-auto">
            <span className="border-b-2 border-brand pb-0.5 transition-colors group-hover:text-brand">Read all articles</span>
            <ArrowUpRight className="h-5 w-5 text-brand transition-transform group-hover:rotate-45" />
          </a>
        </div>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
          {posts.map((p, i) => (
            <article
              key={p.title}
              className="reveal group overflow-hidden rounded-[22px] bg-card transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_30px_50px_-30px_rgba(29,20,16,0.45)]"
              style={{ ["--d" as string]: `${i * 110}ms` }}
            >
              <a href="#blogs" data-cursor="Read" className="block">
                <div className="relative aspect-[3/2] overflow-hidden">
                  <img src={p.img} alt="" loading="lazy" className="h-full w-full object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-110" />
                  <span className="absolute left-4 top-4 rounded-full bg-brand px-4 py-1.5 font-display text-sm font-semibold text-coal">{p.cat}</span>
                </div>
                <div className="p-5 md:p-6">
                  <p className="text-[13px] text-muted">
                    {p.date} · {p.read} read
                  </p>
                  <h3 className="mt-2 font-display text-[18px] font-bold leading-snug transition-colors group-hover:text-brand-dark md:text-[19px]">
                    {p.title}
                  </h3>
                  <span className="mt-5 inline-flex items-center gap-2 text-[15px] font-semibold">
                    Read story
                    <span className="grid h-8 w-8 place-items-center rounded-full bg-coal text-cream transition-all duration-500 group-hover:rotate-45 group-hover:bg-brand group-hover:text-coal dark:bg-cream dark:text-coal">
                      <ArrowUpRight className="h-4 w-4" />
                    </span>
                  </span>
                </div>
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
