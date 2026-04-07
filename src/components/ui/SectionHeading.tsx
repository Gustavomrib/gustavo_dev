"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

interface Props {
  title: string;
  subtitle?: string;
}

export default function SectionHeading({ title, subtitle }: Props) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <div ref={ref} className="mb-14 sm:mb-18">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
        className="text-center"
      >
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
          {title}
          <span className="text-primary">.</span>
        </h2>
        {subtitle && (
          <p className="mt-5 text-muted max-w-xl mx-auto text-[15px] sm:text-base leading-[1.7]">
            {subtitle}
          </p>
        )}
        <div className="mt-6 mx-auto w-16 h-px bg-gradient-to-r from-transparent via-primary/60 to-transparent" />
      </motion.div>
    </div>
  );
}
