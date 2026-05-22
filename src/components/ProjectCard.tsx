"use client";

import { motion } from "framer-motion";
import type { Project, ProjectStatus } from "@/data/projects";
import { iconForTag } from "@/lib/icons";
import { Spotlight } from "./Spotlight";
import { EASE_OUT } from "@/lib/motion";

const statusStyles: Record<ProjectStatus, string> = {
  "EN PRODUCCIÓN": "border-accent/40 text-accent bg-accent/10",
  "EN DESARROLLO": "border-accent-2/40 text-accent-2 bg-accent-2/10",
  ACTIVO: "border-accent-3/40 text-accent-3 bg-accent-3/10",
  ACADÉMICO: "border-[var(--border)] text-text-dim bg-bg-soft",
};

const statusGlow: Record<ProjectStatus, string> = {
  "EN PRODUCCIÓN": "rgba(74,222,128,0.16)",
  "EN DESARROLLO": "rgba(34,211,238,0.16)",
  ACTIVO: "rgba(167,139,250,0.18)",
  ACADÉMICO: "rgba(232,232,238,0.10)",
};

type Props = {
  project: Project;
  index: number;
};

export function ProjectCard({ project, index }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{
        duration: 0.55,
        delay: (index % 3) * 0.08,
        ease: EASE_OUT,
      }}
    >
      <Spotlight
        glow={statusGlow[project.status]}
        className="card-hover group rounded-2xl border border-[var(--border)] bg-bg-card/60 backdrop-blur-sm p-6 sm:p-7 overflow-hidden flex flex-col h-full"
      >
        {/* Header */}
        <div className="flex items-start justify-between gap-4 mb-5">
          <div className="relative">
            <div
              className="flex items-center justify-center w-14 h-14 rounded-2xl bg-bg-soft border border-[var(--border)] text-3xl transition-transform duration-500 group-hover:rotate-[-6deg] group-hover:scale-[1.05]"
              aria-hidden
            >
              {project.emoji}
            </div>
            <span className="absolute -top-1 -right-1 font-mono text-[9px] tracking-widest text-text-faint bg-bg-card border border-[var(--border)] rounded px-1 py-0.5">
              {String(index + 1).padStart(2, "0")}
            </span>
          </div>
          <span
            className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full border text-[10px] font-mono tracking-wider ${statusStyles[project.status]}`}
          >
            <span className="relative inline-flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full rounded-full bg-current opacity-60 animate-ping-soft" />
              <span className="relative inline-block h-1.5 w-1.5 rounded-full bg-current" />
            </span>
            {project.status}
          </span>
        </div>

        {/* Title */}
        <h3 className="text-xl font-semibold tracking-tight">{project.name}</h3>

        {/* Description */}
        <p className="mt-2 text-sm text-text-dim leading-relaxed flex-1">
          {project.description}
        </p>

        {/* Tech chips with real logos */}
        <div className="mt-5 flex flex-wrap gap-1.5">
          {project.tags.map((t) => {
            const icon = iconForTag(t);
            return (
              <span
                key={t}
                className="font-mono text-[11px] inline-flex items-center gap-1.5 px-2 py-1 rounded-md bg-bg-soft border border-[var(--border)] text-text-dim transition-colors group-hover:border-[var(--border)]"
              >
                {icon ? (
                  <icon.Icon
                    className="text-[13px]"
                    style={{ color: icon.color }}
                    aria-hidden
                  />
                ) : (
                  <span className="block w-1 h-1 rounded-full bg-text-faint" />
                )}
                {t}
              </span>
            );
          })}
        </div>

        {/* Footer line */}
        <div className="mt-6 pt-4 border-t border-dashed border-[var(--border)] flex items-center justify-between text-text-faint">
          <span className="font-mono text-[10px] tracking-widest">
            {project.slug.toUpperCase()}
          </span>
          <span className="inline-flex items-center gap-1 text-xs opacity-0 group-hover:opacity-100 translate-x-[-4px] group-hover:translate-x-0 transition-all duration-300 text-text">
            Detalles
            <span aria-hidden>→</span>
          </span>
        </div>
      </Spotlight>
    </motion.div>
  );
}
