"use client";

import { useState, useEffect } from "react";
import {
  motion,
  useMotionValue,
  useReducedMotion,
  useSpring,
  useTransform,
} from "framer-motion";
import { ArrowRight, Download, Mail } from "lucide-react";
import { siteData, t } from "@/data/site";
import { useLocale } from "@/context/LocaleContext";
import Image from "next/image";

const ease = [0.22, 1, 0.36, 1] as const;

const COMMAND = "whoami";
const OUTPUT = "OBRUXO.DEV";

function TypingTerminal({ reduceMotion }: { reduceMotion: boolean }) {
  const [cmdText, setCmdText] = useState(reduceMotion ? COMMAND : "");
  const [outText, setOutText] = useState(reduceMotion ? OUTPUT : "");
  const [done, setDone] = useState(reduceMotion);

  useEffect(() => {
    if (reduceMotion) return;

    const timeouts: ReturnType<typeof setTimeout>[] = [];

    COMMAND.split("").forEach((_, i) => {
      timeouts.push(
        setTimeout(() => setCmdText(COMMAND.slice(0, i + 1)), 120 * (i + 1))
      );
    });

    const afterCmd = 120 * COMMAND.length + 300;

    OUTPUT.split("").forEach((_, i) => {
      timeouts.push(
        setTimeout(
          () => setOutText(OUTPUT.slice(0, i + 1)),
          afterCmd + 90 * (i + 1)
        )
      );
    });

    timeouts.push(
      setTimeout(() => setDone(true), afterCmd + 90 * OUTPUT.length + 600)
    );

    return () => timeouts.forEach(clearTimeout);
  }, [reduceMotion]);

  const cursorStyle: React.CSSProperties = done
    ? {}
    : { animation: "cursor-blink 1s step-end infinite" };

  const cursor = (
    <span
      aria-hidden="true"
      className="inline-block w-[7px] h-[13px] bg-primary rounded-[1px] align-middle ml-[1px]"
      style={cursorStyle}
    />
  );

  return (
    <div className="inline-block rounded-xl overflow-hidden border border-white/[0.07] bg-white/[0.02]">
      <div className="flex items-center gap-1.5 px-3 py-2 bg-white/[0.025] border-b border-white/[0.05]">
        <span className="w-2 h-2 rounded-full bg-red-500/50" aria-hidden="true" />
        <span className="w-2 h-2 rounded-full bg-yellow-500/50" aria-hidden="true" />
        <span className="w-2 h-2 rounded-full bg-green-500/50" aria-hidden="true" />
        <span className="ml-2 font-mono text-[10px] text-muted-foreground/40 select-none">
          obruxo.dev — bash
        </span>
      </div>
      <div className="px-4 py-3 font-mono text-[13px]">
        <div>
          <span className="text-primary select-none">❯ </span>
          <span className="text-foreground">{cmdText}</span>
          {!outText && cursor}
        </div>
        {outText && (
          <div className="mt-1.5">
            <span className="text-primary font-semibold">{outText}</span>
            {cursor}
          </div>
        )}
      </div>
    </div>
  );
}

