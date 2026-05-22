"use client";

import { marqueeStack } from "@/lib/icons";

export function Marquee() {
  const items = [...marqueeStack, ...marqueeStack];
  return (
    <div
      aria-hidden
      className="relative w-full overflow-hidden border-y border-[var(--border)] bg-bg-soft/30 backdrop-blur-sm"
    >
      <div
        className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-bg to-transparent"
      />
      <div
        className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-bg to-transparent"
      />
      <div className="flex gap-12 py-6 animate-marquee whitespace-nowrap will-change-transform">
        {items.map((it, i) => (
          <div
            key={`${it.label}-${i}`}
            className="group inline-flex items-center gap-3 px-2 flex-shrink-0"
          >
            <it.Icon
              className="text-2xl transition-all duration-300 grayscale group-hover:grayscale-0 opacity-70 group-hover:opacity-100"
              style={{ color: it.color }}
              aria-hidden
            />
            <span className="font-mono text-xs tracking-wider text-text-faint group-hover:text-text transition-colors">
              {it.label.toUpperCase()}
            </span>
            <span className="font-mono text-text-faint">·</span>
          </div>
        ))}
      </div>
    </div>
  );
}
