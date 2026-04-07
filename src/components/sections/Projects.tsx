"use client";

import { useState } from "react";
import { siteData, t } from "@/data/site";
import SectionWrapper from "@/components/ui/SectionWrapper";
import SectionHeading from "@/components/ui/SectionHeading";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Folder, ArrowUpRight, Users } from "lucide-react";
import { GithubIcon } from "@/components/ui/SocialIcons";

export default function Projects() {
  const { projects, projectCategories } = siteData;
  const [activeFilter, setActiveFilter] = useState("all");

  const filtered =
    activeFilter === "all"
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  // Separate featured vs regular
  const featured = filtered.filter((p) => p.featured);
  const regular = filtered.filter((p) => !p.featured);

  return (
    <section id="projects" className="py-28 sm:py-32 px-6 relative">
      {/* Subtle background */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-primary/[0.03] rounded-full blur-[120px]" />
      </div>

      <div className="relative max-w-5xl mx-auto">
        <SectionHeading
          title="Projetos"
          subtitle="Projetos reais que construí — de autenticação e IA até colaborações Full Stack."
        />

        {/* Filters */}
        <SectionWrapper delay={0.1}>
          <div className="flex flex-wrap justify-center gap-2 mb-14">
            {projectCategories.map((cat) => (
              <button
                key={cat.value}
                onClick={() => setActiveFilter(cat.value)}
                className={`relative px-4 py-2 rounded-lg text-[13px] font-medium transition-all duration-300 ${
                  activeFilter === cat.value
                    ? "text-primary"
                    : "text-muted hover:text-foreground"
                }`}
              >
                {t(cat.label)}
                {activeFilter === cat.value && (
                  <motion.div
                    layoutId="projectFilter"
                    className="absolute inset-0 bg-primary/[0.08] border border-primary/[0.12] rounded-lg"
                    transition={{ type: "spring", stiffness: 350, damping: 30 }}
                  />
                )}
              </button>
            ))}
          </div>
        </SectionWrapper>

        {/* Featured Projects — larger cards */}
        {featured.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">
            <AnimatePresence mode="popLayout">
              {featured.map((project, idx) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10, scale: 0.95 }}
                  transition={{
                    duration: 0.45,
                    delay: idx * 0.06,
                    ease: [0.25, 0.46, 0.45, 0.94],
                  }}
                >
                  <ProjectCard project={project} featured />
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        )}

        {/* Regular Projects — smaller grid */}
        {regular.length > 0 && (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <AnimatePresence mode="popLayout">
              {regular.map((project, idx) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10, scale: 0.95 }}
                  transition={{
                    duration: 0.4,
                    delay: (featured.length + idx) * 0.05,
                    ease: [0.25, 0.46, 0.45, 0.94],
                  }}
                >
                  <ProjectCard project={project} />
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        )}

        {/* Empty state */}
        {filtered.length === 0 && (
          <div className="text-center py-16">
            <Folder size={40} className="text-white/[0.06] mx-auto mb-4" />
            <p className="text-muted text-sm">Nenhum projeto nesta categoria.</p>
          </div>
        )}
      </div>
    </section>
  );
}

/* ── Project Card ── */
interface ProjectCardProps {
  project: (typeof siteData.projects)[number];
  featured?: boolean;
}

function ProjectCard({ project, featured = false }: ProjectCardProps) {
  const title =
    typeof project.title === "string" ? project.title : t(project.title);
  const isCollaborative = "collaborative" in project && project.collaborative;

  return (
    <div
      className={`group rounded-2xl bg-white/[0.02] border border-white/[0.06] hover:border-primary/20 overflow-hidden transition-all duration-500 h-full flex flex-col hover:shadow-[0_0_40px_rgba(124,127,255,0.06)] ${
        featured ? "ring-1 ring-primary/[0.06]" : ""
      }`}
    >
      {/* Header area */}
      <div className={`relative bg-gradient-to-br from-surface via-surface to-primary/[0.03] ${featured ? "p-6 sm:p-7" : "p-5 sm:p-6"}`}>
        <div className="flex items-start justify-between gap-3 mb-4">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-primary/[0.08] border border-primary/[0.12] flex items-center justify-center">
              <Folder size={15} className="text-primary" />
            </div>
            <h3
              className={`font-semibold tracking-tight group-hover:text-primary transition-colors duration-300 ${
                featured ? "text-lg" : "text-base"
              }`}
            >
              {title}
            </h3>
          </div>
          <div className="flex items-center gap-1.5 flex-shrink-0">
            {featured && (
              <span className="px-2 py-0.5 bg-primary/[0.1] border border-primary/[0.15] text-primary text-[10px] font-semibold uppercase tracking-wider rounded-md">
                Destaque
              </span>
            )}
            {isCollaborative && (
              <span className="px-2 py-0.5 bg-accent/[0.1] border border-accent/[0.15] text-accent text-[10px] font-semibold uppercase tracking-wider rounded-md flex items-center gap-1">
                <Users size={10} />
                Collab
              </span>
            )}
          </div>
        </div>

        <p
          className={`text-muted leading-[1.7] ${
            featured ? "text-[14px] sm:text-[15px]" : "text-[13px]"
          }`}
        >
          {t(project.description)}
        </p>
      </div>

      {/* Footer */}
      <div className="mt-auto px-5 sm:px-6 pb-5 sm:pb-6 pt-0 flex flex-col gap-4">
        {/* Tags */}
        <div className="flex flex-wrap gap-1.5">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="px-2.5 py-0.5 bg-white/[0.04] text-muted-foreground text-[11px] font-medium rounded-md border border-white/[0.06]"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="flex items-center gap-4 pt-3.5 border-t border-white/[0.06]">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-[13px] text-muted hover:text-foreground transition-colors duration-300"
              aria-label={`Código do projeto ${title} no GitHub`}
            >
              <GithubIcon size={14} />
              Código
            </a>
          )}
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-[13px] text-primary hover:text-primary-light transition-colors duration-300 ml-auto"
              aria-label={`Demo do projeto ${title}`}
            >
              Demo
              <ArrowUpRight size={13} />
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
