"use client";

import { motion } from "framer-motion";
import { profile } from "@/data/profile";
import { SectionHeading } from "./SectionHeading";

const channels = [
  {
    key: "email",
    label: "Email",
    valueKey: "email" as const,
    icon: "✉️",
    href: (v: string) => `mailto:${v}`,
  },
  {
    key: "linkedin",
    label: "LinkedIn",
    valueKey: "linkedin" as const,
    icon: "💼",
    href: (v: string) => v,
  },
  {
    key: "github",
    label: "GitHub",
    valueKey: "github" as const,
    icon: "🐙",
    href: (v: string) => v,
  },
  {
    key: "cv",
    label: "CV (PDF)",
    valueKey: "cv" as const,
    icon: "📄",
    href: (v: string) => v,
  },
];

export function Contact() {
  return (
    <section
      id="contacto"
      className="relative py-24 sm:py-32 px-5 sm:px-8"
    >
      <div className="max-w-4xl mx-auto">
        <SectionHeading
          index="04"
          eyebrow="HABLEMOS"
          title={
            <>
              ¿Tienes una idea, vacante o proyecto?{" "}
              <span className="text-gradient">Escríbeme</span>.
            </>
          }
          description="Estoy abierto a prácticas, primer empleo como dev y proyectos freelance. Respondo rápido."
        />

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.55, ease: [0.2, 0.8, 0.2, 1] }}
          className="mt-12 rounded-2xl border border-[var(--border)] bg-bg-card/60 backdrop-blur-sm p-6 sm:p-8"
        >
          <a
            href={`mailto:${profile.contact.email}`}
            className="group block"
          >
            <p className="font-mono text-xs text-text-faint tracking-widest">
              {"// ENVÍAME UN CORREO"}
            </p>
            <p className="mt-3 text-2xl sm:text-4xl font-semibold tracking-tight group-hover:text-gradient transition-colors break-all">
              {profile.contact.email}
            </p>
          </a>

          <div className="mt-8 grid gap-3 sm:grid-cols-2">
            {channels.map((c) => {
              const value = profile.contact[c.valueKey];
              return (
                <a
                  key={c.key}
                  href={c.href(value)}
                  target={c.key === "email" ? undefined : "_blank"}
                  rel="noreferrer"
                  className="card-hover flex items-center gap-3 rounded-xl border border-[var(--border)] bg-bg-soft/60 px-4 py-3"
                >
                  <span className="text-xl" aria-hidden>
                    {c.icon}
                  </span>
                  <span className="flex-1">
                    <span className="block text-sm text-text">{c.label}</span>
                    <span className="block font-mono text-[11px] text-text-faint truncate">
                      {value}
                    </span>
                  </span>
                  <span className="text-text-faint group-hover:text-text">
                    →
                  </span>
                </a>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
