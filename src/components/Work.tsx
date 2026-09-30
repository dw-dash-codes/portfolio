import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { projects } from "@/data/content";
import Reveal from "./Reveal";
import OptimizedImage from "./OptimizedImage";

export default function Work() {
  return (
    <section id="work" className="px-5 py-24 md:px-8">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <div className="flex items-end justify-between border-b border-line pb-6">
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.25em] text-accent">
                [ 02 ] Selected Work
              </p>
              <h2 className="display mt-3 text-6xl text-ink md:text-8xl">
                Projects
              </h2>
            </div>
            <span className="hidden font-mono text-xs text-muted md:block">
              {projects.length} case studies
            </span>
          </div>
        </Reveal>

        <div className="mt-4">
          {projects.map((p, i) => (
            <Reveal key={p.slug} delay={i * 0.05}>
              <Link to={`/work/${p.slug}`} className="group block">
                <motion.div className="relative grid grid-cols-[auto_1fr_auto] items-center gap-5 border-b border-line py-8 transition-colors md:gap-10 md:py-10">
                  <span className="display text-3xl text-line transition-colors group-hover:text-accent md:text-5xl">
                    0{i + 1}
                  </span>

                  <div className="flex flex-col gap-6 md:flex-row md:items-center md:gap-10">
                    {p.image && (
                      <div className="w-full aspect-video overflow-hidden border border-line bg-surface transition-colors duration-300 group-hover:border-accent md:w-64 md:shrink-0">
                        <OptimizedImage
                          src={p.image}
                          alt={p.title}
                          className="group-hover:scale-105"
                          containerClassName="h-full w-full"
                        />
                      </div>
                    )}

                    <div>
                      <h3 className="display text-3xl text-ink transition-transform duration-300 group-hover:translate-x-2 md:text-5xl">
                        {p.title}
                      </h3>
                      <p className="mt-1 max-w-xl text-sm text-muted md:text-[16px]">
                        {p.subtitle}
                      </p>
                      <div className="mt-3 flex flex-wrap gap-2">
                        {p.tech.slice(0, 4).map((t) => (
                          <span
                            key={t}
                            className="border border-line px-2.5 py-1 font-mono text-[10px] uppercase tracking-wider text-muted"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <span className="font-mono text-2xl text-muted transition-all duration-300 group-hover:text-accent md:text-3xl">
                    <span className="inline-block transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">
                      ↗
                    </span>
                  </span>
                </motion.div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
