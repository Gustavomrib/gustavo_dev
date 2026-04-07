"use client";

import { useState } from "react";
import { siteData } from "@/data/site";
import SectionWrapper from "@/components/ui/SectionWrapper";
import SectionHeading from "@/components/ui/SectionHeading";
import { motion } from "framer-motion";
import { Send, Mail, ArrowRight, CheckCircle, AlertCircle, Loader2 } from "lucide-react";
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
    <section id="contact" className="py-28 sm:py-32 px-6 relative">
      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-primary/[0.04] rounded-full blur-[120px]" />
      </div>

      <div className="relative max-w-4xl mx-auto">
        <SectionHeading
          title="Contato"
          subtitle="Tem um projeto em mente ou quer conversar sobre oportunidades? Ficarei feliz em ouvir de você."
        />

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-14">
          {/* Form */}
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
                className={`w-full px-6 py-3.5 rounded-xl font-medium text-sm transition-all duration-300 flex items-center justify-center gap-2 disabled:cursor-not-allowed ${
                  status === "sent"
                    ? "bg-emerald-500/10 text-emerald-400 border border-emerald-500/20"
                    : status === "error"
                    ? "bg-red-500/10 text-red-400 border border-red-500/20"
                    : "bg-primary hover:bg-primary-light text-white shadow-[0_0_24px_rgba(124,127,255,0.18)] hover:shadow-[0_0_32px_rgba(124,127,255,0.28)]"
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
                    Enviar Mensagem
                    <ArrowRight size={15} />
                  </>
                )}
              </motion.button>
            </form>
          </SectionWrapper>

          {/* Contact Info */}
          <SectionWrapper delay={0.2} className="lg:col-span-2">
            <div className="space-y-8">
              <div>
                <h3 className="text-lg font-semibold tracking-tight mb-3">
                  Vamos trabalhar juntos
                </h3>
                <p className="text-muted text-sm leading-relaxed">
                  Disponível para projetos freelance, oportunidades de trabalho e colaborações.
                </p>
              </div>

              {/* Email */}
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

              {/* Social Links */}
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
            </div>
          </SectionWrapper>
        </div>
      </div>
    </section>
  );
}
