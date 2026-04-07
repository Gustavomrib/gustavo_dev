"use client";

import { siteData, t } from "@/data/site";
import SectionWrapper from "@/components/ui/SectionWrapper";
import SectionHeading from "@/components/ui/SectionHeading";
import { Briefcase, GraduationCap } from "lucide-react";

export default function Journey() {
  const { journey } = siteData;

  return (
    <section id="journey" className="py-28 sm:py-32 px-6">
      <div className="max-w-3xl mx-auto">
        <SectionHeading
          title="Jornada"
          subtitle="Minha trajetória de evolução profissional e aprendizado contínuo."
        />

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-[19px] md:left-1/2 md:-translate-x-px top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-white/[0.08] to-transparent" />

          {journey.map((item, idx) => {
            const isLeft = idx % 2 === 0;
            return (
              <SectionWrapper key={idx} delay={0.08 * (idx + 1)}>
                <div
                  className={`relative flex items-start mb-14 last:mb-0 ${
                    isLeft ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  {/* Content */}
                  <div
                    className={`ml-14 md:ml-0 md:w-[calc(50%-2rem)] ${
                      isLeft ? "md:pr-8 md:text-right" : "md:pl-8 md:text-left"
                    }`}
                  >
                    <span className="inline-block px-2.5 py-1 bg-primary/[0.08] text-primary text-[11px] font-mono font-medium rounded-lg mb-3 border border-primary/[0.12]">
                      {item.year}
                    </span>
                    <h3 className="text-base font-semibold tracking-tight mb-1">
                      {t(item.title)}
                    </h3>
                    <p className="text-primary/60 text-[13px] font-medium mb-2">
                      {t(item.company)}
                    </p>
                    <p className="text-muted text-[13px] leading-[1.7]">
                      {t(item.description)}
                    </p>
                  </div>

                  {/* Icon */}
                  <div className="absolute left-0 md:left-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-surface-elevated border border-white/[0.1] flex items-center justify-center z-10 shadow-[0_2px_16px_rgba(0,0,0,0.35)]">
                    {item.type === "work" ? (
                      <Briefcase size={15} className="text-primary" />
                    ) : (
                      <GraduationCap size={15} className="text-primary/70" />
                    )}
                  </div>

                  {/* Spacer */}
                  <div className="hidden md:block md:w-[calc(50%-2rem)]" />
                </div>
              </SectionWrapper>
            );
          })}
        </div>
      </div>
    </section>
  );
}
