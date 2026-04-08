"use client";

import { motion, useInView, useReducedMotion } from "framer-motion";
import { useRef } from "react";

interface Props {
  title: string;
  subtitle?: string;
}

export default function SectionHeading({ title, subtitle }: Props) {
  const reduceMotion = useReducedMotion();
  const ref = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(ref, { margin: "-100px" });

  return (
    <div ref={ref} className="mb-12 sm:mb-14">
      <motion.div
        initial={reduceMotion ? false : { opacity: 0, y: 24 }}
        animate={
          reduceMotion
            ? undefined
            : isInView
            ? { opacity: 1, y: 0 }
            : { opacity: 0, y: 24 }
        }
        transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
        className="text-center"
      >
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight bg-gradient-to-r from-primary via-foreground to-accent bg-clip-text text-transparent">
          {title}
          <span className="text-primary">.</span>
        </h2>
        {subtitle && (
          <p className="mt-5 text-muted max-w-2xl mx-auto text-[15px] sm:text-base leading-[1.8]">
            {subtitle}
          </p>
        )}
        <div className="mt-6 mx-auto h-px w-24 bg-gradient-to-r from-transparent via-primary to-accent/80" />
      </motion.div>
    </div>
  );
}
