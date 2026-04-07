"use client";

import { siteData, t } from "@/data/site";
import SectionWrapper from "@/components/ui/SectionWrapper";
import SectionHeading from "@/components/ui/SectionHeading";
import { motion } from "framer-motion";
import { Monitor, Server, Database, Wrench, BookOpen } from "lucide-react";

const iconMap: Record<string, React.ReactNode> = {
  Monitor: <Monitor size={20} />,
  Server: <Server size={20} />,
  Database: <Database size={20} />,
  Wrench: <Wrench size={20} />,
  BookOpen: <BookOpen size={20} />,
};

export default function Skills() {
  const { skills } = siteData;

  return (
    <section id="skills" className="py-28 sm:py-32 px-6">
      <div className="max-w-5xl mx-auto">
        <SectionHeading
          title="Skills"
          subtitle="Tecnologias e ferramentas que utilizo para construir soluções completas."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {Object.values(skills).map((category, idx) => (
            <SectionWrapper key={t(category.title)} delay={0.08 * (idx + 1)}>
              <motion.div
                whileHover={{ y: -2 }}
                transition={{ duration: 0.3 }}
                className="p-6 sm:p-7 rounded-2xl bg-white/[0.02] border border-white/[0.06] hover:border-primary/20 transition-all duration-500 h-full"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2.5 rounded-xl bg-primary/[0.08] text-primary/80">
                    {iconMap[category.icon]}
                  </div>
                  <h3 className="text-base font-semibold tracking-tight">
                    {t(category.title)}
                  </h3>
                </div>

                <div className="space-y-5">
                  {category.items.map((skill, i) => (
                    <div key={skill.name}>
                      <div className="flex justify-between mb-2">
                        <span className="text-sm font-medium text-foreground/80">
                          {skill.name}
                        </span>
                        <span className="text-[11px] font-mono text-muted-foreground tabular-nums">
                          {skill.level}%
                        </span>
                      </div>
                      <div className="h-[5px] bg-white/[0.06] rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{
                            duration: 0.8,
                            delay: 0.1 + i * 0.06,
                            ease: [0.25, 0.46, 0.45, 0.94],
                          }}
                          className="h-full bg-gradient-to-r from-primary/90 to-primary rounded-full"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            </SectionWrapper>
          ))}
        </div>
      </div>
    </section>
  );
}
