"use client";

import { motion } from "framer-motion";

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
      transition={{ duration: 0.55, ease: [0.2, 0.8, 0.2, 1] }}
      className="max-w-2xl"
    >
      <p className="section-index">
        {index} &nbsp;//&nbsp; {eyebrow}
      </p>
      <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-text-dim leading-relaxed">{description}</p>
      )}
    </motion.div>
  );
}
