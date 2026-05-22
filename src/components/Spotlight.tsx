"use client";

import { useRef, type ReactNode, type MouseEvent } from "react";

type Props = {
  children: ReactNode;
  className?: string;
  /** Tailwind color class used for the radial glow (defaults to accent green). */
  glow?: string;
};

export function Spotlight({ children, className = "", glow }: Props) {
  const ref = useRef<HTMLDivElement>(null);

  const onMove = (e: MouseEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    el.style.setProperty("--mx", `${e.clientX - rect.left}px`);
    el.style.setProperty("--my", `${e.clientY - rect.top}px`);
  };

  return (
    <div
      ref={ref}
      onMouseMove={onMove}
      className={`spotlight relative ${className}`}
      style={{ ["--glow-color" as string]: glow ?? "rgba(74,222,128,0.18)" }}
    >
      {children}
    </div>
  );
}
