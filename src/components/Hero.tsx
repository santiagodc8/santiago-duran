"use client";

import { motion } from "framer-motion";
import { profile } from "@/data/profile";

const stagger = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.08, delayChildren: 0.1 } },
};

const item = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.2, 0.8, 0.2, 1] as const } },
};

export function Hero() {
  return (
    <section
      id="top"
      className="relative pt-32 pb-24 sm:pt-40 sm:pb-32 px-5 sm:px-8"
    >
      <div className="max-w-6xl mx-auto">
        <motion.div
          variants={stagger}
          initial="hidden"
          animate="show"
          className="flex flex-col items-start"
        >
          <motion.div
            variants={item}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[var(--border)] bg-bg-soft/60 backdrop-blur text-xs text-text-dim"
          >
            <span className="relative inline-flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full rounded-full bg-accent opacity-75 animate-ping-soft" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
            </span>
            <span className="font-mono tracking-wide">
              DISPONIBLE PARA PRÁCTICAS &middot; FREELANCE &middot; PRIMER EMPLEO
            </span>
          </motion.div>

          <motion.p
            variants={item}
            className="mt-8 font-mono text-xs text-text-faint tracking-widest"
          >
            // {profile.role.toUpperCase()}
          </motion.p>

          <motion.h1
            variants={item}
            className="mt-3 text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.05]"
          >
            Construyo{" "}
            <span className="text-gradient">software real</span>
            <br />
            para{" "}
            <span className="relative inline-block">
              problemas reales
              <span className="absolute -bottom-2 left-0 right-0 h-[3px] bg-gradient-to-r from-accent via-accent-2 to-accent-3 opacity-60" />
            </span>
            .
          </motion.h1>

          <motion.p
            variants={item}
            className="mt-7 max-w-2xl text-text-dim text-lg leading-relaxed"
          >
            Soy <span className="text-text font-medium">{profile.name}</span>.{" "}
            {profile.intro}
          </motion.p>

          <motion.div
            variants={item}
            className="mt-9 flex flex-wrap items-center gap-3"
          >
            <a
              href="#proyectos"
              className="group inline-flex items-center gap-2 px-5 py-3 rounded-full bg-accent text-bg font-medium hover:bg-accent/90 transition-colors"
            >
              Ver proyectos
              <span className="transition-transform group-hover:translate-x-0.5">
                →
              </span>
            </a>
            <a
              href="#contacto"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-full border border-[var(--border)] hover:border-text-dim text-text-dim hover:text-text transition-colors"
            >
              Contactarme
            </a>
          </motion.div>

          <motion.div
            variants={item}
            className="mt-16 grid grid-cols-3 gap-6 sm:gap-12 w-full max-w-xl"
          >
            {profile.stats.map((s) => (
              <div key={s.label} className="flex flex-col">
                <span className="font-mono text-3xl sm:text-4xl text-text font-bold">
                  {s.value}
                </span>
                <span className="mt-1 text-xs sm:text-sm text-text-dim leading-tight">
                  {s.label}
                </span>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
