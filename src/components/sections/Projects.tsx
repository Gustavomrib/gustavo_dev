"use client";

import { siteData, t, type Locale } from "@/data/site";
import { useLocale } from "@/context/LocaleContext";
import SectionWrapper from "@/components/ui/SectionWrapper";
import SectionHeading from "@/components/ui/SectionHeading";
import { Folder, ArrowUpRight, Sparkles } from "lucide-react";
import { GithubIcon } from "@/components/ui/SocialIcons";

export default function Projects() {
  const { locale } = useLocale();
  const { projects } = siteData;

  const sectionTitle = locale === "pt" ? "Projetos" : "Projects";
  const sectionSubtitle =
    locale === "pt"
      ? "Projeto de estudo com autenticação e formulário de cadastro."
      : "Study project featuring authentication and a registration form.";

  return (
    <section id="projects" className="py-24 sm:py-32 px-4 sm:px-6 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-primary/[0.03] rounded-full blur-[120px]" />
      </div>

      <div className="relative max-w-xl mx-auto">
        <SectionHeading title={sectionTitle} subtitle={sectionSubtitle} />

        <div className="grid grid-cols-1 gap-5">
          {projects.map((project, idx) => (
            <SectionWrapper key={project.id} delay={0.08 * (idx + 1)}>
              <ProjectCard project={project} locale={locale} />
            </SectionWrapper>
          ))}
        </div>
      </div>
    </section>
  );
}

interface ProjectCardProps {
  project: (typeof siteData.projects)[number];
  locale: Locale;
}

function ProjectCard({ project, locale }: ProjectCardProps) {
  const title =
    typeof project.title === "string" ? project.title : t(project.title, locale);
  const hasDemo = Boolean(project.demo);

  const categoryLabel = project.category === "frontend" ? "Front-end" : "Full Stack";

  const demoLabel = locale === "pt" ? "Demo online" : "Live demo";
  const repoLabel = locale === "pt" ? "Repositório disponível" : "Repository available";
  const codeLabel = locale === "pt" ? "Código" : "Code";
  const demoButtonLabel = locale === "pt" ? "Ver demo" : "View demo";

  return (
    <div className="group rounded-2xl bg-white/[0.015] border border-white/[0.04] hover:border-primary/15 overflow-hidden transition-all duration-500 h-full flex flex-col hover:shadow-[0_0_30px_rgba(45,140,110,0.04)]">
      <div className="relative bg-gradient-to-br from-surface via-surface to-primary/[0.02] p-6 sm:p-7">
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

        <div className="flex items-center gap-2.5 mb-4">
          <div className="w-8 h-8 rounded-lg bg-primary/[0.08] border border-primary/[0.12] flex items-center justify-center">
            <Folder size={15} className="text-primary" />
          </div>
          <h3 className="text-lg font-semibold tracking-tight group-hover:text-primary transition-colors duration-300">
            {title}
          </h3>
        </div>

        <p className="text-muted leading-[1.7] text-[14px] sm:text-[15px]">
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
