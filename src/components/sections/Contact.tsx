"use client";

import { useState } from "react";
import { siteData } from "@/data/site";
import SectionWrapper from "@/components/ui/SectionWrapper";
import SectionHeading from "@/components/ui/SectionHeading";
import { motion } from "framer-motion";
import { Mail, ArrowRight, CheckCircle, AlertCircle, Loader2 } from "lucide-react";
import {
  GithubIcon,
  LinkedinIcon,
  WhatsappIcon,
} from "@/components/ui/SocialIcons";

export default function Contact() {
  const { socials, name } = siteData;
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
      await new Promise((resolve) => setTimeout(resolve, 1500));
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
    "w-full px-4 py-3.5 bg-white/[0.02] border border-white/[0.06] rounded-xl text-foreground placeholder:text-muted-foreground/40 transition-all duration-300 focus:outline-none focus:border-primary/40 focus:bg-white/[0.04] focus:ring-1 focus:ring-primary/20 text-sm";

  return (
    <section id="contact" className="py-24 sm:py-32 px-4 sm:px-6 relative">
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-primary/[0.04] rounded-full blur-[120px]" />
      </div>

      <div className="relative max-w-4xl mx-auto">
        <SectionHeading
          title="Contato"
          subtitle="Tem um projeto em mente, uma vaga aberta ou quer conversar sobre colaboracao? Ficarei feliz em responder."
        />

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-14">
          <SectionWrapper delay={0.1} className="lg:col-span-3">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-[13px] font-medium mb-2 text-muted"
                >
                  Nome
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
                  placeholder="Seu nome"
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
                  Mensagem
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
                  placeholder="Conte-me sobre seu projeto ou ideia..."
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
                    Enviando...
                  </>
                ) : status === "sent" ? (
                  <>
                    <CheckCircle size={15} />
                    Mensagem enviada com sucesso!
                  </>
                ) : status === "error" ? (
                  <>
                    <AlertCircle size={15} />
                    Erro ao enviar. Tente novamente.
                  </>
                ) : (
                  <>
                    Enviar mensagem
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
                  Melhor caminho
                </p>
                <h3 className="text-lg font-semibold tracking-tight mb-2">
                  Vamos acelerar essa conversa
                </h3>
                <p className="text-sm text-muted leading-relaxed">
                  Para oportunidades, freelas e parcerias, voce pode falar comigo
                  por e-mail ou WhatsApp e eu retorno o quanto antes.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold tracking-tight mb-3">
                  Vamos trabalhar juntos
                </h3>
                <p className="text-muted text-sm leading-relaxed">
                  Disponivel para projetos freelance, oportunidades de trabalho e
                  colaboracoes.
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
                  Redes sociais
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
                Conversar no WhatsApp
                <ArrowRight size={15} />
              </a>
            </div>
          </SectionWrapper>
        </div>
      </div>
    </section>
  );
}
