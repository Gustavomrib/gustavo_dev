"use client";

import { siteData, t } from "@/data/site";
import { useLocale } from "@/context/LocaleContext";
import SectionWrapper from "@/components/ui/SectionWrapper";
import SectionHeading from "@/components/ui/SectionHeading";

export default function Skills() {
  const { locale } = useLocale();
  const { skills } = siteData;

  const focusItems = skills.focus[locale];
  const previousItems = skills.previous[locale];
  const softLabel = locale === "pt" ? "Competências" : "Competencies";

  return (
    <section id="skills" className="py-24 sm:py-32 px-4 sm:px-6">
      <div className="max-w-3xl mx-auto">
        <SectionHeading title={t(skills.title, locale)} subtitle={t(skills.description, locale)} />

        <SectionWrapper delay={0.08}>
          <div className="space-y-3">
            <div className="rounded-2xl bg-primary/[0.05] border border-primary/[0.12] px-5 py-5 sm:px-6 sm:py-6">
              <div className="flex flex-wrap gap-2.5">
                {focusItems.map((item) => (
                  <span
                    key={item}
                    className="inline-flex items-center px-3.5 py-2 rounded-full bg-primary/[0.08] border border-primary/[0.18] text-sm font-medium text-primary/90"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>

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

            <div className="rounded-2xl bg-white/[0.01] border border-white/[0.03] px-5 py-4 flex flex-col sm:flex-row sm:items-center gap-3">
              <span className="text-[10px] font-bold tracking-[0.1em] uppercase text-muted-foreground/60 flex-shrink-0">
                {t(skills.previousLabel, locale)}
              </span>
              <div className="flex flex-wrap gap-x-5 gap-y-1">
                {previousItems.map((tech) => (
                  <span key={tech} className="text-sm text-muted-foreground/40 font-medium">
                    {tech}
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
