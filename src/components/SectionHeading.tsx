"use client";

import { motion } from "framer-motion";
import { EASE_OUT } from "@/lib/motion";

type Props = {
  index: string;
  eyebrow: string;
  title: React.ReactNode;
  description?: string;
};

export function SectionHeading({ index, eyebrow, title, description }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.55, ease: EASE_OUT }}
      className="max-w-2xl"
    >
      <div className="flex items-center gap-3">
        <p className="section-index">{index}</p>
        <span className="h-px w-10 bg-[var(--border)]" />
        <p className="font-mono text-[10px] tracking-[0.25em] text-text-faint">
          {eyebrow}
        </p>
      </div>
      <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-text-dim leading-relaxed">{description}</p>
      )}
    </motion.div>
  );
}
