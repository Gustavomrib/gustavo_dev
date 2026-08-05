"use client";

import { useState } from "react";
import { siteData } from "@/data/site";
import { useLocale } from "@/context/LocaleContext";
import SectionWrapper from "@/components/ui/SectionWrapper";
import SectionHeading from "@/components/ui/SectionHeading";
import { motion } from "framer-motion";
import { Mail, ArrowRight, CheckCircle, AlertCircle, Loader2, Download } from "lucide-react";
import {
  GithubIcon,
  LinkedinIcon,
  WhatsappIcon,
} from "@/components/ui/SocialIcons";

export default function Contact() {
  const { locale } = useLocale();
  const { socials, name, resumeUrl } = siteData;
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">(
    "idle"
  );

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Falha ao enviar a mensagem.");
      }

      setStatus("sent");
      setFormData({ name: "", email: "", message: "" });
      setTimeout(() => setStatus("idle"), 4000);
    } catch {
      setStatus("error");
      setTimeout(() => setStatus("idle"), 4000);
    }
  };

  const socialLinks = [
    { icon: <GithubIcon size={18} />, href: socials.github, label: "GitHub" },
    { icon: <LinkedinIcon size={18} />, href: socials.linkedin, label: "LinkedIn" },
    { icon: <WhatsappIcon size={18} />, href: socials.whatsapp, label: "WhatsApp" },
  ];

  const inputClasses =
    "w-full px-4 py-3.5 bg-white/[0.015] border border-white/[0.04] rounded-xl text-foreground placeholder:text-muted-foreground/40 transition-all duration-300 focus:outline-none focus:border-primary/30 focus:bg-white/[0.03] focus:ring-1 focus:ring-primary/15 text-sm";

  return (
    <section id="contact" className="py-24 sm:py-32 px-4 sm:px-6 relative">
        <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[500px] h-[320px] bg-primary/[0.03] rounded-full blur-[100px]" />
      </div>

      <div className="relative max-w-4xl mx-auto">
        <SectionHeading
          title={locale === "pt" ? "Contato" : "Contact"}
          subtitle={
            locale === "pt"
              ? "Tem uma vaga aberta, um projeto ou quer conversar sobre tecnologia? Ficarei feliz em responder."
              : "Have an open position, a project, or want to talk tech? I'll be happy to reply."
          }
        />

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-14">
          <SectionWrapper delay={0.1} className="lg:col-span-3">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-[13px] font-medium mb-2 text-muted"
                >
                  {locale === "pt" ? "Nome" : "Name"}
                </label>
                <input
                  type="text"
                  id="name"
                  required
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  className={inputClasses}
                  placeholder={locale === "pt" ? "Seu nome" : "Your name"}
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-[13px] font-medium mb-2 text-muted"
                >
                  E-mail
                </label>
                <input
                  type="email"
                  id="email"
                  required
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className={inputClasses}
                  placeholder="seu@email.com"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-[13px] font-medium mb-2 text-muted"
                >
                  {locale === "pt" ? "Mensagem" : "Message"}
                </label>
                <textarea
                  id="message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  className={`${inputClasses} resize-none`}
                  placeholder={
                    locale === "pt"
                      ? "Conte-me sobre seu projeto ou ideia..."
                      : "Tell me about your project or idea..."
                  }
                />
              </div>

              <motion.button
                type="submit"
                disabled={status === "sending"}
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.99 }}
                className={`w-full min-h-11 px-6 py-3.5 rounded-xl font-medium text-sm transition-all duration-300 flex items-center justify-center gap-2 disabled:cursor-not-allowed ${
                  status === "sent"
                    ? "bg-emerald-500/10 text-emerald-400 border border-emerald-500/20"
                    : status === "error"
                    ? "bg-red-500/10 text-red-400 border border-red-500/20"
                    : "bg-gradient-to-r from-primary to-accent hover:brightness-110 text-white shadow-[0_0_24px_rgba(124,127,255,0.18)] hover:shadow-[0_0_32px_rgba(124,127,255,0.28)] active:scale-95"
                }`}
              >
                {status === "sending" ? (
                  <>
                    <Loader2 size={15} className="animate-spin" />
                    {locale === "pt" ? "Enviando..." : "Sending..."}
                  </>
                ) : status === "sent" ? (
                  <>
                    <CheckCircle size={15} />
                    {locale === "pt" ? "Mensagem enviada com sucesso!" : "Message sent successfully!"}
                  </>
                ) : status === "error" ? (
                  <>
                    <AlertCircle size={15} />
                    {locale === "pt" ? "Erro ao enviar. Tente novamente." : "Error sending. Please try again."}
                  </>
                ) : (
                  <>
                    {locale === "pt" ? "Enviar mensagem" : "Send message"}
                    <ArrowRight size={15} />
                  </>
                )}
              </motion.button>
            </form>
          </SectionWrapper>

          <SectionWrapper delay={0.2} className="lg:col-span-2">
            <div className="space-y-8">
              <div className="rounded-2xl border border-primary/15 bg-primary/[0.05] p-5">
                <p className="text-[11px] uppercase tracking-[0.18em] text-primary/80 mb-2">
                  {locale === "pt" ? "Melhor caminho" : "Best way"}
                </p>
                <h3 className="text-lg font-semibold tracking-tight mb-2">
                  {locale === "pt" ? "Vamos conversar" : "Let's talk"}
                </h3>
                <p className="text-sm text-muted leading-relaxed">
                  {locale === "pt"
                    ? "Estou em busca da primeira oportunidade como Dev Java Júnior, com foco em Portugal. Me envie um e-mail ou WhatsApp que retorno o quanto antes."
                    : "I'm looking for my first opportunity as a Junior Java Developer, with a focus on Portugal. Send me an email or WhatsApp and I'll reply as soon as possible."}
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold tracking-tight mb-3">
                  {locale === "pt" ? "Vamos trabalhar juntos" : "Let's work together"}
                </h3>
                <p className="text-muted text-sm leading-relaxed">
                  {locale === "pt"
                    ? "Aberto a vagas de Dev Java Júnior e estágios em backend. Disponível para relocation em Portugal."
                    : "Open to Junior Java Developer roles and backend internships. Available for relocation to Portugal."}
                </p>
              </div>

              <a
                href={`mailto:${socials.email}`}
                className="group flex items-center gap-4 p-4 rounded-xl bg-white/[0.02] border border-white/[0.06] hover:border-primary/20 transition-all duration-300"
              >
                <div className="p-2.5 rounded-lg bg-primary/[0.08] text-primary group-hover:bg-primary/[0.12] transition-colors">
                  <Mail size={18} />
                </div>
                <div>
                  <p className="text-[11px] uppercase tracking-wider text-muted-foreground mb-0.5">
                    E-mail
                  </p>
                  <p className="text-sm font-medium group-hover:text-primary transition-colors">
                    {socials.email}
                  </p>
                </div>
              </a>

              <div>
                <p className="text-[11px] uppercase tracking-wider text-muted-foreground mb-3">
                  {locale === "pt" ? "Currículo" : "Résumé"}
                </p>
                <div className="space-y-2">
                  <a
                    href={resumeUrl}
                    download
                    className="flex items-center gap-2.5 px-4 py-3 rounded-xl bg-primary/[0.06] border border-primary/[0.15] hover:border-primary/[0.3] hover:bg-primary/[0.1] text-sm font-medium text-primary/80 hover:text-primary transition-all duration-300"
                  >
                    <Download size={14} />
                    <span>🇧🇷</span>
                    {locale === "pt" ? "Download CV em Português" : "Download CV in Portuguese"}
                  </a>
                </div>
              </div>

              <div>
                <p className="text-[11px] uppercase tracking-wider text-muted-foreground mb-3">
                  {locale === "pt" ? "Redes sociais" : "Social media"}
                </p>
                <div className="flex gap-2.5">
                  {socialLinks.map((social) => (
                    <motion.a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ y: -2 }}
                      transition={{ duration: 0.2 }}
                      className="p-3 rounded-xl bg-white/[0.03] border border-white/[0.06] hover:border-primary/20 text-muted hover:text-primary transition-all duration-300"
                      aria-label={`Perfil de ${name} no ${social.label}`}
                    >
                      {social.icon}
                    </motion.a>
                  ))}
                </div>
              </div>

              <a
                href={socials.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-full min-h-11 items-center justify-center gap-2 rounded-xl border border-white/[0.08] bg-white/[0.03] px-4 py-3.5 text-sm font-medium text-foreground transition-all duration-300 hover:border-primary/30 hover:text-primary active:scale-95"
              >
                {locale === "pt" ? "Conversar no WhatsApp" : "Chat on WhatsApp"}
                <ArrowRight size={15} />
              </a>
            </div>
          </SectionWrapper>
        </div>
      </div>
    </section>
  );
}
