"use client";

import { siteData, t } from "@/data/site";
import SectionWrapper from "@/components/ui/SectionWrapper";
import SectionHeading from "@/components/ui/SectionHeading";
import { Code, Brain, Zap, Layers, BookOpen } from "lucide-react";

const interestIcons: Record<string, React.ReactNode> = {
  "Desenvolvimento Full Stack": <Code size={16} />,
  "Full Stack Development": <Code size={16} />,
  "Inteligência Artificial": <Brain size={16} />,
  "Artificial Intelligence": <Brain size={16} />,
  "Automação de Processos": <Zap size={16} />,
  "Process Automation": <Zap size={16} />,
  "Arquitetura de Software": <Layers size={16} />,
  "Software Architecture": <Layers size={16} />,
  "Aprendizado Contínuo": <BookOpen size={16} />,
  "Continuous Learning": <BookOpen size={16} />,
};

export default function About() {
  const { about } = siteData;
  const paragraphs = about.paragraphs.pt;
  const interests = about.interests.pt;

  return (
    <section id="about" className="py-28 sm:py-32 px-6">
      <div className="max-w-3xl mx-auto">
        <SectionHeading title={t(about.title)} />

        <div className="space-y-6">
          {paragraphs.map((paragraph, i) => (
            <SectionWrapper key={i} delay={0.08 * (i + 1)}>
              <p className="text-muted text-[15px] sm:text-base leading-[1.8]">
                {paragraph}
              </p>
            </SectionWrapper>
          ))}
        </div>

        <SectionWrapper delay={0.35}>
          <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5">
            {interests.map((interest) => (
              <div
                key={interest}
                className="group flex items-center gap-3 px-4 py-3.5 rounded-xl bg-white/[0.02] border border-white/[0.06] hover:border-primary/20 hover:bg-primary/[0.04] transition-all duration-300"
              >
                <span className="text-primary/60 group-hover:text-primary transition-colors">
                  {interestIcons[interest] || <Code size={16} />}
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
