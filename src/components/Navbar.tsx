"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SiGithub } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa6";
import { profile } from "@/data/profile";

const links = [
  { href: "#proyectos", label: "Proyectos" },
  { href: "#stack", label: "Stack" },
  { href: "#sobre-mi", label: "Sobre mí" },
  { href: "#contacto", label: "Contacto" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? "backdrop-blur-xl bg-[rgba(10,10,15,0.7)] border-b border-[var(--border)]"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-5 sm:px-8 h-16 flex items-center justify-between">
        {/* Logo monogram */}
        <a href="#top" className="group flex items-center gap-2.5">
          <span className="relative inline-flex h-8 w-8 items-center justify-center rounded-lg border border-[var(--border)] bg-bg-soft overflow-hidden">
            <span className="absolute inset-0 opacity-70 bg-gradient-to-br from-accent via-accent-2 to-accent-3" />
            <span className="absolute inset-[1.5px] rounded-[7px] bg-bg" />
            <span className="relative font-mono text-xs font-bold tracking-tighter text-text">
              SD
            </span>
          </span>
          <span className="hidden sm:block font-semibold tracking-tight">
            {profile.shortName.split(" ")[0]}
            <span className="text-gradient">.</span>
            {profile.shortName.split(" ")[1]?.toLowerCase()}
          </span>
        </a>

        <nav className="hidden md:flex items-center gap-7">
          {links.map((l, i) => (
            <a
              key={l.href}
              href={l.href}
              className="group text-sm text-text-dim hover:text-text transition-colors"
            >
              <span className="font-mono text-text-faint mr-1.5">
                0{i + 1}.
              </span>
              {l.label}
            </a>
          ))}

          {/* Social icons */}
          <div className="flex items-center gap-3 pl-3 border-l border-[var(--border)]">
            <a
              href={profile.contact.github}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="text-text-dim hover:text-text transition-colors"
            >
              <SiGithub className="text-base" />
            </a>
            <a
              href={profile.contact.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="text-text-dim hover:text-text transition-colors"
            >
              <FaLinkedin className="text-base" />
            </a>
          </div>

          <a
            href={profile.contact.cv}
            className="group inline-flex items-center gap-1.5 text-sm px-4 py-2 rounded-full border border-accent/40 text-accent hover:bg-accent/10 transition-colors"
          >
            CV
            <span className="transition-transform group-hover:translate-x-0.5">
              ↗
            </span>
          </a>
        </nav>

        <button
          className="md:hidden inline-flex flex-col gap-1.5 p-2 -mr-2"
          onClick={() => setOpen((v) => !v)}
          aria-label="Abrir menú"
          aria-expanded={open}
        >
          <span
            className={`block h-px w-6 bg-text transition-transform ${
              open ? "translate-y-[6px] rotate-45" : ""
            }`}
          />
          <span
            className={`block h-px w-6 bg-text transition-opacity ${
              open ? "opacity-0" : "opacity-100"
            }`}
          />
          <span
            className={`block h-px w-6 bg-text transition-transform ${
              open ? "-translate-y-[6px] -rotate-45" : ""
            }`}
          />
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="md:hidden border-t border-[var(--border)] bg-[rgba(10,10,15,0.95)] backdrop-blur-xl"
          >
            <div className="px-5 py-4 flex flex-col gap-3">
              {links.map((l, i) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="text-text-dim hover:text-text py-1"
                >
                  <span className="font-mono text-text-faint mr-2">
                    0{i + 1}.
                  </span>
                  {l.label}
                </a>
              ))}
              <div className="flex items-center gap-4 pt-3 border-t border-[var(--border)]">
                <a
                  href={profile.contact.github}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="GitHub"
                  className="text-text-dim hover:text-text"
                >
                  <SiGithub className="text-lg" />
                </a>
                <a
                  href={profile.contact.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="LinkedIn"
                  className="text-text-dim hover:text-text"
                >
                  <FaLinkedin className="text-lg" />
                </a>
                <a
                  href={profile.contact.cv}
                  onClick={() => setOpen(false)}
                  className="ml-auto inline-flex items-center gap-1.5 text-sm px-4 py-2 rounded-full border border-accent/40 text-accent"
                >
                  Descargar CV ↗
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
