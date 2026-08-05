"use client";

import { useState } from "react";
import { siteData, t, type Locale } from "@/data/site";
import { useLocale } from "@/context/LocaleContext";
import SectionWrapper from "@/components/ui/SectionWrapper";
import SectionHeading from "@/components/ui/SectionHeading";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { Folder, ArrowUpRight, Sparkles } from "lucide-react";
import { GithubIcon } from "@/components/ui/SocialIcons";

export default function Projects() {
  const { locale } = useLocale();
  const { projects, projectCategories } = siteData;
  const [activeFilter, setActiveFilter] = useState("all");
  const reduceMotion = useReducedMotion();

  const filtered =
    activeFilter === "all"
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  const featured = filtered.filter((p) => p.featured);
  const regular = filtered.filter((p) => !p.featured);

  const sectionTitle = locale === "pt" ? "Projetos" : "Projects";
  const sectionSubtitle =
    locale === "pt"
      ? "Projeto real com foco em autenticação moderna e gerenciamento de estado, pronto para demonstrar."
      : "Real-world project focused on modern authentication and state management, ready to showcase.";
  const statStack =
    locale === "pt"
      ? "Next.js, TypeScript, Firebase e Tailwind CSS"
      : "Next.js, TypeScript, Firebase and Tailwind CSS";
  const statDesc1 =
    locale === "pt"
      ? "projetos publicados e estudados a fundo"
      : "published projects, each studied in depth";
  const statDesc2 =
    locale === "pt"
      ? "cases com narrativa mais forte para recrutadores"
      : "featured cases with stronger narratives for recruiters";
  const emptyMsg =
    locale === "pt" ? "Nenhum projeto nesta categoria." : "No projects in this category.";

  return (
    <section id="projects" className="py-24 sm:py-32 px-4 sm:px-6 relative">
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-primary/[0.03] rounded-full blur-[120px]" />
      </div>

      <div className="relative max-w-5xl mx-auto">
        <SectionHeading title={sectionTitle} subtitle={sectionSubtitle} />

        <SectionWrapper delay={0.06}>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-10 sm:mb-12">
            <div className="rounded-2xl border border-white/[0.06] bg-white/[0.02] px-4 py-4">
              <p className="text-[11px] uppercase tracking-[0.18em] text-muted-foreground mb-2">
                Portfolio
              </p>
              <p className="text-2xl font-semibold tracking-tight">{projects.length}</p>
              <p className="text-sm text-muted mt-1">{statDesc1}</p>
            </div>
            <div className="rounded-2xl border border-white/[0.06] bg-white/[0.02] px-4 py-4">
              <p className="text-[11px] uppercase tracking-[0.18em] text-muted-foreground mb-2">
                {locale === "pt" ? "Destaques" : "Featured"}
              </p>
              <p className="text-2xl font-semibold tracking-tight">{featured.length}</p>
              <p className="text-sm text-muted mt-1">{statDesc2}</p>
            </div>
            <div className="rounded-2xl border border-white/[0.06] bg-white/[0.02] px-4 py-4">
              <p className="text-[11px] uppercase tracking-[0.18em] text-muted-foreground mb-2">
                Stack
              </p>
              <p className="text-2xl font-semibold tracking-tight">Frontend</p>
              <p className="text-sm text-muted mt-1">{statStack}</p>
            </div>
          </div>
        </SectionWrapper>

        <SectionWrapper delay={0.1}>
          <div className="flex flex-wrap sm:flex-wrap justify-start sm:justify-center gap-2 mb-10 sm:mb-14 overflow-x-auto sm:overflow-visible pb-1 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            {projectCategories.map((cat) => (
              <button
                key={cat.value}
                onClick={() => setActiveFilter(cat.value)}
                className={`relative shrink-0 min-h-11 px-4 py-2 rounded-lg text-[13px] font-medium transition-all duration-300 active:scale-95 ${
                  activeFilter === cat.value
                    ? "text-primary"
                    : "text-muted hover:text-primary"
                }`}
              >
                {t(cat.label, locale)}
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

        {featured.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">
            <AnimatePresence mode="popLayout">
              {featured.map((project, idx) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={reduceMotion ? false : { opacity: 0, y: 24 }}
                  animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10, scale: 0.95 }}
                  transition={{
                    duration: 0.45,
                    delay: idx * 0.06,
                    ease: [0.25, 0.46, 0.45, 0.94],
                  }}
                >
                  <ProjectCard project={project} featured locale={locale} />
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        )}

        {regular.length > 0 && (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <AnimatePresence mode="popLayout">
              {regular.map((project, idx) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={reduceMotion ? false : { opacity: 0, y: 20 }}
                  animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10, scale: 0.95 }}
                  transition={{
                    duration: 0.4,
                    delay: (featured.length + idx) * 0.05,
                    ease: [0.25, 0.46, 0.45, 0.94],
                  }}
                >
                  <ProjectCard project={project} locale={locale} />
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        )}

        {filtered.length === 0 && (
          <div className="text-center py-16">
            <Folder size={40} className="text-white/[0.06] mx-auto mb-4" />
            <p className="text-muted text-sm">{emptyMsg}</p>
          </div>
        )}
      </div>
    </section>
  );
}

