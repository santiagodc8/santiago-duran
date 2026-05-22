"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
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
        <a href="#top" className="group flex items-center gap-2">
          <span className="font-mono text-xs text-text-faint">{"//"}</span>
          <span className="font-semibold tracking-tight">
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
          <a
            href={profile.contact.cv}
            className="text-sm px-4 py-2 rounded-full border border-accent/40 text-accent hover:bg-accent/10 transition-colors"
          >
            CV
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
              <a
                href={profile.contact.cv}
                onClick={() => setOpen(false)}
                className="mt-2 inline-flex self-start text-sm px-4 py-2 rounded-full border border-accent/40 text-accent"
              >
                Descargar CV
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
