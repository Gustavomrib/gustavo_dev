"use client";

import { siteData, t } from "@/data/site";
import { useLocale } from "@/context/LocaleContext";
import SectionWrapper from "@/components/ui/SectionWrapper";
import SectionHeading from "@/components/ui/SectionHeading";
import { Shield, ShieldAlert, Network, Lock, Terminal, KeyRound, Bug } from "lucide-react";

const toolIcons: Record<string, React.ReactNode> = {
  "Redes & Protocolos": <Network size={16} className="text-primary" />,
  "Segurança em Aplicações": <Lock size={16} className="text-primary" />,
  "Linux & Windows": <Terminal size={16} className="text-primary" />,
  "Criptografia & MFA": <KeyRound size={16} className="text-primary" />,
  "Pentest Básico": <Bug size={16} className="text-primary" />,
};

export default function Skills() {
  const { locale } = useLocale();
  const { skills } = siteData;

  const fundamentals = skills.primary[0] ?? null;
  const threats = skills.primary[1] ?? null;
  const square1 = skills.tools[0] ?? null;
  const square2 = skills.tools[1] ?? null;
  const rowTools = skills.tools.slice(2, 5);

  const subtitle =
    locale === "pt"
      ? "Fundamentos certificados em cibersegurança e uma trilha de estudos em andamento."
      : "Certified cybersecurity fundamentals and an ongoing study track.";
  const learningTrackLabel = locale === "pt" ? "Trilha em andamento (Alura)" : "Ongoing track (Alura)";
  const legacyLabel = locale === "pt" ? "Stack Anterior" : "Previous Stack";
  const legacyNote =
    locale === "pt"
      ? "Base técnica em desenvolvimento, foco atual em cibersegurança"
      : "Development background, current focus on cybersecurity";
  const softLabel = locale === "pt" ? "Competências" : "Competencies";

  return (
    <section id="skills" className="py-24 sm:py-32 px-4 sm:px-6">
      <div className="max-w-5xl mx-auto">
        <SectionHeading title="Skills" subtitle={subtitle} />

        <SectionWrapper delay={0.08}>
          <div className="space-y-3">
            {/* Row 1: Fundamentos (large) + Ameaças / Redes / App Security */}
            <div className="grid grid-cols-1 md:grid-cols-[5fr_7fr] gap-3">
              {/* Fundamentos de Cibersegurança — large featured card */}
              {fundamentals && (
                <div className="group rounded-2xl bg-primary/[0.06] border border-primary/[0.15] p-6 sm:p-7 transition-all duration-300 hover:border-primary/[0.28] hover:bg-primary/[0.09] hover:shadow-[0_0_40px_rgba(138,123,255,0.08)] flex flex-col justify-between min-h-[200px]">
                  <div>
                    <span className="text-[10px] font-bold tracking-[0.12em] uppercase text-accent/80 block mb-3">
                      {t(fundamentals.label, locale)}
                    </span>
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 rounded-xl bg-primary/[0.14] border border-primary/[0.18] flex items-center justify-center">
                        <Shield size={20} className="text-primary" />
                      </div>
                      <h3 className="text-xl font-bold tracking-tight">{fundamentals.name}</h3>
                    </div>
                    <p className="text-sm text-muted leading-relaxed">
                      {t(fundamentals.description, locale)}
                    </p>
                  </div>
                </div>
              )}

              {/* Ameaças Cibernéticas + Redes/App Security — nested */}
              <div className="grid gap-3" style={{ gridTemplateRows: "auto auto" }}>
                {/* Ameaças Cibernéticas */}
                {threats && (
                  <div className="group rounded-2xl bg-primary/[0.05] border border-primary/[0.12] p-5 sm:p-6 transition-all duration-300 hover:border-primary/[0.24] hover:bg-primary/[0.08]">
                    <span className="text-[10px] font-bold tracking-[0.12em] uppercase text-primary/70 block mb-3">
                      {t(threats.label, locale)}
                    </span>
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-9 h-9 rounded-xl bg-primary/[0.1] border border-primary/[0.14] flex items-center justify-center">
                        <ShieldAlert size={17} className="text-primary" />
                      </div>
                      <h3 className="text-base font-bold tracking-tight">{threats.name}</h3>
                    </div>
                    <p className="text-[13px] text-muted leading-relaxed">
                      {t(threats.description, locale)}
                    </p>
                  </div>
                )}

                {/* Redes & Protocolos / Segurança em Aplicações side by side */}
                <div className="grid grid-cols-2 gap-3">
                  {square1 && (
                    <div className="group rounded-2xl bg-white/[0.015] border border-white/[0.05] p-4 transition-all duration-300 hover:border-primary/[0.18] hover:bg-white/[0.03]">
                      <div className="flex items-center gap-2.5 mb-2">
                        <div className="w-8 h-8 rounded-lg bg-primary/[0.08] border border-primary/[0.1] flex items-center justify-center">
                          {toolIcons[square1.name]}
                        </div>
                        <h3 className="text-sm font-semibold truncate">{square1.name}</h3>
                      </div>
                      <span className="text-[10px] font-medium text-muted-foreground">
                        {t(square1.label, locale)}
                      </span>
                    </div>
                  )}

                  {square2 && (
                    <div className="group rounded-2xl bg-white/[0.015] border border-white/[0.05] p-4 transition-all duration-300 hover:border-primary/[0.18] hover:bg-white/[0.03]">
                      <div className="flex items-center gap-2.5 mb-2">
                        <div className="w-8 h-8 rounded-lg bg-primary/[0.08] border border-primary/[0.1] flex items-center justify-center">
                          {toolIcons[square2.name]}
                        </div>
                        <h3 className="text-sm font-semibold truncate">{square2.name}</h3>
                      </div>
                      <span className="text-[10px] font-medium text-muted-foreground">
                        {t(square2.label, locale)}
                      </span>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Row 2: Linux & Windows, Criptografia & MFA, Pentest Básico */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {rowTools.map((tool) => (
                <div
                  key={tool.name}
                  className="group rounded-2xl bg-white/[0.015] border border-white/[0.05] p-4 sm:p-5 transition-all duration-300 hover:border-primary/[0.18] hover:bg-white/[0.03] flex items-center gap-3"
                >
                  <div className="w-9 h-9 rounded-lg bg-primary/[0.08] border border-primary/[0.1] flex items-center justify-center flex-shrink-0">
                    {toolIcons[tool.name]}
                  </div>
                  <div className="min-w-0">
                    <h3 className="text-sm font-semibold truncate">{tool.name}</h3>
                    <span className="text-[10px] text-muted-foreground">
                      {t(tool.label, locale)}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* Row 3: Learning track — dimmed, still in progress */}
            <div className="rounded-2xl bg-white/[0.01] border border-white/[0.03] px-5 py-4 flex flex-col sm:flex-row sm:items-center gap-3">
              <span className="text-[10px] font-bold tracking-[0.1em] uppercase text-muted-foreground/60 flex-shrink-0">
                {learningTrackLabel}
              </span>
              <div className="flex flex-wrap gap-x-5 gap-y-1">
                {skills.learningTrack.map((topic) => (
                  <span key={topic} className="text-sm text-muted-foreground/40 font-medium">
                    {topic}
                  </span>
                ))}
              </div>
            </div>

            {/* Row 4: Legacy stack — dimmed */}
            <div className="rounded-2xl bg-white/[0.01] border border-white/[0.03] px-5 py-4 flex flex-col sm:flex-row sm:items-center gap-3">
              <span className="text-[10px] font-bold tracking-[0.1em] uppercase text-muted-foreground/60 flex-shrink-0">
                {legacyLabel}
              </span>
              <div className="flex flex-wrap gap-x-5 gap-y-1">
                {skills.legacy.map((tech) => (
                  <span key={tech} className="text-sm text-muted-foreground/40 font-medium">
                    {tech}
                  </span>
                ))}
              </div>
              <span className="hidden sm:block text-[11px] text-muted-foreground/30 italic ml-auto flex-shrink-0">
                {legacyNote}
              </span>
            </div>

            {/* Row 4: Soft skills */}
            <div className="rounded-2xl bg-white/[0.015] border border-white/[0.05] px-5 py-4">
              <span className="text-[10px] font-bold tracking-[0.1em] uppercase text-muted-foreground block mb-3">
                {softLabel}
              </span>
              <div className="flex flex-wrap gap-2">
                {skills.soft.map((s) => (
                  <span
                    key={s.pt}
                    className="inline-flex items-center px-3 py-1.5 rounded-full bg-primary/[0.07] border border-primary/[0.12] text-[12px] font-medium text-primary/75 transition-all duration-300 hover:bg-primary/[0.12] hover:text-primary/90"
                  >
                    {t(s, locale)}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </SectionWrapper>
      </div>
    </section>
  );
}
