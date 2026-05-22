"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { profile } from "@/data/profile";
import { AnimatedCounter } from "./AnimatedCounter";
import {
  EASE_OUT,
  staggerContainer,
  fadeUpItem,
} from "@/lib/motion";

const statuses = [
  "Shipping Mandao en producción",
  "Tesis: app de fútbol con ESP32",
  "Freelance abierto · LATAM",
  "Aprendiendo: detección de anomalías",
];

export function Hero() {
  const [idx, setIdx] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setIdx((i) => (i + 1) % statuses.length), 3200);
    return () => clearInterval(t);
  }, []);

  const container = staggerContainer(0.08, 0.1);

  return (
    <section
      id="top"
      className="relative pt-32 pb-20 sm:pt-40 sm:pb-28 px-5 sm:px-8"
    >
      <div className="max-w-6xl mx-auto">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="flex flex-col items-start"
        >
          {/* Editorial slug */}
          <motion.div
            variants={fadeUpItem}
            className="grid grid-cols-[auto_1fr] items-center gap-3 w-full max-w-md mb-8"
          >
            <span className="font-mono text-[10px] tracking-[0.25em] text-text-faint">
              VOL.01 · PORTAFOLIO
            </span>
            <span className="h-px bg-gradient-to-r from-[var(--border)] via-[var(--border)] to-transparent" />
          </motion.div>

          {/* Available badge */}
          <motion.div
            variants={fadeUpItem}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[var(--border)] bg-bg-soft/60 backdrop-blur text-xs text-text-dim"
          >
            <span className="relative inline-flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full rounded-full bg-accent opacity-75 animate-ping-soft" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
            </span>
            <span className="font-mono tracking-wide">
              DISPONIBLE · PRÁCTICAS · FREELANCE · PRIMER EMPLEO
            </span>
          </motion.div>

          {/* Role */}
          <motion.p
            variants={fadeUpItem}
            className="mt-8 font-mono text-xs text-text-faint tracking-widest"
          >
            {"// "}{profile.role.toUpperCase()}
          </motion.p>

          {/* Big title */}
          <motion.h1
            variants={fadeUpItem}
            className="mt-3 text-4xl sm:text-6xl lg:text-[5.25rem] font-bold tracking-tight leading-[1.02]"
          >
            Construyo{" "}
            <span className="text-gradient-animated">software real</span>
            <br />
            para{" "}
            <span className="relative inline-block italic font-light">
              problemas reales
              <motion.span
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ delay: 0.9, duration: 0.8, ease: EASE_OUT }}
                style={{ originX: 0 }}
                className="absolute -bottom-2 left-0 right-0 h-[3px] bg-gradient-to-r from-accent via-accent-2 to-accent-3 opacity-70"
              />
            </span>
            .
          </motion.h1>

          {/* Intro */}
          <motion.p
            variants={fadeUpItem}
            className="mt-7 max-w-2xl text-text-dim text-lg leading-relaxed"
          >
            Soy <span className="text-text font-medium">{profile.name}</span>.{" "}
            {profile.intro}
          </motion.p>

          {/* Rotating "now" status */}
          <motion.div
            variants={fadeUpItem}
            className="mt-7 inline-flex items-center gap-3 font-mono text-[11px] tracking-widest"
          >
            <span className="inline-flex items-center gap-2 text-text-faint">
              <span className="relative inline-flex h-1.5 w-1.5">
                <span className="absolute inline-flex h-full w-full rounded-full bg-accent-2 opacity-75 animate-ping-soft" />
                <span className="relative inline-block h-1.5 w-1.5 rounded-full bg-accent-2" />
              </span>
              NOW
            </span>
            <span className="text-text-faint">·</span>
            <div className="relative h-5 overflow-hidden min-w-[260px] sm:min-w-[320px]">
              <AnimatePresence mode="wait">
                <motion.span
                  key={idx}
                  initial={{ y: 16, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -16, opacity: 0 }}
                  transition={{ duration: 0.4, ease: EASE_OUT }}
                  className="absolute inset-0 text-text"
                >
                  {statuses[idx]}
                </motion.span>
              </AnimatePresence>
            </div>
          </motion.div>

          {/* CTAs */}
          <motion.div
            variants={fadeUpItem}
            className="mt-9 flex flex-wrap items-center gap-3"
          >
            <a
              href="#proyectos"
              className="group relative inline-flex items-center gap-2 px-5 py-3 rounded-full bg-accent text-bg font-medium overflow-hidden transition-colors"
            >
              <span className="relative z-10">Ver proyectos</span>
              <span className="relative z-10 transition-transform group-hover:translate-x-0.5">
                →
              </span>
              <span className="absolute inset-0 bg-gradient-to-r from-accent via-accent-2 to-accent-3 opacity-0 group-hover:opacity-100 transition-opacity" />
            </a>
            <a
              href="#contacto"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-full border border-[var(--border)] hover:border-text-dim text-text-dim hover:text-text transition-colors"
            >
              Contactarme
            </a>
          </motion.div>

          {/* Stats */}
          <motion.div
            variants={fadeUpItem}
            className="mt-16 grid grid-cols-3 gap-6 sm:gap-12 w-full max-w-xl"
          >
            {profile.stats.map((s, i) => (
              <div
                key={s.label}
                className="relative flex flex-col pl-4 border-l border-[var(--border)]"
              >
                <span className="absolute -left-px top-0 bottom-0 w-px bg-gradient-to-b from-accent via-accent-2 to-accent-3 opacity-60" />
                <span className="font-mono text-[10px] tracking-widest text-text-faint">
                  0{i + 1}
                </span>
                <span className="font-mono text-3xl sm:text-4xl text-text font-bold mt-1">
                  <AnimatedCounter value={s.value} />
                </span>
                <span className="mt-1 text-xs sm:text-sm text-text-dim leading-tight">
                  {s.label}
                </span>
              </div>
            ))}
          </motion.div>

          {/* Scroll cue */}
          <motion.div
            variants={fadeUpItem}
            className="mt-16 flex items-center gap-3 font-mono text-[10px] tracking-[0.3em] text-text-faint"
          >
            <span className="block h-px w-10 bg-text-faint" />
            DESPLAZA PARA EXPLORAR
            <span className="inline-block animate-bounce">↓</span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
