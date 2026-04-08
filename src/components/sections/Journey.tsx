"use client";

import { siteData, t } from "@/data/site";
import SectionWrapper from "@/components/ui/SectionWrapper";
import SectionHeading from "@/components/ui/SectionHeading";
import { Briefcase, GraduationCap } from "lucide-react";

export default function Journey() {
  const { journey } = siteData;

  return (
    <section id="journey" className="py-24 sm:py-32 px-4 sm:px-6">
      <div className="max-w-4xl mx-auto">
        <SectionHeading
          title="Jornada"
          subtitle="Minha trajetória de evolução profissional e aprendizado contínuo."
        />

        <div className="relative">
          <div className="absolute left-4 sm:left-5 md:left-1/2 md:-translate-x-px top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-primary/25 to-transparent" />

          {journey.map((item, idx) => {
            const isDesktopLeft = idx % 2 === 0;

            return (
              <SectionWrapper key={`${item.year}-${idx}`} delay={0.06 * (idx + 1)}>
                <article
                  className={`relative mb-8 sm:mb-10 md:mb-14 flex items-start ${
                    isDesktopLeft ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  <div className="absolute left-0 sm:left-1 md:left-1/2 md:-translate-x-1/2 top-5 flex h-8 w-8 sm:h-10 sm:w-10 items-center justify-center rounded-full border border-primary/20 bg-gradient-to-br from-primary/18 to-accent/10 shadow-[0_10px_30px_rgba(0,0,0,0.24)]">
                    {item.type === "work" ? (
                      <Briefcase size={14} className="text-primary" />
                    ) : (
                      <GraduationCap size={14} className="text-accent" />
                    )}
                  </div>

                  <div
                    className={`ml-12 sm:ml-16 w-full md:ml-0 md:w-[calc(50%-2.5rem)] ${
                      isDesktopLeft ? "md:pr-10 md:text-right" : "md:pl-10 md:text-left"
                    }`}
                  >
                    <div className="rounded-2xl border border-white/[0.06] bg-white/[0.02] px-4 py-4 sm:px-5 sm:py-5 transition-all duration-300 hover:border-primary/30">
                      <span className="inline-flex min-h-8 items-center rounded-lg border border-primary/16 bg-gradient-to-r from-primary/10 to-accent/10 px-2.5 py-1 text-[11px] font-mono font-medium text-primary mb-3">
                        {item.year}
                      </span>
                      <h3 className="text-base sm:text-lg font-semibold tracking-tight mb-1.5">
                        {t(item.title)}
                      </h3>
                      <p className="text-accent/80 text-[13px] font-medium mb-2.5">
                        {t(item.company)}
                      </p>
                      <p className="text-muted text-[14px] leading-[1.8]">
                        {t(item.description)}
                      </p>
                    </div>
                  </div>

                  <div className="hidden md:block md:w-[calc(50%-2.5rem)]" />
                </article>
              </SectionWrapper>
            );
          })}
        </div>
      </div>
    </section>
  );
}