interface ProjectCardProps {
  project: (typeof siteData.projects)[number];
  featured?: boolean;
  locale: Locale;
}

function ProjectCard({ project, featured = false, locale }: ProjectCardProps) {
  const title =
    typeof project.title === "string" ? project.title : t(project.title, locale);
  const hasDemo = Boolean(project.demo);

  const categoryLabel = project.category === "frontend" ? "Front-end" : "Full Stack";

  const demoLabel = locale === "pt" ? "Demo online" : "Live demo";
  const repoLabel = locale === "pt" ? "Repositório disponível" : "Repository available";
  const featuredLabel = locale === "pt" ? "Destaque" : "Featured";
  const codeLabel = locale === "pt" ? "Código" : "Code";
  const demoButtonLabel = locale === "pt" ? "Ver demo" : "View demo";

  return (
    <div
      className={`group rounded-2xl bg-white/[0.015] border border-white/[0.04] hover:border-primary/15 overflow-hidden transition-all duration-500 h-full flex flex-col hover:shadow-[0_0_30px_rgba(45,140,110,0.04)] ${
        featured ? "ring-1 ring-primary/[0.04]" : ""
      }`}
    >
      <div
        className={`relative bg-gradient-to-br from-surface via-surface to-primary/[0.02] ${
          featured ? "p-6 sm:p-7" : "p-5 sm:p-6"
        }`}
      >
        <div className="flex items-center justify-between gap-3 mb-4">
          <span className="text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
            {categoryLabel}
          </span>
          {hasDemo ? (
            <span className="inline-flex items-center gap-1.5 text-[11px] text-emerald-300">
              <Sparkles size={11} />
              {demoLabel}
            </span>
          ) : (
            <span className="text-[11px] text-muted-foreground">{repoLabel}</span>
          )}
        </div>

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
              <span className="px-2 py-0.5 bg-primary/[0.08] border border-primary/[0.12] text-primary text-[10px] font-semibold uppercase tracking-wider rounded-md">
                {featuredLabel}
              </span>
            )}
          </div>
        </div>

        <p
          className={`text-muted leading-[1.7] ${
            featured ? "text-[14px] sm:text-[15px]" : "text-[13px]"
          }`}
        >
          {t(project.description, locale)}
        </p>
      </div>

      <div className="mt-auto px-5 sm:px-6 pb-5 sm:pb-6 pt-0 flex flex-col gap-4">
        <div className="flex flex-wrap gap-1.5">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="px-2.5 py-0.5 bg-white/[0.03] text-muted-foreground text-[11px] font-medium rounded-md border border-white/[0.04]"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="flex flex-wrap items-center gap-3 pt-3.5 border-t border-white/[0.06]">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-11 items-center justify-center gap-1.5 rounded-lg border border-white/[0.06] px-3 py-2 text-[13px] text-muted hover:text-primary hover:border-primary/25 transition-colors duration-300 active:scale-95"
              aria-label={`${codeLabel} — ${title}`}
            >
              <GithubIcon size={14} />
              {codeLabel}
            </a>
          )}
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-11 items-center justify-center gap-1.5 rounded-lg bg-gradient-to-r from-primary to-accent px-3 py-2 text-[13px] text-white hover:brightness-105 transition-all duration-300 ml-auto active:scale-95"
              aria-label={`${demoButtonLabel} — ${title}`}
            >
              {demoButtonLabel}
              <ArrowUpRight size={13} />
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
