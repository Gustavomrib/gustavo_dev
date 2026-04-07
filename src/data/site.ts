// ============================================
// DADOS CENTRAIS DO PORTFÓLIO
// Edite este arquivo para personalizar todo o site
// ============================================

export type Locale = "pt" | "en";

export const siteData = {
  // --- Informações Pessoais ---
  name: "Gustavo Ribeiro",
  firstName: "Gustavo",
  fullName: "Gustavo Marques Lopes Ribeiro",
  role: {
    pt: "Desenvolvedor Full Stack | .NET & React",
    en: "Full Stack Developer | .NET & React",
  },
  headline: {
    pt: "Transformo ideias em aplicações web performáticas — do backend à interface.",
    en: "I turn ideas into performant web applications — from backend to interface.",
  },
  description: {
    pt: "Desenvolvedor Full Stack com projetos reais em React, Next.js, .NET e Python. Experiência em autenticação, IA aplicada e colaboração em equipe. Background em liderança e gestão.",
    en: "Full Stack Developer with real projects in React, Next.js, .NET and Python. Experienced in authentication, applied AI and team collaboration. Background in leadership and management.",
  },
  cta: {
    pt: "Aberto a oportunidades em desenvolvimento de software",
    en: "Open to software development opportunities",
  },
  avatarUrl: "/avatar.jpg",
  resumeUrl: "/curriculo.pdf", // coloque seu currículo em public/curriculo.pdf

  // --- Links Sociais ---
  socials: {
    github: "https://github.com/Gustavomrib",
    linkedin: "https://www.linkedin.com/in/gustavomrib/",
    whatsapp: "https://wa.me/5524988582885",
    email: "gustavomrib13@gmail.com",
  },

  // --- Sobre Mim ---
  about: {
    title: { pt: "Sobre Mim", en: "About Me" },
    paragraphs: {
      pt: [
        "Sou graduando em Engenharia de Software e desenvolvedor Full Stack com foco em React/TypeScript no frontend e C#/.NET no backend. Meus projetos refletem o que acredito: código limpo, interfaces performáticas e soluções que resolvem problemas reais.",
        "Já desenvolvi aplicações com autenticação Firebase e OAuth, assistentes de análise de texto com IA em Python, ferramentas de produtividade e participei de projetos colaborativos Full Stack. Cada entrega me ensinou algo novo sobre arquitetura, performance e trabalho em equipe.",
        "Trago 4 anos de experiência como Supervisor de Logística, onde liderei equipes, automatizei processos e tomei decisões sob pressão — competências que aplico diariamente na forma como planejo e entrego software. Busco uma oportunidade formal para crescer como desenvolvedor.",
      ],
      en: [
        "I am a Software Engineering student and Full Stack developer focused on React/TypeScript for frontend and C#/.NET for backend. My projects reflect what I believe in: clean code, performant interfaces and solutions that solve real problems.",
        "I have built applications with Firebase and OAuth authentication, AI-powered text analysis assistants in Python, productivity tools and participated in collaborative Full Stack projects. Each delivery taught me something new about architecture, performance and teamwork.",
        "I bring 4 years of experience as a Logistics Supervisor, where I led teams, automated processes and made decisions under pressure — competencies I apply daily to how I plan and deliver software. Seeking a formal opportunity to grow as a developer.",
      ],
    },
    interests: {
      pt: [
        "Desenvolvimento Full Stack",
        "Inteligência Artificial",
        "Automação de Processos",
        "Arquitetura de Software",
        "Aprendizado Contínuo",
      ],
      en: [
        "Full Stack Development",
        "Artificial Intelligence",
        "Process Automation",
        "Software Architecture",
        "Continuous Learning",
      ],
    },
  },

  // --- Skills ---
  skills: {
    frontend: {
      title: "Front-end",
      icon: "Monitor",
      items: [
        { name: "React", level: 75 },
        { name: "TypeScript", level: 70 },
        { name: "JavaScript", level: 80 },
        { name: "HTML", level: 90 },
        { name: "CSS", level: 85 },
        { name: "Vite", level: 65 },
      ],
    },
    backend: {
      title: "Back-end",
      icon: "Server",
      items: [
        { name: "C#", level: 75 },
        { name: ".NET", level: 70 },
        { name: "APIs REST", level: 75 },
      ],
    },
    database: {
      title: "Banco de Dados",
      icon: "Database",
      items: [
        { name: "SQL Server", level: 70 },
        { name: "PostgreSQL", level: 60 },
      ],
    },
    tools: {
      title: { pt: "Ferramentas", en: "Tools" },
      icon: "Wrench",
      items: [
        { name: "Git & GitHub", level: 80 },
        { name: "Excel (Automação)", level: 85 },
      ],
    },
    learning: {
      title: { pt: "Aprendendo", en: "Learning" },
      icon: "BookOpen",
      items: [
        { name: "Python", level: 40 },
        { name: "Inteligência Artificial", level: 30 },
        { name: "Arquitetura de Software", level: 35 },
      ],
    },
  },

  // --- Projetos ---
  projects: [
    {
      id: "1",
      title: "Auth App",
      description: {
        pt: "Aplicação completa de autenticação com login via Google OAuth e e-mail/senha. Desenvolvida com Next.js, TypeScript e Firebase, com rotas protegidas e gerenciamento de estado via Context API.",
        en: "Complete authentication app with Google OAuth and email/password login. Built with Next.js, TypeScript and Firebase, featuring protected routes and state management via Context API.",
      },
      image: "",
      tags: ["Next.js", "TypeScript", "Firebase", "Tailwind CSS", "Context API"],
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
        pt: "Assistente inteligente que analisa textos utilizando técnicas de Processamento de Linguagem Natural (NLP). Extrai sentimentos, palavras-chave e gera resumos automaticamente com Python.",
        en: "Intelligent assistant that analyzes text using Natural Language Processing (NLP) techniques. Extracts sentiments, keywords and generates summaries automatically with Python.",
      },
      image: "",
      tags: ["Python", "NLP", "IA", "Automação"],
      category: "ai",
      github: "https://github.com/Gustavomrib/-ASSISTENTE-DE-AN-LISE-DE-TEXTO-COM-IA",
      demo: "",
      featured: true,
    },
    {
      id: "3",
      title: "TechPlanner",
      description: {
        pt: "Ferramenta de planejamento e organização de tarefas voltada para desenvolvedores. Interface limpa e funcional construída com JavaScript puro, HTML e CSS.",
        en: "Task planning and organization tool designed for developers. Clean and functional interface built with vanilla JavaScript, HTML and CSS.",
      },
      image: "",
      tags: ["JavaScript", "HTML", "CSS"],
      category: "frontend",
      github: "https://github.com/Gustavomrib/TechPlanner",
      demo: "",
      featured: false,
    },
    {
      id: "4",
      title: "Surface E-Commerce",
      description: {
        pt: "E-commerce Full Stack desenvolvido em colaboração com outro desenvolvedor. Sistema completo com catálogo de produtos, carrinho de compras e fluxo de checkout. Projeto colaborativo com versionamento via Git.",
        en: "Full Stack e-commerce built in collaboration with another developer. Complete system with product catalog, shopping cart and checkout flow. Collaborative project with Git versioning.",
      },
      image: "",
      tags: ["JavaScript", "Full Stack", "Git", "Colaborativo"],
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
      year: "2024",
      title: {
        pt: "Desenvolvedor Full Stack — Freelancer",
        en: "Full Stack Developer — Freelancer",
      },
      company: { pt: "Projetos Independentes & Colaborativos", en: "Independent & Collaborative Projects" },
      description: {
        pt: "Desenvolvimento de aplicações web com React, Next.js, .NET e Python. Projetos incluem autenticação com Firebase, assistente de IA para análise de texto e colaboração em e-commerce Full Stack.",
        en: "Web application development with React, Next.js, .NET and Python. Projects include Firebase authentication, AI text analysis assistant and collaboration on Full Stack e-commerce.",
      },
      type: "work" as const,
    },
    {
      year: "2022",
      title: {
        pt: "Supervisor de Logística",
        en: "Logistics Supervisor",
      },
      company: { pt: "Teixeira & Souza Resende Ltda", en: "Teixeira & Souza Resende Ltda" },
      description: {
        pt: "Gestão de operações logísticas, liderança de equipe, automação de processos com Excel e tomada de decisão estratégica. 4 anos de experiência sólida em gestão.",
        en: "Logistics operations management, team leadership, process automation with Excel and strategic decision-making. 4 years of solid management experience.",
      },
      type: "work" as const,
    },
    {
      year: "2022",
      title: {
        pt: "Auxiliar de Logística",
        en: "Logistics Assistant",
      },
      company: { pt: "Pneuscar", en: "Pneuscar" },
      description: {
        pt: "Controle de estoque, suporte operacional e apoio em processos logísticos do dia a dia.",
        en: "Inventory control, operational support and assistance in daily logistics processes.",
      },
      type: "work" as const,
    },
    {
      year: "2024",
      title: {
        pt: "Engenharia de Software",
        en: "Software Engineering",
      },
      company: { pt: "Graduação em andamento", en: "Undergraduate — In progress" },
      description: {
        pt: "Graduação em Engenharia de Software com foco em desenvolvimento full stack, banco de dados, arquitetura de software e boas práticas de engenharia.",
        en: "Software Engineering degree focused on full stack development, databases, software architecture and engineering best practices.",
      },
      type: "education" as const,
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
