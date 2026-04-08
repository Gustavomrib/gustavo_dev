"use client";

import {
  motion,
  useMotionValue,
  useReducedMotion,
  useSpring,
  useTransform,
} from "framer-motion";
import { ArrowRight, Download, Mail, Sparkles } from "lucide-react";
import { siteData, t } from "@/data/site";
import Image from "next/image";

const ease = [0.22, 1, 0.36, 1] as const;

export default function Hero() {
  const reduceMotion = useReducedMotion();
  const enableInteractiveMotion = !reduceMotion;

  const mouseX = useMotionValue(50);
  const mouseY = useMotionValue(32);
  const smoothX = useSpring(mouseX, { stiffness: 90, damping: 26, mass: 0.6 });
  const smoothY = useSpring(mouseY, { stiffness: 90, damping: 26, mass: 0.6 });

  const avatarTranslateY = useTransform(smoothY, [0, 100], [-6, 6]);
  const avatarTranslateX = useTransform(smoothX, [0, 100], [-5, 5]);
  const pointerGlowX = useTransform(smoothX, [0, 100], [-10, 10]);
  const pointerGlowY = useTransform(smoothY, [0, 100], [-10, 10]);

  const handleScroll = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const handlePointerMove = ({
    currentTarget,
    clientX,
    clientY,
  }: React.MouseEvent<HTMLElement>) => {
    if (!enableInteractiveMotion) return;

    const rect = currentTarget.getBoundingClientRect();
    const x = ((clientX - rect.left) / rect.width) * 100;
    const y = ((clientY - rect.top) / rect.height) * 100;

    mouseX.set(Math.max(0, Math.min(100, x)));
    mouseY.set(Math.max(0, Math.min(100, y)));
  };

  const handlePointerLeave = () => {
    if (!enableInteractiveMotion) return;
    mouseX.set(50);
    mouseY.set(32);
  };

  const reveal = (delay: number, y = 20, scale?: number) =>
    reduceMotion
      ? {}
      : {
          initial: scale ? { opacity: 0, scale } : { opacity: 0, y },
          animate: scale ? { opacity: 1, scale: 1 } : { opacity: 1, y: 0 },
          transition: { delay, duration: 0.9, ease },
        };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      onMouseMove={handlePointerMove}
      onMouseLeave={handlePointerLeave}
    >
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <motion.div
          style={
            !enableInteractiveMotion
              ? undefined
              : {
                  x: useTransform(smoothX, [0, 100], [-16, 16]),
                  y: useTransform(smoothY, [0, 100], [-20, 14]),
                }
          }
          animate={
            !enableInteractiveMotion
              ? undefined
              : {
                  x: [0, 18, 0],
                  y: [0, -12, 0],
                  scale: [1, 1.03, 1],
                }
          }
          transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
          className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[920px] h-[600px] bg-primary/[0.08] rounded-full blur-[96px]"
        />
        <motion.div
          style={
            !enableInteractiveMotion
              ? undefined
              : {
                  x: useTransform(smoothX, [0, 100], [10, -12]),
                  y: useTransform(smoothY, [0, 100], [8, -8]),
                }
          }
          animate={
            !enableInteractiveMotion
              ? undefined
              : {
                  x: [0, -16, 0],
                  y: [0, 10, 0],
                  scale: [1, 1.04, 1],
                }
          }
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-[-2%] right-[0%] hidden md:block w-[480px] h-[480px] bg-accent/[0.06] rounded-full blur-[88px]"
        />
      </div>

      {enableInteractiveMotion && (
        <motion.div
          className="absolute left-1/2 top-[22%] hidden lg:block h-56 w-56 -translate-x-1/2 rounded-full bg-primary/10 blur-[72px] pointer-events-none"
          aria-hidden="true"
          style={{ x: pointerGlowX, y: pointerGlowY }}
        />
      )}

      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        aria-hidden="true"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(255,255,255,0.4) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />

      <div
        className="absolute inset-0 pointer-events-none opacity-60"
        aria-hidden="true"
        style={{
          background:
            "linear-gradient(180deg, rgba(138,123,255,0.08) 0%, transparent 26%, transparent 74%, rgba(45,212,191,0.08) 100%)",
        }}
      />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 pt-28 pb-20 sm:pt-32 sm:pb-24 lg:pt-36 lg:pb-28 flex flex-col-reverse lg:flex-row items-center gap-10 sm:gap-14 lg:gap-20">
        <div className="flex-1 text-center lg:text-left w-full">
          <motion.div
            {...reveal(0.08, 16)}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gradient-to-r from-primary/[0.14] to-accent/[0.10] border border-primary/[0.18] mb-7 shadow-[0_14px_40px_rgba(0,0,0,0.18)]"
          >
            <Sparkles size={13} className="text-primary" />
            <span className="text-xs font-medium text-primary tracking-[0.18em] uppercase">
              {t(siteData.cta)}
            </span>
          </motion.div>

          <motion.h1
            {...reveal(0.18, 28)}
            className="text-[2.25rem] sm:text-5xl lg:text-[3.8rem] xl:text-[4.5rem] font-bold tracking-[-0.045em] leading-[0.96] mb-5"
          >
            <span className="block text-white/80 text-sm sm:text-base tracking-[0.26em] uppercase mb-4 font-medium">
              Portfolio
            </span>
            <span className="bg-[linear-gradient(135deg,var(--color-foreground),rgba(255,255,255,0.94)_28%,var(--color-primary-light)_58%,var(--color-accent)_100%)] bg-clip-text text-transparent">
              {siteData.name}
            </span>
            <span className="text-primary">.</span>
          </motion.h1>

          <motion.p
            {...reveal(0.28, 22)}
            className="text-lg sm:text-xl lg:text-[1.65rem] text-muted font-medium mb-5 tracking-tight"
          >
            <span className="bg-gradient-to-r from-foreground via-primary-light to-accent bg-clip-text text-transparent">
              {t(siteData.role)}
            </span>
          </motion.p>

          <motion.p
            {...reveal(0.38, 22)}
            className="text-muted-foreground text-[15px] sm:text-base max-w-2xl mx-auto lg:mx-0 mb-8 leading-[1.85]"
          >
            {t(siteData.headline)}
          </motion.p>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center lg:justify-start gap-3 w-full sm:w-auto">
            <motion.button
              {...reveal(0.48, 18)}
              onClick={() => handleScroll("#projects")}
              className="group relative overflow-hidden min-h-11 px-6 py-3.5 bg-gradient-to-r from-primary to-accent hover:brightness-110 text-white rounded-xl font-medium text-sm transition-all duration-300 flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(124,127,255,0.16)] hover:shadow-[0_0_30px_rgba(124,127,255,0.24)] active:scale-95 min-w-[12rem]"
            >
              <span className="absolute inset-0 bg-[linear-gradient(120deg,transparent,rgba(255,255,255,0.22),transparent)] translate-x-[-140%] group-hover:translate-x-[140%] transition-transform duration-700" />
              <span className="relative z-10 inline-flex items-center gap-2">
                Ver projetos
                <ArrowRight
                  size={15}
                  className="transition-transform group-hover:translate-x-0.5"
                />
              </span>
            </motion.button>

            <motion.button
              {...reveal(0.56, 14)}
              onClick={() => handleScroll("#contact")}
              className="min-h-11 px-6 py-3.5 rounded-xl font-medium text-sm text-muted hover:text-primary bg-white/[0.03] hover:bg-white/[0.06] border border-white/[0.06] hover:border-primary/30 transition-all duration-300 flex items-center justify-center gap-2 active:scale-95"
            >
              <Mail size={14} />
              Falar comigo
            </motion.button>

            <motion.a
              {...reveal(0.64, 14)}
              href={siteData.resumeUrl}
              download="curriculo.pdf"
              className="min-h-11 px-6 py-3.5 rounded-xl font-medium text-sm text-muted hover:text-primary bg-white/[0.03] hover:bg-white/[0.06] border border-white/[0.06] hover:border-primary/30 transition-all duration-300 flex items-center justify-center gap-2 active:scale-95"
            >
              <Download size={14} />
              Baixar curriculo
            </motion.a>
          </div>

          <motion.div
            {...reveal(0.6, 14)}
            className="mt-5 flex flex-wrap items-center justify-center lg:justify-start gap-x-4 gap-y-2 text-xs sm:text-[13px] text-muted"
          >
            <span className="inline-flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_14px_rgba(52,211,153,0.6)]" />
              Disponivel para vagas e freelance
            </span>
            <span className="inline-flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-primary/80 shadow-[0_0_14px_rgba(138,123,255,0.55)]" />
              React, Next.js, .NET e Python
            </span>
          </motion.div>
        </div>

        <motion.div
          {...reveal(0.24, 0, 0.94)}
          className="flex-shrink-0"
          style={
            !enableInteractiveMotion
              ? undefined
              : { x: avatarTranslateX, y: avatarTranslateY }
          }
        >
          <div className="relative w-48 h-48 sm:w-60 sm:h-60 lg:w-[21rem] lg:h-[21rem]">
            <motion.div
              animate={
                !enableInteractiveMotion
                  ? undefined
                  : {
                      scale: [1, 1.04, 1],
                      opacity: [0.34, 0.48, 0.34],
                    }
              }
              transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -inset-10 bg-gradient-to-br from-primary/24 via-white/[0.02] to-accent/18 rounded-full blur-[42px] opacity-40"
            />
            <div className="absolute -inset-4 rounded-full bg-[radial-gradient(circle,rgba(255,255,255,0.18),transparent_58%)] opacity-70" />
            <div className="relative w-full h-full rounded-full p-[2px] bg-gradient-to-br from-white/18 via-primary/40 to-accent/30 shadow-[0_14px_34px_rgba(0,0,0,0.24)]">
              <div className="relative w-full h-full rounded-full overflow-hidden bg-surface">
                <Image
                  src={siteData.avatarUrl}
                  alt={siteData.name}
                  fill
                  className="object-cover"
                  priority
                  sizes="(max-width: 640px) 208px, (max-width: 1024px) 256px, 336px"
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.12),transparent_38%,transparent_68%,rgba(0,0,0,0.14))]" />
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={reduceMotion ? false : { opacity: 0 }}
        animate={reduceMotion ? undefined : { opacity: 1 }}
        transition={{ delay: 1.25, duration: 0.8 }}
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
