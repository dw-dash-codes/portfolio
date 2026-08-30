import { education } from "@/data/content";
import Reveal from "./Reveal";

export default function Education() {
  return (
    <section id="education" className="px-5 py-24 md:px-8">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <p className="font-mono text-xs uppercase tracking-[0.25em] text-accent">
            [ 05 ] Education & Certifications
          </p>
          <h2 className="display mt-3 text-6xl text-ink md:text-8xl">
            Journey
          </h2>
        </Reveal>

        <div className="mt-14">
          {education.map((item, i) => (
            <Reveal key={i} delay={i * 0.08}>
              <div className="grid gap-2 border-t border-line py-8 md:grid-cols-[200px_1fr] md:gap-10">
                <span className="font-mono text-sm text-accent">
                  {item.period}
                </span>
                <div>
                  <h3 className="text-2xl font-semibold text-ink">
                    {item.title}
                  </h3>
                  <p className="mt-1 font-mono text-sm text-muted">
                    {item.org}
                  </p>
                  <p className="mt-3 max-w-2xl text-muted">{item.detail}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
