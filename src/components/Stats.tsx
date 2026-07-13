import { stats } from "@/data/content";
import Reveal from "./Reveal";

export default function Stats() {
  return (
    <section className="px-5 py-16 md:px-8">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-px overflow-hidden border border-line bg-line md:grid-cols-4">
        {stats.map((s, i) => (
          <Reveal key={s.label} delay={i * 0.08} className="bg-base">
            <div className="flex flex-col items-center justify-center px-4 py-10 text-center">
              <div className="display text-6xl text-accent md:text-7xl">
                {s.value}
              </div>
              <div className="mt-2 font-mono text-[11px] uppercase tracking-widest text-muted">
                {s.label}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
