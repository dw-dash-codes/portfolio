import { profile } from "@/data/content";
import Reveal from "./Reveal";

export default function About() {
  return (
    <section id="about" className="px-5 py-24 md:px-8">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <p className="font-mono text-xs uppercase tracking-[0.25em] text-accent">
            [ 03 ] About
          </p>
        </Reveal>

        <div className="mt-8 grid gap-12 md:grid-cols-[1.5fr_1fr]">
          <div>
            {profile.bio.map((para, i) => (
              <Reveal key={i} delay={i * 0.1}>
                <p className="mb-6 text-xl leading-relaxed text-ink md:text-3xl md:leading-relaxed">
                  {para}
                </p>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.2}>
            <div className="border border-line p-6">
              <h3 className="font-mono text-xs uppercase tracking-widest text-muted">
                Quick Facts
              </h3>
              <dl className="mt-5 space-y-4 text-sm">
                <div className="flex justify-between border-b border-line pb-3">
                  <dt className="text-muted">Role</dt>
                  <dd className="text-right text-ink">
                    {profile.role}
                  </dd>
                </div>
                <div className="flex justify-between border-b border-line pb-3">
                  <dt className="text-muted">Location</dt>
                  <dd className="text-ink">{profile.location}</dd>
                </div>
                <div className="flex justify-between border-b border-line pb-3">
                  <dt className="text-muted">Focus</dt>
                  <dd className="text-right text-ink">
                    MERN · .NET · Azure
                  </dd>
                </div>
                <div className="flex justify-between">
                  <dt className="text-muted">Status</dt>
                  <dd className="text-accent">Open to work</dd>
                </div>
              </dl>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
