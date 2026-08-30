import { workExperience } from "@/data/content";
import Reveal from "./Reveal";

export default function Experience() {
  return (
    <section id="experience" className="px-5 py-24 md:px-8">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <div className="flex items-end justify-between border-b border-line pb-6">
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.25em] text-accent">
                [ 01 ] Experience
              </p>
              <h2 className="display mt-3 text-6xl text-ink md:text-8xl">
                Experience
              </h2>
            </div>
            <span className="hidden font-mono text-xs text-muted md:block">
              {workExperience.length} professional {workExperience.length === 1 ? "role" : "roles"}
            </span>
          </div>
        </Reveal>

        <div className="mt-6 divide-y divide-line">
          {workExperience.map((exp, i) => (
            <Reveal key={i} delay={i * 0.08}>
              <div className="grid gap-6 py-10 md:grid-cols-[220px_1fr] md:gap-12">
                <div>
                  <span className="font-mono text-sm font-medium text-accent">
                    {exp.period}
                  </span>
                  {exp.location && (
                    <p className="mt-1 font-mono text-xs text-muted">
                      {exp.location}
                    </p>
                  )}
                </div>

                <div>
                  <h3 className="text-2xl font-semibold text-ink md:text-3xl">
                    {exp.role}
                  </h3>
                  <p className="mt-1 font-mono font-medium text-accent">
                    {exp.company}
                  </p>

                  <ul className="mt-5 space-y-3 text-muted">
                    {exp.points.map((point, idx) => (
                      <li
                        key={idx}
                        className="flex items-start gap-3 text-base leading-relaxed text-muted"
                      >
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>

                  {exp.tech && exp.tech.length > 0 && (
                    <div className="mt-6 flex flex-wrap gap-2">
                      {exp.tech.map((t) => (
                        <span
                          key={t}
                          className="border border-line px-3 py-1 font-mono text-xs text-muted transition-colors hover:border-accent hover:text-accent"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
