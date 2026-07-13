import { motion } from "framer-motion";
import { profile } from "@/data/content";

export default function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-screen flex-col justify-center overflow-hidden px-5 pt-24 md:px-8"
    >
      <div className="mx-auto w-full max-w-7xl">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-6 flex items-center gap-3 font-mono text-xs uppercase tracking-[0.25em] text-muted"
        >
          <span className="h-2 w-2 animate-blink rounded-full bg-accent" />
          {profile.location} — Available for work
        </motion.p>

        <h1 className="display text-ink">
          <motion.span
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="block text-[15vw] md:text-[11vw]"
          >
            Full-Stack
          </motion.span>
          <motion.span
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.32 }}
            className="block text-[15vw] md:text-[11vw]"
          >
            <span className="text-accent">.NET</span> Developer
          </motion.span>
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="mt-8 max-w-2xl text-lg leading-relaxed text-muted md:text-xl"
        >
          {profile.tagline}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.62 }}
          className="mt-10 flex flex-wrap items-center gap-4"
        >
          <a
            href="#work"
            className="bg-accent px-7 py-3.5 font-mono text-xs font-semibold uppercase tracking-widest text-base transition-transform hover:-translate-y-0.5"
          >
            View Work ↓
          </a>
          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            className="border border-line px-7 py-3.5 font-mono text-xs font-semibold uppercase tracking-widest text-ink transition-colors hover:border-accent hover:text-accent"
          >
            GitHub
          </a>
        </motion.div>
      </div>

      <div className="mt-16 select-none overflow-hidden border-y border-line py-4">
        <div className="flex w-max animate-marquee whitespace-nowrap">
          {[...Array(2)].map((_, dup) => (
            <div key={dup} className="flex items-center">
              {[
                "ASP.NET CORE",
                "REACT.JS",
                "AZURE",
                "EF CORE",
                "SIGNALR",
                "C#",
                "SQL SERVER",
              ].map((w) => (
                <span
                  key={w + dup}
                  className="mx-6 font-mono text-sm uppercase tracking-widest text-muted"
                >
                  {w}{" "}
                  <span className="text-accent">✦</span>
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
