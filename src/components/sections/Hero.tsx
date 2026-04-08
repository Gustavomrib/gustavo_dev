"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, Download, Mail, Sparkles } from "lucide-react";
import { siteData, t } from "@/data/site";
import Image from "next/image";

const ease = [0.25, 0.46, 0.45, 0.94] as const;

export default function Hero() {
  const reduceMotion = useReducedMotion();

  const handleScroll = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const reveal = (delay: number, y = 20, scale?: number) =>
    reduceMotion
      ? {}
      : {
          initial: scale ? { opacity: 0, scale } : { opacity: 0, y },
          animate: scale ? { opacity: 1, scale: 1 } : { opacity: 1, y: 0 },
          transition: { delay, duration: 0.6, ease },
        };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[600px] bg-primary/[0.07] rounded-full blur-[120px]" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-accent/[0.05] rounded-full blur-[100px]" />
      </div>

      <div
        className="absolute inset-0 opacity-[0.025] pointer-events-none"
        aria-hidden="true"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(255,255,255,0.4) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 pt-28 pb-20 sm:pt-32 sm:pb-24 lg:pt-36 lg:pb-28 flex flex-col-reverse lg:flex-row items-center gap-10 sm:gap-14 lg:gap-20">
        <div className="flex-1 text-center lg:text-left w-full">
          <motion.div
            {...reveal(0.12, 16)}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gradient-to-r from-primary/[0.14] to-accent/[0.10] border border-primary/[0.18] mb-7"
          >
            <Sparkles size={13} className="text-primary" />
            <span className="text-xs font-medium text-primary tracking-wide">
              {t(siteData.cta)}
            </span>
          </motion.div>

          <motion.h1
            {...reveal(0.2)}
            className="text-[2.2rem] sm:text-5xl lg:text-[3.5rem] xl:text-6xl font-bold tracking-tight leading-[1.02] mb-4"
          >
            <span className="bg-gradient-to-r from-primary via-foreground to-accent bg-clip-text text-transparent">
              {siteData.name}
            </span>
            <span className="text-primary">.</span>
          </motion.h1>

          <motion.p
            {...reveal(0.28)}
            className="text-lg sm:text-xl lg:text-2xl text-muted font-medium mb-4 tracking-tight"
          >
            {t(siteData.role)}
          </motion.p>

          <motion.p
            {...reveal(0.36)}
            className="text-muted-foreground text-[15px] sm:text-base max-w-xl mx-auto lg:mx-0 mb-7 leading-[1.75]"
          >
            {t(siteData.headline)}
          </motion.p>

          <motion.div
            {...reveal(0.44)}
            className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center lg:justify-start gap-3 w-full sm:w-auto"
          >
            <button
              onClick={() => handleScroll("#projects")}
              className="group min-h-11 px-6 py-3.5 bg-gradient-to-r from-primary to-accent hover:brightness-110 text-white rounded-xl font-medium text-sm transition-all duration-300 flex items-center justify-center gap-2 shadow-[0_0_24px_rgba(124,127,255,0.18)] hover:shadow-[0_0_32px_rgba(124,127,255,0.28)] active:scale-95 min-w-[12rem]"
            >
              Ver projetos
              <ArrowRight
                size={15}
                className="transition-transform group-hover:translate-x-0.5"
              />
            </button>

            <button
              onClick={() => handleScroll("#contact")}
              className="min-h-11 px-6 py-3.5 rounded-xl font-medium text-sm text-muted hover:text-primary bg-white/[0.03] hover:bg-white/[0.06] border border-white/[0.06] hover:border-primary/30 transition-all duration-300 flex items-center justify-center gap-2 active:scale-95"
            >
              <Mail size={14} />
              Falar comigo
            </button>

            <a
              href={siteData.resumeUrl}
              download="curriculo.pdf"
              className="min-h-11 px-6 py-3.5 rounded-xl font-medium text-sm text-muted hover:text-primary bg-white/[0.03] hover:bg-white/[0.06] border border-white/[0.06] hover:border-primary/30 transition-all duration-300 flex items-center justify-center gap-2 active:scale-95"
            >
              <Download size={14} />
              Baixar curriculo
            </a>
          </motion.div>

          <motion.div
            {...reveal(0.52)}
            className="mt-5 flex flex-wrap items-center justify-center lg:justify-start gap-x-4 gap-y-2 text-xs sm:text-[13px] text-muted"
          >
            <span className="inline-flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-emerald-400" />
              Disponivel para vagas e freelance
            </span>
            <span className="inline-flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-primary/80" />
              React, Next.js, .NET e Python
            </span>
          </motion.div>
        </div>

        <motion.div {...reveal(0.24, 0, 0.92)} className="flex-shrink-0">
          <div className="relative w-48 h-48 sm:w-60 sm:h-60 lg:w-72 lg:h-72">
            <div className="absolute -inset-4 bg-gradient-to-br from-primary/20 via-transparent to-accent/20 rounded-full blur-3xl opacity-40" />
            <div className="relative w-full h-full rounded-full p-[2px] bg-gradient-to-br from-primary/40 via-border to-accent/30">
              <div className="relative w-full h-full rounded-full overflow-hidden bg-surface">
                <Image
                  src={siteData.avatarUrl}
                  alt={siteData.name}
                  fill
                  className="object-cover"
                  priority
                  sizes="(max-width: 640px) 208px, (max-width: 1024px) 256px, 288px"
                />
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={reduceMotion ? false : { opacity: 0 }}
        animate={reduceMotion ? undefined : { opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden sm:block"
      >
        <motion.div
          animate={reduceMotion ? undefined : { y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut" }}
          className="w-[22px] h-[34px] border-[1.5px] border-white/[0.15] rounded-full flex justify-center pt-2"
        >
          <motion.div
            animate={reduceMotion ? undefined : { opacity: [0.6, 1, 0.6] }}
            transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut" }}
            className="w-[3px] h-[6px] bg-primary/70 rounded-full"
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
