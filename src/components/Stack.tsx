import { skills } from "@/data/content";
import Reveal from "./Reveal";

export default function Stack() {
  return (
    <section id="stack" className="px-5 py-24 md:px-8">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <p className="font-mono text-xs uppercase tracking-[0.25em] text-accent">
            [ 03 ] Tech Stack
          </p>
          <h2 className="display mt-3 text-6xl text-ink md:text-8xl">
            Toolbox
          </h2>
        </Reveal>

        <div className="mt-14 space-y-12">
          {skills.map((group, gi) => (
            <Reveal key={group.category} delay={gi * 0.06}>
              <div className="grid gap-4 border-t border-line pt-6 md:grid-cols-[280px_1fr]">
                <h3 className="font-mono text-sm uppercase tracking-widest text-ink">
                  {group.category}
                </h3>
                <div className="flex flex-wrap gap-2.5">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className="border border-line px-3.5 py-2 font-mono text-xs text-muted transition-colors hover:border-accent hover:text-accent"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
