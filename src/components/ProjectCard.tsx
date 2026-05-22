"use client";

import { motion } from "framer-motion";
import type { Project, ProjectStatus } from "@/data/projects";

const statusStyles: Record<ProjectStatus, string> = {
  "EN PRODUCCIÓN":
    "border-accent/40 text-accent bg-accent/10",
  "EN DESARROLLO":
    "border-accent-2/40 text-accent-2 bg-accent-2/10",
  ACTIVO:
    "border-accent-3/40 text-accent-3 bg-accent-3/10",
  ACADÉMICO:
    "border-[var(--border)] text-text-dim bg-bg-soft",
};

type Props = {
  project: Project;
  index: number;
};

export function ProjectCard({ project, index }: Props) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{
        duration: 0.55,
        delay: (index % 3) * 0.08,
        ease: [0.2, 0.8, 0.2, 1],
      }}
      className="card-hover group relative rounded-2xl border border-[var(--border)] bg-bg-card/60 backdrop-blur-sm p-6 sm:p-7 overflow-hidden flex flex-col"
    >
      <div className="flex items-start justify-between gap-4 mb-5">
        <div
          className="flex items-center justify-center w-12 h-12 rounded-xl bg-bg-soft border border-[var(--border)] text-2xl"
          aria-hidden
        >
          {project.emoji}
        </div>
        <span
          className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full border text-[10px] font-mono tracking-wider ${
            statusStyles[project.status]
          }`}
        >
          <span className="block w-1.5 h-1.5 rounded-full bg-current opacity-80" />
          {project.status}
        </span>
      </div>

      <h3 className="text-xl font-semibold tracking-tight">{project.name}</h3>
      <p className="mt-2 text-sm text-text-dim leading-relaxed flex-1">
        {project.description}
      </p>

      <div className="mt-5 flex flex-wrap gap-1.5">
        {project.tags.map((t) => (
          <span
            key={t}
            className="font-mono text-[11px] px-2 py-0.5 rounded-md bg-bg-soft border border-[var(--border)] text-text-dim"
          >
            {t}
          </span>
        ))}
      </div>

      <span className="absolute top-5 right-5 font-mono text-[10px] text-text-faint opacity-0 group-hover:opacity-100 transition-opacity">
        0{index + 1}
      </span>
    </motion.article>
  );
}
