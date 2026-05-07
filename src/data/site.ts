// ============================================
// DADOS CENTRAIS DO PORTFÓLIO
// Edite este arquivo para personalizar todo o site
// ============================================

export type Locale = "pt" | "en";

export const siteData = {
  // --- Informações Pessoais ---
  name: "Gustavo Marques Lopes Ribeiro",
  firstName: "Gustavo",
  fullName: "Gustavo Marques Lopes Ribeiro",
  role: {
    pt: "Desenvolvedor Full Stack em formação",
    en: "Full Stack Developer in training",
  },
  headline: {
    pt: "Estudante de Engenharia de Software buscando minha primeira oportunidade em tecnologia.",
    en: "Software Engineering student seeking my first opportunity in tech.",
  },
  description: {
    pt: "Foco em backend e frontend com C#, .NET, React e aplicações com IA. Trago maturidade profissional de 2+ anos em logística, com liderança, organização de processos e resolução de problemas.",
    en: "Focused on backend and frontend with C#, .NET, React and AI applications. I bring professional maturity from 2+ years in logistics, with leadership, process organization and problem-solving.",
  },
  cta: {
    pt: "Disponível para vagas de Dev Júnior e Estágio",
    en: "Available for Junior Developer and Internship positions",
  },
  avatarUrl: "/avatar.jpg",
  resumeUrl: "/Gustavo_Marques_CV.pdf",
  location: "Barra Mansa, Rio de Janeiro",
  phone: "(24) 98858-2885",

  // --- Links Sociais ---
  socials: {
    github: "https://github.com/Gustavomrib",
    linkedin: "https://www.linkedin.com/in/gustavomrib/",
    whatsapp: "https://wa.me/5524988582885",
    email: "gustavomarques.dev@gmail.com",
  },

  // --- Sobre Mim ---
  about: {
    title: { pt: "Sobre Mim", en: "About Me" },
    paragraphs: {
      pt: [
        "Sou estudante de Engenharia de Software na UBM, atualmente no 5º período, com foco em desenvolvimento backend e frontend. Meu interesse principal está no ecossistema .NET, React e em aplicações que envolvem inteligência artificial.",
        "Antes de migrar para a tecnologia, atuei por mais de 2 anos na área de logística — incluindo liderança de equipes, automação de controles via Excel e tomada de decisão sob pressão. Essa experiência me trouxe maturidade profissional, senso de responsabilidade e capacidade de resolver problemas de forma estratégica, competências que aplico diariamente no desenvolvimento de software.",
        "Busco minha primeira oportunidade como Desenvolvedor Júnior ou Estagiário. Estou pronto para aprender, contribuir e crescer dentro de uma equipe de tecnologia.",
      ],
      en: [
        "I am a Software Engineering student at UBM, currently in my 5th semester, focused on backend and frontend development. My main interest lies in the .NET ecosystem, React, and applications involving artificial intelligence.",
        "Before transitioning to tech, I worked for over 2 years in logistics — including team leadership, Excel-based control automation, and decision-making under pressure. This experience gave me professional maturity, a sense of responsibility, and the ability to solve problems strategically, skills I apply daily in software development.",
        "I am looking for my first opportunity as a Junior Developer or Intern. I am ready to learn, contribute, and grow within a technology team.",
      ],
    },
    interests: {
      pt: [
        "Desenvolvimento Backend",
        "Inteligência Artificial",
        "Automação de Processos",
        "Liderança & Gestão",
        "Arquitetura de Software",
      ],
      en: [
        "Backend Development",
        "Artificial Intelligence",
        "Process Automation",
        "Leadership & Management",
        "Software Architecture",
      ],
    },
  },

  // --- Skills ---
  skills: {
    frontend: {
      title: "Front-end",
      icon: "Monitor",
      items: [
        { name: "React", level: 70 },
        { name: "TypeScript", level: 65 },
        { name: "JavaScript", level: 75 },
        { name: "HTML", level: 85 },
        { name: "CSS", level: 80 },
        { name: "Vite", level: 60 },
      ],
    },
    backend: {
      title: "Back-end",
      icon: "Server",
      items: [
        { name: "C#", level: 70 },
        { name: ".NET", level: 65 },
        { name: "Node.js", level: 50 },
        { name: "APIs REST", level: 60 },
      ],
    },
    database: {
      title: "Banco de Dados",
      icon: "Database",
      items: [
        { name: "SQL Server", level: 65 },
        { name: "PostgreSQL", level: 55 },
      ],
    },
    tools: {
      title: { pt: "Ferramentas", en: "Tools" },
      icon: "Wrench",
      items: [
        { name: "Git & GitHub", level: 75 },
        { name: "Excel (Intermediário)", level: 80 },
      ],
    },
    competencies: {
      title: { pt: "Competências", en: "Competencies" },
      icon: "BookOpen",
      items: [
        { name: "Liderança", level: 85 },
        { name: "Comunicação assertiva", level: 80 },
        { name: "Resolução de problemas", level: 85 },
        { name: "Proatividade", level: 90 },
      ],
    },
  },

  // --- Certificados ---
  certificates: [
    {
      id: "cert-1",
      title: "C#: criando sua primeira aplicação",
      institution: "Alura",
      description:
        "Fundamentos da linguagem C#, sintaxe, variáveis, estruturas de controle e criação de uma aplicação console funcional do zero.",
      url: "https://cursos.alura.com.br/certificate/bcf7fc3a-f9c2-41ff-afa6-67be5e71023f?lang=pt_BR",
      date: "2024",
    },
    {
      id: "cert-2",
      title: "Praticando C#: orientação a objetos com classes",
      institution: "Alura",
      description:
        "Conceitos de orientação a objetos em C#: classes, objetos, encapsulamento, herança e polimorfismo aplicados em projetos práticos.",
      url: "https://cursos.alura.com.br/certificate/8684e258-1368-4fb6-8acf-99c2817ab56d?lang=pt_BR",
      date: "2024",
    },
  ],

  // --- Projetos ---
  projects: [
    {
      id: "1",
      title: "Auth App",
      description: {
        pt: "Sistema web com autenticação via Google OAuth, proteção de rotas e cadastro de usuários com geração de JSON. Demonstra domínio de autenticação moderna e gerenciamento de estado.",
        en: "Web system with Google OAuth authentication, protected routes and user registration with JSON generation. Demonstrates mastery of modern authentication and state management.",
      },
      image: "",
      tags: ["Next.js", "TypeScript", "Firebase", "Tailwind CSS"],
      category: "frontend",
      github: "https://github.com/Gustavomrib/LoginGoogle",
      demo: "https://login-google-sooty.vercel.app",
      featured: true,
    },
    {
      id: "2",
      title: {
        pt: "Assistente de Análise de Texto com IA",
        en: "AI Text Analysis Assistant",
      },
      description: {
        pt: "Projeto em Python para análise textual com técnicas de NLP, incluindo resumo automático, pontos-chave, análise de sentimento e cálculo de complexidade — tudo sem uso de APIs externas.",
        en: "Python project for text analysis using NLP techniques, including automatic summarization, key points, sentiment analysis and complexity calculation — all without external APIs.",
      },
      image: "",
      tags: ["Python", "NLP", "IA", "Arquitetura modular"],
      category: "ai",
      github: "https://github.com/Gustavomrib/-ASSISTENTE-DE-AN-LISE-DE-TEXTO-COM-IA",
      demo: "",
      featured: true,
    },
    {
      id: "3",
      title: "Surface — Loja de Roupas Online",
      description: {
        pt: "Aplicação web de e-commerce voltada ao segmento de moda, com frontend em React + Vite e backend em Node.js + Express. Foco em experiência do usuário, organização de catálogo e fluxo de compras.",
        en: "E-commerce web application focused on fashion, with React + Vite frontend and Node.js + Express backend. Focus on user experience, catalog organization and purchase flow.",
      },
      image: "",
      tags: ["React", "Vite", "Node.js", "Express", "Tailwind CSS"],
      category: "fullstack",
      github: "https://github.com/thalles-j/surface-test",
      demo: "",
      featured: false,
      collaborative: true,
    },
  ],

  // --- Categorias de Projetos (para filtro) ---
  projectCategories: [
    { value: "all", label: { pt: "Todos", en: "All" } },
    { value: "frontend", label: { pt: "Front-end", en: "Front-end" } },
    { value: "ai", label: { pt: "IA / Python", en: "AI / Python" } },
    { value: "fullstack", label: { pt: "Full Stack", en: "Full Stack" } },
  ],

  // --- Experiência / Jornada ---
  journey: [
    {
      year: "2024 — Atual",
      title: {
        pt: "Estudante de Engenharia de Software",
        en: "Software Engineering Student",
      },
      company: { pt: "UBM — Universidade de Barra Mansa", en: "UBM — Barra Mansa University" },
      description: {
        pt: "Graduação em andamento (5º período). Foco em desenvolvimento full stack, banco de dados, arquitetura de software e boas práticas de engenharia.",
        en: "Undergraduate degree in progress (5th semester). Focus on full stack development, databases, software architecture and engineering best practices.",
      },
      type: "education" as const,
    },
    {
      year: "2022 — Atual",
      title: {
        pt: "Auxiliar de Logística Pleno",
        en: "Logistics Assistant (Full)",
      },
      company: { pt: "Teixeira & Souza Resende Ltda", en: "Teixeira & Souza Resende Ltda" },
      description: {
        pt: "Gestão de fluxo operacional e liderança de equipes. Automação de controles via Excel intermediário. Tomada de decisão rápida e gestão de conflitos.",
        en: "Operational flow management and team leadership. Control automation via intermediate Excel. Quick decision-making and conflict management.",
      },
      type: "work" as const,
    },
    {
      year: "2022",
      title: {
        pt: "Auxiliar de Logística",
        en: "Logistics Assistant",
      },
      company: { pt: "Pneuscar Recauchutagem Ltda", en: "Pneuscar Retreading Ltda" },
      description: {
        pt: "Suporte operacional e controle de estoque. Apoio em processos logísticos do dia a dia.",
        en: "Operational support and inventory control. Assistance in daily logistics processes.",
      },
      type: "work" as const,
    },
    {
      year: "2023",
      title: {
        pt: "Início na Programação",
        en: "Started Programming",
      },
      company: { pt: "Autodidata & Cursos Online", en: "Self-taught & Online Courses" },
      description: {
        pt: "Primeiros passos com C#, .NET, HTML, CSS e JavaScript. Construção de projetos práticos e estudo intensivo de fundamentos de programação.",
        en: "First steps with C#, .NET, HTML, CSS and JavaScript. Building practical projects and intensive study of programming fundamentals.",
      },
      type: "education" as const,
    },
  ],

  // --- Navegação ---
  navigation: [
    { label: { pt: "Início", en: "Home" }, href: "#hero" },
    { label: { pt: "Sobre", en: "About" }, href: "#about" },
    { label: { pt: "Skills", en: "Skills" }, href: "#skills" },
    { label: { pt: "Certificados", en: "Certificates" }, href: "#certificates" },
    { label: { pt: "Projetos", en: "Projects" }, href: "#projects" },
    { label: { pt: "Jornada", en: "Journey" }, href: "#journey" },
    { label: { pt: "Contato", en: "Contact" }, href: "#contact" },
  ],
};

// --- Helpers ---
export type SiteData = typeof siteData;

/** Resolve a localized string or plain string */
export function t(value: string | { pt: string; en: string }, locale: Locale = "pt"): string {
  if (typeof value === "string") return value;
  return value[locale];
}
