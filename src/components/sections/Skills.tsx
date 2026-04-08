"use client";

import { siteData, t } from "@/data/site";
import SectionWrapper from "@/components/ui/SectionWrapper";
import SectionHeading from "@/components/ui/SectionHeading";
import { motion, useInView, useReducedMotion } from "framer-motion";
import {
  Monitor,
  Server,
  Database,
  Wrench,
  BookOpen,
  Code2,
  Braces,
  FileCode2,
  Palette,
  Triangle,
  Cpu,
  Globe,
  Blocks,
  Table2,
  Binary,
  GitBranch,
  FileSpreadsheet,
  Brain,
  Layers3,
} from "lucide-react";
import { useRef } from "react";

const categoryIconMap: Record<string, React.ReactNode> = {
  Monitor: <Monitor size={20} />,
  Server: <Server size={20} />,
  Database: <Database size={20} />,
  Wrench: <Wrench size={20} />,
  BookOpen: <BookOpen size={20} />,
};

const skillIconMap: Record<string, React.ReactNode> = {
  React: <Code2 size={15} />,
  TypeScript: <Braces size={15} />,
  JavaScript: <FileCode2 size={15} />,
  HTML: <Globe size={15} />,
  CSS: <Palette size={15} />,
  Vite: <Triangle size={15} />,
  "C#": <Code2 size={15} />,
  ".NET": <Cpu size={15} />,
  "APIs REST": <Server size={15} />,
  "SQL Server": <Database size={15} />,
  PostgreSQL: <Table2 size={15} />,
  "Git & GitHub": <GitBranch size={15} />,
  "Excel (Automação)": <FileSpreadsheet size={15} />,
  Python: <Binary size={15} />,
  "Inteligência Artificial": <Brain size={15} />,
  "Arquitetura de Software": <Layers3 size={15} />,
};

export default function Skills() {
  const { skills } = siteData;

  return (
    <section id="skills" className="py-24 sm:py-32 px-4 sm:px-6">
      <div className="max-w-5xl mx-auto">
        <SectionHeading
          title="Skills"
          subtitle="Tecnologias e ferramentas que utilizo para construir soluções completas."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {Object.values(skills).map((category, idx) => (
            <SectionWrapper key={t(category.title)} delay={0.08 * (idx + 1)}>
              <SkillCategoryCard category={category} index={idx} />
            </SectionWrapper>
          ))}
        </div>
      </div>
    </section>
  );
}

function SkillCategoryCard({
  category,
  index,
}: {
  category: (typeof siteData.skills)[keyof typeof siteData.skills];
  index: number;
}) {
  const reduceMotion = useReducedMotion();
  const ref = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(ref, { margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      whileHover={{ y: -2 }}
      transition={{ duration: 0.3 }}
      className="p-6 sm:p-7 rounded-2xl bg-white/[0.02] border border-white/[0.06] hover:border-primary/30 transition-all duration-300 h-full shadow-[0_18px_50px_rgba(0,0,0,0.18)]"
    >
      <div className="flex items-center gap-3 mb-6">
        <div className="p-2.5 rounded-xl bg-gradient-to-br from-primary/18 to-accent/14 text-primary shadow-[0_0_0_1px_rgba(138,130,255,0.12)]">
          {categoryIconMap[category.icon]}
        </div>
        <div>
          <h3 className="text-base font-semibold tracking-tight">{t(category.title)}</h3>
          <p className="text-xs text-muted-foreground mt-1">
            Bloco {String(index + 1).padStart(2, "0")}
          </p>
        </div>
      </div>

      <div className="space-y-5">
        {category.items.map((skill, i) => (
          <div key={skill.name}>
            <div className="flex items-center justify-between gap-3 mb-2">
              <div className="flex items-center gap-2.5 min-w-0">
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg border border-primary/15 bg-gradient-to-br from-primary/12 to-accent/10 text-primary">
                  {skillIconMap[skill.name] ?? <Code2 size={15} />}
                </span>
                <span className="text-sm font-medium text-foreground/85 truncate">
                  {skill.name}
                </span>
              </div>
              <span className="text-[11px] font-mono text-muted-foreground tabular-nums">
                {skill.level}%
              </span>
            </div>
            <div className="h-[6px] bg-white/[0.06] rounded-full overflow-hidden">
              <motion.div
                initial={reduceMotion ? false : { width: 0 }}
                animate={
                  reduceMotion
                    ? undefined
                    : isInView
                    ? { width: `${skill.level}%` }
                    : { width: 0 }
                }
                transition={{
                  duration: 0.8,
                  delay: 0.08 + i * 0.05,
                  ease: [0.25, 0.46, 0.45, 0.94],
                }}
                className="h-full rounded-full bg-gradient-to-r from-primary via-primary-light to-accent"
              />
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
}
