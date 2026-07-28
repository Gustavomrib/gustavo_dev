"use client";

import { siteData, t } from "@/data/site";
import { useLocale } from "@/context/LocaleContext";
import SectionWrapper from "@/components/ui/SectionWrapper";
import SectionHeading from "@/components/ui/SectionHeading";

const HASHES = ["a3f91e2", "f7c204b", "2d8a1c9", "0e5b3a7", "b1c7d3e", "e4f2a8c"];

export default function Journey() {
  const { locale } = useLocale();
  const { journey } = siteData;

  const subtitle =
    locale === "pt"
      ? "Minha trajetória de evolução profissional e aprendizado contínuo."
      : "My professional growth trajectory and continuous learning journey.";

  return (
    <section id="journey" className="py-24 sm:py-32 px-4 sm:px-6">
      <div className="max-w-3xl mx-auto">
        <SectionHeading title="Jornada" subtitle={subtitle} />

        <p className="font-mono text-[12px] text-muted-foreground/45 mb-8 flex items-center gap-1.5 select-none">
          <span>$</span>
          <span>
            git log{" "}
            <span className="text-primary">career/main</span>
          </span>
        </p>

        <div className="relative">
          {/* Vertical commit graph line */}
          <div
            className="absolute top-4 bottom-4 w-px bg-gradient-to-b from-primary/30 via-primary/12 to-transparent"
            style={{ left: "19px" }}
            aria-hidden="true"
          />

          <div className="space-y-2">
            {journey.map((item, idx) => {
              const isWork = item.type === "work";
              const hash = HASHES[idx % HASHES.length];

              return (
                <SectionWrapper key={`${item.year}-${idx}`} delay={0.06 * (idx + 1)}>
                  <article className="relative flex gap-0">
                    {/* Commit dot column */}
                    <div className="w-10 flex-shrink-0 flex justify-center pt-[22px]">
                      <div
                        className={`relative z-10 w-2.5 h-2.5 rounded-full border-2 border-background ${
                          isWork
                            ? "bg-accent shadow-[0_0_8px_rgba(212,168,87,0.4)]"
                            : "bg-primary shadow-[0_0_8px_rgba(45,140,110,0.4)]"
                        }`}
                      />
                    </div>

                    {/* Content */}
                    <div className="flex-1 min-w-0 pt-2 pb-7 pl-2">
                      {/* Git meta row */}
                      <div className="flex flex-wrap items-center gap-2 mb-2.5">
                        <span className="font-mono text-[10px] text-muted-foreground/35 select-none">
                          {hash}
                        </span>
                        <span
                          className={`font-mono text-[10px] font-bold px-1.5 py-0.5 rounded ${
                            isWork
                              ? "bg-accent/[0.1] text-accent border border-accent/[0.18]"
                              : "bg-primary/[0.1] text-primary border border-primary/[0.18]"
                          }`}
                        >
                          {item.year}
                        </span>
                        <span className="font-mono text-[9px] text-muted-foreground/35 uppercase tracking-[0.1em] select-none">
                          {isWork ? "experience" : "education"}
                        </span>
                      </div>

                      {/* Card */}
                      <div className="rounded-xl border border-white/[0.04] bg-white/[0.015] px-4 py-4 transition-all duration-200 hover:border-primary/[0.18] hover:bg-white/[0.025]">
                        <h3 className="text-base font-semibold tracking-tight text-foreground mb-1">
                          {t(item.title, locale)}
                        </h3>
                        <p
                          className={`text-[13px] font-medium mb-2.5 ${
                            isWork ? "text-accent/80" : "text-primary/80"
                          }`}
                        >
                          {t(item.company, locale)}
                        </p>
                        <p className="text-muted text-[13px] leading-[1.8]">
                          {t(item.description, locale)}
                        </p>
                      </div>
                    </div>
                  </article>
                </SectionWrapper>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
