import { useParams, Link } from "react-router-dom";
import { useEffect } from "react";
import { motion } from "framer-motion";
import { projects } from "@/data/content";
import Navbar from "@/components/Navbar";

export default function ProjectDetail() {
  const { slug } = useParams();
  const project = projects.find((p) => p.slug === slug);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!project) {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center gap-6 px-6 text-center">
        <h1 className="display text-6xl text-ink">404</h1>
        <p className="text-muted">That project doesn&apos;t exist.</p>
        <Link
          to="/"
          className="border border-accent px-6 py-3 font-mono text-xs uppercase tracking-widest text-accent hover:bg-accent hover:text-base"
        >
          ← Back home
        </Link>
      </div>
    );
  }

  const links = [
    { label: "Live Preview", href: project.liveUrl, primary: true },
    { label: "GitHub Repo", href: project.repoUrl },
    { label: "API Docs", href: project.apiDocsUrl },
    { label: "LinkedIn Post", href: project.linkedinPostUrl },
    { label: "Video Demo", href: project.videoUrl },
  ].filter((l) => l.href);

  return (
    <>
      <Navbar />
      <main className="min-h-screen px-5 pb-24 pt-28 md:px-8">
        <div className="mx-auto max-w-4xl">
          <Link
            to="/#work"
            className="font-mono text-xs uppercase tracking-widest text-muted transition-colors hover:text-accent"
          >
            ← Back to work
          </Link>

          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mt-8"
          >
            <div className="flex flex-wrap items-center gap-3 font-mono text-xs text-muted">
              <span style={{ color: project.accent }}>●</span>
              <span>{project.year}</span>
              <span>·</span>
              <span>{project.role}</span>
            </div>
            <h1 className="display mt-4 text-6xl text-ink md:text-8xl">
              {project.title}
            </h1>
            <p className="mt-3 text-xl text-muted md:text-2xl">
              {project.subtitle}
            </p>
          </motion.div>

          {/* Action links */}
          <div className="mt-8 flex flex-wrap gap-3">
            {links.map((l) => (
              <a
                key={l.label}
                href={l.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`px-5 py-2.5 font-mono text-xs uppercase tracking-widest transition-transform hover:-translate-y-0.5 ${
                  l.primary
                    ? "bg-accent text-base"
                    : "border border-line text-ink hover:border-accent hover:text-accent"
                }`}
              >
                {l.label} ↗
              </a>
            ))}
          </div>

          {/* Project Image Banner */}
          <div className="relative mt-12 overflow-hidden border border-line aspect-video w-full md:max-h-[400px] bg-surface">
            {project.detailImage ? (
              <img
                src={project.detailImage}
                alt={project.title}
                className="h-full w-full object-cover"
              />
            ) : (
              <div
                className="h-full w-full"
                style={{
                  background: `linear-gradient(135deg, ${project.accent}22, transparent 60%), radial-gradient(circle at 80% 20%, ${project.accent}18, transparent 50%)`,
                }}
              />
            )}
          </div>

          {/* Summary */}
          <p className="mt-12 text-2xl leading-relaxed text-ink md:text-3xl md:leading-relaxed">
            {project.summary}
          </p>

          {/* Tech stack */}
          <section className="mt-14 border-t border-line pt-8">
            <h2 className="font-mono text-xs uppercase tracking-widest text-accent">
              Tech Stack
            </h2>
            <div className="mt-4 flex flex-wrap gap-2.5">
              {project.tech.map((t) => (
                <span
                  key={t}
                  className="border border-line px-3.5 py-2 font-mono text-xs text-muted"
                >
                  {t}
                </span>
              ))}
            </div>
          </section>

          {/* Problem */}
          <section className="mt-12 border-t border-line pt-8">
            <h2 className="font-mono text-xs uppercase tracking-widest text-accent">
              The Problem
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-muted">
              {project.problem}
            </p>
          </section>

          {/* Solution */}
          <section className="mt-12 border-t border-line pt-8">
            <h2 className="font-mono text-xs uppercase tracking-widest text-accent">
              The Solution
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-muted">
              {project.solution}
            </p>
          </section>

          {/* Features */}
          <section className="mt-12 border-t border-line pt-8">
            <h2 className="font-mono text-xs uppercase tracking-widest text-accent">
              Key Features
            </h2>
            <ul className="mt-5 space-y-3">
              {project.features.map((f, i) => (
                <li key={i} className="flex gap-4 text-lg text-ink">
                  <span
                    className="mt-1 font-mono text-sm"
                    style={{ color: project.accent }}
                  >
                    0{i + 1}
                  </span>
                  <span className="text-muted">{f}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* Architecture */}
          <section className="mt-12 border-t border-line pt-8">
            <h2 className="font-mono text-xs uppercase tracking-widest text-accent">
              Architecture — How It Works
            </h2>
            <p className="mt-4 rounded-none border border-line bg-surface p-5 font-mono text-sm leading-relaxed text-muted">
              {project.architecture}
            </p>
          </section>

          {/* Footer nav */}
          <div className="mt-16 border-t border-line pt-8">
            <Link
              to="/#work"
              className="font-mono text-xs uppercase tracking-widest text-muted hover:text-accent"
            >
              ← Back to all projects
            </Link>
          </div>
        </div>
      </main>
    </>
  );
}