export default function Hero() {
  const { locale } = useLocale();
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
          className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[520px] bg-primary/[0.05] rounded-full blur-[80px]"
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
          className="absolute bottom-[-2%] right-[0%] hidden md:block w-[420px] h-[420px] bg-accent/[0.04] rounded-full blur-[72px]"
        />
      </div>

      {enableInteractiveMotion && (
        <motion.div
          className="absolute left-1/2 top-[22%] hidden lg:block h-48 w-48 -translate-x-1/2 rounded-full bg-primary/[0.06] blur-[56px] pointer-events-none"
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
            "linear-gradient(180deg, rgba(45,140,110,0.08) 0%, transparent 26%, transparent 74%, rgba(212,168,87,0.06) 100%)",
        }}
      />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 pt-28 pb-20 sm:pt-32 sm:pb-24 lg:pt-36 lg:pb-28 flex flex-col-reverse lg:flex-row items-center gap-10 sm:gap-14 lg:gap-20">
        <div className="flex-1 text-center lg:text-left w-full">
          <motion.div
            {...reveal(0.05, 12)}
            className="mb-7 flex justify-center lg:justify-start"
          >
            <TypingTerminal reduceMotion={!!reduceMotion} />
          </motion.div>

          <motion.h1
            {...reveal(0.22, 28)}
            className="text-[2.25rem] sm:text-5xl lg:text-[3.8rem] xl:text-[4.5rem] font-bold tracking-[-0.045em] leading-[0.96] mb-5"
          >
            <span className="block text-white/80 text-sm sm:text-base tracking-[0.26em] uppercase mb-4 font-medium font-mono">
              Portfolio
            </span>
            <span className="bg-[linear-gradient(135deg,var(--color-foreground),rgba(255,255,255,0.94)_28%,var(--color-primary-light)_58%,var(--color-accent)_100%)] bg-clip-text text-transparent">
              {siteData.name}
            </span>
            <span className="text-primary">.</span>
          </motion.h1>

          <motion.p
            {...reveal(0.32, 22)}
            className="text-lg sm:text-xl lg:text-[1.65rem] text-muted font-medium mb-5 tracking-tight"
          >
            <span className="bg-gradient-to-r from-foreground via-primary-light to-accent bg-clip-text text-transparent">
              {t(siteData.role, locale)}
            </span>
          </motion.p>

          <motion.p
            {...reveal(0.42, 22)}
            className="text-muted-foreground text-[15px] sm:text-base max-w-2xl mx-auto lg:mx-0 mb-8 leading-[1.85]"
          >
            {t(siteData.headline, locale)}
          </motion.p>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center lg:justify-start gap-3 w-full sm:w-auto">
            <motion.button
              {...reveal(0.52, 18)}
              onClick={() => handleScroll("#projects")}
              className="group relative overflow-hidden min-h-11 px-6 py-3.5 bg-gradient-to-r from-primary to-accent hover:brightness-110 text-white rounded-xl font-medium text-sm transition-all duration-300 flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(45,140,110,0.18)] hover:shadow-[0_0_30px_rgba(45,140,110,0.28)] active:scale-95 min-w-[12rem]"
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
              {...reveal(0.60, 14)}
              onClick={() => handleScroll("#contact")}
              className="min-h-11 px-6 py-3.5 rounded-xl font-medium text-sm text-muted hover:text-primary bg-white/[0.03] hover:bg-white/[0.06] border border-white/[0.06] hover:border-primary/30 transition-all duration-300 flex items-center justify-center gap-2 active:scale-95"
            >
              <Mail size={14} />
              Falar comigo
            </motion.button>

            <motion.a
              {...reveal(0.68, 14)}
              href={siteData.resumeUrl}
              download="curriculo.pdf"
              className="min-h-11 px-6 py-3.5 rounded-xl font-medium text-sm text-muted hover:text-primary bg-white/[0.03] hover:bg-white/[0.06] border border-white/[0.06] hover:border-primary/30 transition-all duration-300 flex items-center justify-center gap-2 active:scale-95"
            >
              <Download size={14} />
              Baixar currículo
            </motion.a>
          </div>

          <motion.div
            {...reveal(0.64, 14)}
            className="mt-5 flex flex-wrap items-center justify-center lg:justify-start gap-x-4 gap-y-2 text-xs sm:text-[13px] text-muted"
          >
            <span className="inline-flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_14px_rgba(52,211,153,0.6)]" />
              {locale === "pt"
                ? "Disponível para Dev Java Júnior"
                : "Available for Junior Java Developer roles"}
            </span>
            <span className="inline-flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-primary/80 shadow-[0_0_14px_rgba(45,140,110,0.55)]" />
              Java · Spring Boot · Back-end
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
