"use client";

import { motion } from "framer-motion";
import { ArrowRight, Download, Mail, Sparkles } from "lucide-react";
import { siteData, t } from "@/data/site";
import Image from "next/image";

const ease = [0.25, 0.46, 0.45, 0.94] as const;

export default function Hero() {
  const handleScroll = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background — radial glows */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[600px] bg-primary/[0.07] rounded-full blur-[120px]" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-accent/[0.05] rounded-full blur-[100px]" />
      </div>

      {/* Dot grid — subtle texture */}
      <div
        className="absolute inset-0 opacity-[0.025] pointer-events-none"
        aria-hidden="true"
        style={{
          backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.4) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />

      <div className="relative z-10 max-w-5xl mx-auto px-6 pt-32 pb-24 sm:pt-36 sm:pb-28 flex flex-col-reverse lg:flex-row items-center gap-14 lg:gap-20">
        {/* Text */}
        <div className="flex-1 text-center lg:text-left">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.5, ease }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary/[0.08] border border-primary/[0.15] mb-7"
          >
            <Sparkles size={13} className="text-primary" />
            <span className="text-xs font-medium text-primary tracking-wide">
              {t(siteData.cta)}
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25, duration: 0.6, ease }}
            className="text-4xl sm:text-5xl lg:text-[3.5rem] xl:text-6xl font-bold tracking-tight leading-[1.08] mb-4"
          >
            {siteData.name}
            <span className="text-primary">.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 0.6, ease }}
            className="text-lg sm:text-xl lg:text-2xl text-muted font-medium mb-5 tracking-tight"
          >
            {t(siteData.role)}
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.45, duration: 0.6, ease }}
            className="text-muted-foreground text-[15px] sm:text-base max-w-md mx-auto lg:mx-0 mb-9 leading-[1.7]"
          >
            {t(siteData.headline)}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.55, duration: 0.6, ease }}
            className="flex flex-wrap items-center justify-center lg:justify-start gap-3"
          >
            {/* Primary CTA */}
            <button
              onClick={() => handleScroll("#projects")}
              className="group px-6 py-3 bg-primary hover:bg-primary-light text-white rounded-xl font-medium text-sm transition-all duration-300 flex items-center gap-2 shadow-[0_0_24px_rgba(124,127,255,0.18)] hover:shadow-[0_0_32px_rgba(124,127,255,0.28)] active:scale-[0.98]"
            >
              Ver Projetos
              <ArrowRight size={15} className="transition-transform group-hover:translate-x-0.5" />
            </button>

            {/* Secondary CTAs */}
            <button
              onClick={() => handleScroll("#contact")}
              className="px-6 py-3 rounded-xl font-medium text-sm text-muted hover:text-foreground bg-white/[0.03] hover:bg-white/[0.06] border border-white/[0.06] hover:border-white/[0.1] transition-all duration-300 flex items-center gap-2 active:scale-[0.98]"
            >
              <Mail size={14} />
              Contato
            </button>

            <a
              href={siteData.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-xl font-medium text-sm text-muted hover:text-foreground bg-white/[0.03] hover:bg-white/[0.06] border border-white/[0.06] hover:border-white/[0.1] transition-all duration-300 flex items-center gap-2 active:scale-[0.98]"
            >
              <Download size={14} />
              Currículo
            </a>
          </motion.div>
        </div>

        {/* Avatar */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.7, ease }}
          className="flex-shrink-0"
        >
          <div className="relative w-48 h-48 sm:w-60 sm:h-60 lg:w-72 lg:h-72">
            {/* Outer glow */}
            <div className="absolute -inset-4 bg-gradient-to-br from-primary/20 via-transparent to-accent/20 rounded-full blur-3xl opacity-40" />
            {/* Ring */}
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

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden sm:block"
      >
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut" }}
          className="w-[22px] h-[34px] border-[1.5px] border-white/[0.15] rounded-full flex justify-center pt-2"
        >
          <motion.div
            animate={{ opacity: [0.6, 1, 0.6] }}
            transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut" }}
            className="w-[3px] h-[6px] bg-primary/70 rounded-full"
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
