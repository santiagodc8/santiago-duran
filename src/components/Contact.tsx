"use client";

import { motion } from "framer-motion";
import type { IconType } from "react-icons";
import { HiOutlineMail, HiOutlineDocumentText } from "react-icons/hi";
import { profile } from "@/data/profile";
import { SectionHeading } from "./SectionHeading";
import { iconMap } from "@/lib/icons";
import { Spotlight } from "./Spotlight";
import { EASE_OUT } from "@/lib/motion";

type Channel = {
  key: string;
  label: string;
  value: string;
  href: string;
  Icon: IconType;
  color: string;
  glow: string;
  external: boolean;
};

export function Contact() {
  const channels: Channel[] = [
    {
      key: "email",
      label: "Email",
      value: profile.contact.email,
      href: `mailto:${profile.contact.email}`,
      Icon: HiOutlineMail,
      color: "#4ade80",
      glow: "rgba(74,222,128,0.18)",
      external: false,
    },
    {
      key: "linkedin",
      label: "LinkedIn",
      value: profile.contact.linkedin.replace(/^https?:\/\//, ""),
      href: profile.contact.linkedin,
      Icon: iconMap.linkedin.Icon,
      color: iconMap.linkedin.color,
      glow: "rgba(10,102,194,0.20)",
      external: true,
    },
    {
      key: "github",
      label: "GitHub",
      value: profile.contact.github.replace(/^https?:\/\//, ""),
      href: profile.contact.github,
      Icon: iconMap.github.Icon,
      color: "#ffffff",
      glow: "rgba(255,255,255,0.10)",
      external: true,
    },
    {
      key: "cv",
      label: "Currículum (PDF)",
      value: profile.contact.cv,
      href: profile.contact.cv,
      Icon: HiOutlineDocumentText,
      color: "#a78bfa",
      glow: "rgba(167,139,250,0.18)",
      external: true,
    },
  ];

  return (
    <section id="contacto" className="relative py-24 sm:py-32 px-5 sm:px-8">
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
          transition={{ duration: 0.55, ease: EASE_OUT }}
          className="mt-12"
        >
          {/* Email mega-CTA */}
          <Spotlight
            glow="rgba(74,222,128,0.18)"
            className="rounded-2xl border border-[var(--border)] bg-bg-card/60 backdrop-blur-sm p-6 sm:p-10 overflow-hidden corner-frame"
          >
            <span className="cf-bl" />
            <span className="cf-br" />
            <a href={`mailto:${profile.contact.email}`} className="group block">
              <p className="font-mono text-xs text-text-faint tracking-widest">
                {"// ENVÍAME UN CORREO"}
              </p>
              <p className="mt-3 text-2xl sm:text-4xl lg:text-5xl font-semibold tracking-tight transition-colors break-all group-hover:text-gradient-animated">
                {profile.contact.email}
              </p>
              <p className="mt-3 inline-flex items-center gap-2 text-sm text-text-dim group-hover:text-text">
                <span>Te respondo en menos de 24h</span>
                <span className="transition-transform group-hover:translate-x-1">
                  →
                </span>
              </p>
            </a>
          </Spotlight>

          {/* Channels grid */}
          <div className="mt-5 grid gap-3 sm:grid-cols-2">
            {channels.map((c) => (
              <a
                key={c.key}
                href={c.href}
                target={c.external ? "_blank" : undefined}
                rel="noreferrer"
              >
                <Spotlight
                  glow={c.glow}
                  className="group flex items-center gap-4 rounded-xl border border-[var(--border)] bg-bg-soft/60 px-4 py-3.5 transition-all hover:border-text-faint hover:-translate-y-0.5"
                >
                  <span
                    className="flex h-10 w-10 items-center justify-center rounded-lg bg-bg-card border border-[var(--border)]"
                  >
                    <c.Icon className="text-xl" style={{ color: c.color }} aria-hidden />
                  </span>
                  <span className="flex-1 min-w-0">
                    <span className="block text-sm text-text">{c.label}</span>
                    <span className="block font-mono text-[11px] text-text-faint truncate">
                      {c.value}
                    </span>
                  </span>
                  <span className="text-text-faint group-hover:text-text transition-all group-hover:translate-x-0.5">
                    →
                  </span>
                </Spotlight>
              </a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
