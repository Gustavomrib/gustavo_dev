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
    pt: "Desenvolvedor Java em formação",
    en: "Java Developer in training",
  },
  headline: {
    pt: "Estudante de Engenharia de Software (6º período), focado em Java & Spring Boot — em busca da primeira oportunidade em Portugal.",
    en: "Software Engineering student (6th semester), focused on Java & Spring Boot — seeking my first opportunity in Portugal.",
  },
  description: {
    pt: "Foco em Java & Spring Boot, com base técnica em .NET/C# e React. Experiência de 2+ anos em logística com liderança de equipes.",
    en: "Focused on Java & Spring Boot, with a technical background in .NET/C# and React. 2+ years of experience in logistics with team leadership.",
  },
  cta: {
    pt: "Aberto a vagas de Dev Java Júnior · Interesse em Portugal",
    en: "Open to Junior Java Developer roles · Interest in Portugal",
  },
  avatarUrl: "/avatar.jpg",
  resumeUrl: "/Gustavo_Marques_CV.pdf?v=2026-07",
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
        "Sou estudante de Engenharia de Software na UBM, cursando o 6º período. Estou em transição de stack: construí minha base técnica com .NET/C# e React, e hoje meu foco está em Java e Spring Boot — ecossistema onde quero desenvolver minha carreira como desenvolvedor backend.",
        "Atualmente sou estagiário de TI na Tecnored, onde trabalho com Python, automação de processos e aplicações de Inteligência Artificial e Machine Learning.",
        "Antes de migrar para a tecnologia, trabalhei por mais de 2 anos em logística — liderando equipes, automatizando controles via Excel e tomando decisões sob pressão. Essa experiência me ensinou a resolver problemas de forma estratégica, comunicar com clareza e entregar resultados: habilidades que trago diretamente para o desenvolvimento de software.",
        "Busco minha primeira oportunidade como Desenvolvedor Java, com interesse especial em Portugal. Sou elegível à residência via CPLP, o que facilita o processo de relocation — e estou pronto para contribuir em uma equipe onde possa crescer com consistência.",
      ],
      en: [
        "I am a Software Engineering student at UBM, currently in my 6th semester. I am in the middle of a stack transition: I built my technical foundation with .NET/C# and React, and my current focus is Java and Spring Boot — the ecosystem where I want to build my career as a backend developer.",
        "I'm currently an IT intern at Tecnored, working with Python, process automation, and Artificial Intelligence/Machine Learning applications.",
        "Before moving into tech, I worked for over 2 years in logistics — leading teams, automating controls via Excel, and making decisions under pressure. That experience taught me to solve problems strategically, communicate clearly, and deliver results: skills I bring directly to software development.",
        "I am looking for my first opportunity as a Java Developer, with a strong interest in Portugal. I am eligible for residency through CPLP, which simplifies the relocation process — and I am ready to contribute to a team where I can grow with consistency.",
      ],
    },
    interests: {
      pt: [
        "Backend com Java",
        "Inteligência Artificial",
        "Automação de Processos",
        "Liderança & Gestão",
        "Arquitetura de Software",
      ],
      en: [
        "Backend with Java",
        "Artificial Intelligence",
        "Process Automation",
        "Leadership & Management",
        "Software Architecture",
      ],
    },
    relocationBadge: {
      pt: "Aberto a relocation para Portugal · Elegível via CPLP",
      en: "Open to relocation to Portugal · CPLP eligible",
    },
  },

  // --- Skills ---
  skills: {
    primary: [
      {
        name: "Java",
        label: { pt: "Em foco atual", en: "Current focus" },
        description: {
          pt: "Foco principal de estudos — POO, coleções, streams e tratamento de exceções",
          en: "Main study focus — OOP, collections, streams and exception handling",
        },
      },
      {
        name: "Spring Boot",
        label: { pt: "Aprendendo ativamente", en: "Actively learning" },
        description: {
          pt: "Spring MVC, JPA/Hibernate, Spring Security e construção de REST APIs",
          en: "Spring MVC, JPA/Hibernate, Spring Security and REST API development",
        },
      },
    ],
    tools: [
      { name: "PostgreSQL", label: { pt: "Base sólida", en: "Solid foundation" } },
      { name: "SQL Server", label: { pt: "Base sólida", en: "Solid foundation" } },
      { name: "Git & GitHub", label: { pt: "Base sólida", en: "Solid foundation" } },
      { name: "Docker", label: { pt: "Aprendendo", en: "Learning" } },
      { name: "APIs REST", label: { pt: "Base sólida", en: "Solid foundation" } },
    ],
    legacy: ["C#", ".NET", "React", "TypeScript", "Node.js"],
    soft: [
      { pt: "Liderança", en: "Leadership" },
      { pt: "Comunicação assertiva", en: "Assertive communication" },
      { pt: "Resolução de problemas", en: "Problem-solving" },
      { pt: "Proatividade", en: "Proactivity" },
    ],
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
      year: "05/2026 — Atual",
      title: {
        pt: "Estagiário de TI",
        en: "IT Intern",
      },
      company: { pt: "Tecnored", en: "Tecnored" },
      description: {
        pt: "Atuação com Python, automação de processos e aplicações de Inteligência Artificial e Machine Learning.",
        en: "Working with Python, process automation, and Artificial Intelligence/Machine Learning applications.",
      },
      type: "work" as const,
    },
    {
      year: "2024 — Atual",
      title: {
        pt: "Estudante de Engenharia de Software",
        en: "Software Engineering Student",
      },
      company: { pt: "UBM — Universidade de Barra Mansa", en: "UBM — Barra Mansa University" },
      description: {
        pt: "Graduação em andamento (6º período). Foco atual em Java, Spring Boot e arquitetura de software, com base construída em desenvolvimento full stack e banco de dados.",
        en: "Undergraduate degree in progress (6th semester). Current focus on Java, Spring Boot and software architecture, built on a foundation of full stack development and databases.",
      },
      type: "education" as const,
    },
    {
      year: "2022 — 05/2026",
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
