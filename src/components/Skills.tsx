"use client";

import { motion } from "framer-motion";
import { skills } from "@/data/skills";
import { iconForTag } from "@/lib/icons";
import { SectionHeading } from "./SectionHeading";
import { Spotlight } from "./Spotlight";
import { EASE_OUT } from "@/lib/motion";

export function Skills() {
  return (
    <section id="stack" className="relative py-24 sm:py-32 px-5 sm:px-8">
      <div className="max-w-6xl mx-auto">
        <SectionHeading
          index="02"
          eyebrow="STACK TÉCNICO"
          title={
            <>
              Cómodo en <span className="text-gradient">todo el stack</span>.
            </>
          }
          description="Móvil, web, backend e IA. Aprender herramientas nuevas es parte del trabajo: lo que importa es enviar."
        />

        <div className="mt-14 grid gap-5 sm:gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {skills.map((cat, i) => (
            <motion.div
              key={cat.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{
                duration: 0.5,
                delay: (i % 3) * 0.07,
                ease: EASE_OUT,
              }}
            >
              <Spotlight
                glow="rgba(34,211,238,0.14)"
                className="card-hover relative rounded-2xl border border-[var(--border)] bg-bg-card/60 backdrop-blur-sm p-6 h-full overflow-hidden"
              >
                {/* Header */}
                <div className="flex items-center justify-between mb-5">
                  <div className="flex items-center gap-3">
                    <span className="text-2xl" aria-hidden>
                      {cat.icon}
                    </span>
                    <h3 className="font-semibold tracking-tight">
                      {cat.title}
                    </h3>
                  </div>
                  <span className="font-mono text-[10px] text-text-faint tracking-widest">
                    0{i + 1}
                  </span>
                </div>

                {/* Logo grid */}
                <ul className="grid grid-cols-3 gap-2.5">
                  {cat.items.map((s) => {
                    const icon = iconForTag(s);
                    return (
                      <li
                        key={s}
                        className="group/chip relative flex flex-col items-center justify-center gap-1.5 rounded-xl border border-[var(--border)] bg-bg-soft/60 p-3 transition-all hover:border-text-faint hover:bg-bg-soft"
                        title={s}
                      >
                        {icon ? (
                          <icon.Icon
                            className="text-2xl transition-transform duration-300 group-hover/chip:scale-110"
                            style={{ color: icon.color }}
                            aria-hidden
                          />
                        ) : (
                          <span className="block w-6 h-6 rounded-md bg-bg-card border border-[var(--border)]" />
                        )}
                        <span className="font-mono text-[9px] text-center text-text-faint tracking-wider leading-tight uppercase">
                          {s.length > 14 ? s.split(" ")[0] : s}
                        </span>
                      </li>
                    );
                  })}
                </ul>
              </Spotlight>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
