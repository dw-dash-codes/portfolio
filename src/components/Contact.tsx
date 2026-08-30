import { profile } from "@/data/content";
import Reveal from "./Reveal";
import ContactForm from "./ContactForm";

export default function Contact() {
  return (
    <section id="contact" className="px-5 py-24 md:px-8">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <p className="font-mono text-xs uppercase tracking-[0.25em] text-accent">
            [ 06 ] Contact
          </p>
        </Reveal>

        <div className="mt-8 grid gap-12 lg:grid-cols-[1fr_1.2fr]">
          <div>
            <Reveal delay={0.1}>
              <h2 className="display text-[12vw] leading-none text-ink md:text-[8vw] lg:text-[7vw]">
                Let&apos;s
                <br />
                <span className="text-stroke">work together</span>
              </h2>
            </Reveal>

            <Reveal delay={0.15}>
              <a
                href={`mailto:${profile.email}`}
                className="mt-8 inline-block break-all font-mono text-lg text-accent underline-offset-8 hover:underline md:text-xl"
              >
                {profile.email}
              </a>
            </Reveal>

            <Reveal delay={0.2}>
              <div className="mt-12 grid gap-6 border-t border-line pt-8 sm:grid-cols-2">
                <div>
                  <p className="font-mono text-xs uppercase tracking-widest text-muted">
                    Fiverr
                  </p>
                  <a
                    href={profile.fiverr}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-1 block text-ink hover:text-accent transition-colors"
                  >
                    Profile
                  </a>
                </div>
                <div>
                  <p className="font-mono text-xs uppercase tracking-widest text-muted">
                    GitHub
                  </p>
                  <a
                    href={profile.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-1 block text-ink hover:text-accent transition-colors"
                  >
                    dw-dash-codes
                  </a>
                </div>
                <div>
                  <p className="font-mono text-xs uppercase tracking-widest text-muted">
                    LinkedIn
                  </p>
                  <a
                    href={profile.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-1 block text-ink hover:text-accent transition-colors"
                  >
                    Danish Waheed
                  </a>
                </div>
                <div>
                  <p className="font-mono text-xs uppercase tracking-widest text-muted">
                    Location
                  </p>
                  <p className="mt-1 text-ink">{profile.location}</p>
                </div>
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.2}>
            <div className="border border-line bg-surface p-6 md:p-8">
              <h3 className="font-mono text-xs uppercase tracking-widest text-accent mb-6">
                [ Send a Message ]
              </h3>
              <ContactForm />
            </div>
          </Reveal>
        </div>

        <footer className="mt-20 flex flex-col items-center justify-between gap-4 border-t border-line pt-8 font-mono text-xs text-muted md:flex-row">
          <span>
            © {new Date().getFullYear()} {profile.name}
          </span>
          <span>Built with ♥ + ☕</span>
        </footer>
      </div>
    </section>
  );
}
