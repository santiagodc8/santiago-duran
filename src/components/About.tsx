"use client";

import { motion } from "framer-motion";
import { profile } from "@/data/profile";
import { SectionHeading } from "./SectionHeading";

export function About() {
  return (
    <section
      id="sobre-mi"
      className="relative py-24 sm:py-32 px-5 sm:px-8"
    >
      <div className="max-w-6xl mx-auto">
        <SectionHeading
          index="03"
          eyebrow="SOBRE MÍ"
          title={
            <>
              Detecto un problema y lo{" "}
              <span className="text-gradient">resuelvo con código</span>.
            </>
          }
        />

        <div className="mt-12 grid gap-12 lg:grid-cols-[1.2fr_1fr]">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.55, ease: [0.2, 0.8, 0.2, 1] }}
            className="space-y-5 text-text-dim leading-relaxed"
          >
            <p>
              Estudio Ingeniería de Sistemas en la{" "}
              <span className="text-text">
                Universidad Cooperativa de Colombia
              </span>{" "}
              (sede Cali), último semestre. Mi patrón es claro: detectar un
              problema concreto y resolverlo con código.
            </p>
            <p>
              Los domicilios desordenados de mi hermano se volvieron{" "}
              <span className="text-text">Mandao</span>. El portal del tío se
              volvió <span className="text-text">tuperfil.net</span>. El fútbol
              amateur sin stats se está volviendo una{" "}
              <span className="text-text">app con sensores propios</span>.
            </p>
            <p>
              Cómodo en todo el stack, aprendo rápido y me enfoco en que el
              producto se envíe y resuelva algo de verdad.
            </p>
          </motion.div>

          <div className="relative">
            <div className="absolute left-[15px] top-2 bottom-2 w-px bg-gradient-to-b from-accent via-accent-2 to-accent-3 opacity-50" />
            <ol className="space-y-7">
              {profile.timeline.map((t, i) => (
                <motion.li
                  key={t.year}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{
                    duration: 0.5,
                    delay: i * 0.08,
                    ease: [0.2, 0.8, 0.2, 1],
                  }}
                  className="relative pl-10"
                >
                  <span className="absolute left-0 top-1.5 flex h-[14px] w-[14px] items-center justify-center">
                    <span className="absolute inline-flex h-full w-full rounded-full bg-accent opacity-40 animate-ping-soft" />
                    <span className="relative inline-block h-2.5 w-2.5 rounded-full bg-accent" />
                  </span>
                  <p className="font-mono text-xs text-text-faint tracking-wider">
                    {t.year}
                  </p>
                  <p className="mt-1 text-text leading-relaxed">{t.text}</p>
                </motion.li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}
