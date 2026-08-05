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
    // Certificado (Cisco) — conceitos comprovados
    primary: [
      {
        name: "Fundamentos de Cibersegurança",
        label: { pt: "Certificado — Cisco", en: "Certified — Cisco" },
        description: {
          pt: "Confidencialidade, integridade e disponibilidade (CIA), valor da informação, risco, incidentes e cultura de segurança.",
          en: "Confidentiality, integrity and availability (CIA triad), the value of information, risk, incidents and security culture.",
        },
      },
      {
        name: "Ameaças Cibernéticas",
        label: { pt: "Certificado — Cisco", en: "Certified — Cisco" },
        description: {
          pt: "Malware, phishing, engenharia social, brute force, SQL Injection, XSS e ataques de DoS/DDoS — principais vetores e como reconhecê-los.",
          en: "Malware, phishing, social engineering, brute force, SQL Injection, XSS and DoS/DDoS attacks — main vectors and how to recognize them.",
        },
      },
    ],
    // Trilha em andamento (Alura) — ainda em estudo, sem certificação concluída
    tools: [
      { name: "Redes & Protocolos", label: { pt: "Em aprendizado", en: "Learning" } },
      { name: "Segurança em Aplicações", label: { pt: "Em aprendizado", en: "Learning" } },
      { name: "Linux & Windows", label: { pt: "Em aprendizado", en: "Learning" } },
      { name: "Criptografia & MFA", label: { pt: "Em aprendizado", en: "Learning" } },
      { name: "Pentest Básico", label: { pt: "Em aprendizado", en: "Learning" } },
    ],
    learningTrack: [
      "Docker & Cloud Security",
      "DevSecOps & CI/CD",
      "SIEM & Resposta a Incidentes",
      "Governança, Risco & Compliance (LGPD)",
    ],
    legacy: ["Java", "C#", ".NET", "React", "TypeScript", "Node.js"],
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
      title: "Introdução à Cibersegurança",
      institution: "Cisco Networking Academy",
      description:
        "Fundamentos de segurança da informação: valor da informação, confidencialidade, integridade e disponibilidade (CIA), risco, ameaças, incidentes e cultura de segurança.",
      url: "",
      date: "2026",
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
  ],

  // --- Categorias de Projetos (para filtro) ---
  projectCategories: [
    { value: "all", label: { pt: "Todos", en: "All" } },
    { value: "frontend", label: { pt: "Front-end", en: "Front-end" } },
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
