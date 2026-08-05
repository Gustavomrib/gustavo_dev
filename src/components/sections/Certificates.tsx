"use client";

import { siteData } from "@/data/site";
import SectionWrapper from "@/components/ui/SectionWrapper";
import SectionHeading from "@/components/ui/SectionHeading";
import { motion } from "framer-motion";
import { GraduationCap, ArrowUpRight, Award } from "lucide-react";

export default function Certificates() {
  const { certificates } = siteData;

  return (
    <section id="certificates" className="py-28 sm:py-32 px-4 sm:px-6">
      <div className="max-w-5xl mx-auto">
        <SectionHeading
          title="Certificados"
          subtitle="Formação complementar focada em base sólida e aprendizado prático."
        />

        <div
          className={`grid grid-cols-1 gap-5 ${
            certificates.length > 1 ? "md:grid-cols-2" : "md:max-w-md md:mx-auto"
          }`}
        >
          {certificates.map((cert, idx) => {
            const hasLink = Boolean(cert.url);
            const Wrapper = hasLink ? motion.a : motion.div;

            return (
              <SectionWrapper key={cert.id} delay={0.08 * (idx + 1)}>
                <Wrapper
                  {...(hasLink
                    ? { href: cert.url, target: "_blank", rel: "noopener noreferrer" }
                    : {})}
                  whileHover={{ y: -2 }}
                  transition={{ duration: 0.25, ease: "easeOut" }}
                  className="group block h-full rounded-2xl border border-white/[0.04] bg-white/[0.015] hover:border-primary/15 hover:bg-white/[0.025] transition-colors duration-300"
                >
                  <div className="p-6 sm:p-7 flex flex-col h-full">
                    <div className="flex items-start justify-between gap-4 mb-5">
                      <div className="flex items-center gap-3">
                        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/[0.06] border border-primary/[0.10] text-primary/70 group-hover:text-primary transition-colors duration-300">
                          <GraduationCap size={18} />
                        </div>
                        <div>
                          <p className="text-[11px] uppercase tracking-[0.16em] text-muted-foreground">
                            {cert.institution}
                          </p>
                          <p className="text-[11px] text-muted-foreground mt-0.5 tabular-nums">
                            {cert.date}
                          </p>
                        </div>
                      </div>
                      {hasLink && (
                        <div className="flex h-8 w-8 items-center justify-center rounded-lg border border-white/[0.06] text-muted-foreground group-hover:text-primary group-hover:border-primary/20 transition-all duration-300">
                          <ArrowUpRight size={14} />
                        </div>
                      )}
                    </div>

                    <h3 className="text-base font-semibold tracking-tight text-foreground/90 group-hover:text-foreground transition-colors duration-300 mb-3 leading-snug">
                      {cert.title}
                    </h3>

                    <p className="text-sm text-muted leading-[1.75] mb-6 flex-1">
                      {cert.description}
                    </p>

                    <div className="flex items-center gap-2 pt-4 border-t border-white/[0.04]">
                      <Award size={13} className="text-primary/50" />
                      <span className="text-[11px] font-medium text-muted-foreground tracking-wide">
                        Certificado de conclusão
                      </span>
                    </div>
                  </div>
                </Wrapper>
              </SectionWrapper>
            );
          })}
        </div>
      </div>
    </section>
  );
}
