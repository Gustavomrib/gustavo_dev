"use client";

import { siteData, t } from "@/data/site";
import { ArrowUp } from "lucide-react";
import { motion } from "framer-motion";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-white/[0.06] bg-surface/40">
      <div className="max-w-5xl mx-auto px-6 py-10">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <a
            href="#hero"
            onClick={(e) => {
              e.preventDefault();
              scrollToTop();
            }}
            className="text-sm font-semibold text-foreground/60 hover:text-foreground transition-colors"
          >
            {siteData.firstName}
            <span className="text-primary">.</span>
          </a>

          {/* Links */}
            <nav className="flex flex-wrap items-center justify-center gap-6">
            {siteData.navigation.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-[13px] text-muted-foreground hover:text-foreground transition-colors duration-300"
              >
                {t(item.label)}
              </a>
            ))}
          </nav>

          {/* Back to top */}
          <motion.button
            onClick={scrollToTop}
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="p-2.5 rounded-xl bg-white/[0.03] border border-white/[0.06] hover:border-primary/20 text-muted hover:text-primary transition-all duration-300"
            aria-label="Voltar ao topo"
          >
            <ArrowUp size={16} />
          </motion.button>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-6 border-t border-white/[0.04] text-center">
          <p className="text-[12px] text-muted-foreground tracking-wide">
            © {currentYear} {siteData.name}. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
