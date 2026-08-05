"use client";

import { siteData, t } from "@/data/site";
import { useLocale } from "@/context/LocaleContext";
import SectionWrapper from "@/components/ui/SectionWrapper";
import SectionHeading from "@/components/ui/SectionHeading";
import { Server, Brain, Zap, Layers, Users } from "lucide-react";

const interestIcons: Record<string, React.ReactNode> = {
  "Backend com Java": <Server size={16} />,
  "Backend with Java": <Server size={16} />,
  "Inteligência Artificial": <Brain size={16} />,
  "Artificial Intelligence": <Brain size={16} />,
  "Automação de Processos": <Zap size={16} />,
  "Process Automation": <Zap size={16} />,
  "Liderança & Gestão": <Users size={16} />,
  "Leadership & Management": <Users size={16} />,
  "Arquitetura de Software": <Layers size={16} />,
  "Software Architecture": <Layers size={16} />,
};

export default function About() {
  const { locale } = useLocale();
  const { about } = siteData;
  const paragraphs = about.paragraphs[locale];
  const interests = about.interests[locale];

  return (
    <section id="about" className="py-28 sm:py-32 px-6">
      <div className="max-w-3xl mx-auto">
        <SectionHeading title={t(about.title, locale)} />

        <div className="space-y-6">
          {paragraphs.map((paragraph, i) => (
            <SectionWrapper key={i} delay={0.08 * (i + 1)}>
              <p className="text-muted text-[15px] sm:text-base leading-[1.8]">
                {paragraph}
              </p>
            </SectionWrapper>
          ))}
        </div>

        <SectionWrapper delay={0.42}>
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5">
            {interests.map((interest) => (
              <div
                key={interest}
                className="group flex items-center gap-3 px-4 py-3.5 rounded-xl bg-white/[0.02] border border-white/[0.06] hover:border-primary/20 hover:bg-primary/[0.04] transition-all duration-300"
              >
                <span className="text-primary/60 group-hover:text-primary transition-colors">
                  {interestIcons[interest] ?? <Server size={16} />}
                </span>
                <span className="text-sm font-medium text-muted group-hover:text-foreground transition-colors">
                  {interest}
                </span>
              </div>
            ))}
          </div>
        </SectionWrapper>
      </div>
    </section>
  );
}
