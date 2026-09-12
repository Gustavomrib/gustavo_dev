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
    pt: "Desenvolvimento Full Stack com Node.js em formação",
    en: "Full Stack development with Node.js in training",
  },
  headline: {
    pt: "Estudante de Engenharia de Software, estagiário em IA e bolsista de iniciação científica na UFF. Construindo minha base em desenvolvimento web, com foco em oportunidades júnior remotas no Brasil.",
    en: "Software Engineering student, AI intern and undergraduate research scholar at UFF. Building my foundation in web development, focused on remote junior opportunities in Brazil.",
  },
  description: {
    pt: "Foco de estudos em JavaScript, TypeScript, Node.js e React. Experiência anterior de 2+ anos em logística com liderança de equipes.",
    en: "Study focus on JavaScript, TypeScript, Node.js and React. 2+ years of prior experience in logistics with team leadership.",
  },
  cta: {
    pt: "Aberto a vagas júnior remotas em desenvolvimento Full Stack com Node.js",
    en: "Open to remote junior Full Stack (Node.js) roles",
  },
  avatarUrl: "/avatar.jpg",
  resumeUrl: "/Gustavo_Marques_CV.pdf?v=2026-09",
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
        "Sou estudante de Engenharia de Software, atualmente no 6º período, com foco de estudos em desenvolvimento full stack com Node.js. Estou construindo minha base em JavaScript, TypeScript, React e bancos de dados para desenvolver aplicações web completas.",
        "Atualmente sou estagiário na Célula de Inteligência Artificial da Tecnored e participo de uma bolsa de iniciação científica na Universidade Federal Fluminense (UFF), no Aterrado, voltada ao desenvolvimento full stack. Na bolsa, estou na etapa inicial de estudos e preparação técnica.",
        "Antes de ingressar em tecnologia, atuei por mais de dois anos em logística. Essa experiência contribuiu para desenvolver organização, comunicação, liderança de equipes e resolução de problemas. Meu objetivo é evoluir para uma oportunidade júnior remota no Brasil.",
      ],
      en: [
        "I'm a Software Engineering student, currently in my 6th semester, with a study focus on full stack development with Node.js. I'm building my foundation in JavaScript, TypeScript, React and databases to develop complete web applications.",
        "I'm currently an intern at Tecnored's Artificial Intelligence Cell and I take part in an undergraduate research scholarship at Universidade Federal Fluminense (UFF), in Aterrado, focused on full stack development. In the scholarship, I'm in the initial stage of study and technical preparation.",
        "Before moving into tech, I worked for over two years in logistics. That experience helped me develop organization, communication, team leadership and problem-solving skills. My goal is to grow into a remote junior opportunity in Brazil.",
      ],
    },
    interests: {
      pt: [
        "Desenvolvimento Full Stack",
        "Inteligência Artificial",
        "Bancos de Dados",
        "Liderança de Equipes",
        "Resolução de Problemas",
      ],
      en: [
        "Full Stack Development",
        "Artificial Intelligence",
        "Databases",
        "Team Leadership",
        "Problem-Solving",
      ],
    },
  },

  // --- Skills / Estudos ---
  skills: {
    title: { pt: "Foco de aprendizado", en: "Learning focus" },
    description: {
      pt: "Estou desenvolvendo minha base em programação e aplicações web por meio de estudos e projetos práticos.",
      en: "I'm building my foundation in programming and web applications through study and hands-on projects.",
    },
    focus: {
      pt: ["JavaScript", "TypeScript", "Node.js", "React", "Bancos de dados"],
      en: ["JavaScript", "TypeScript", "Node.js", "React", "Databases"],
    },
    previousLabel: { pt: "Experiências anteriores", en: "Previous background" },
    previous: {
      pt: ["Java", "C#", ".NET", "Cibersegurança (fundamentos)"],
      en: ["Java", "C#", ".NET", "Cybersecurity (fundamentals)"],
    },
    soft: [
      { pt: "Liderança", en: "Leadership" },
      { pt: "Comunicação assertiva", en: "Assertive communication" },
      { pt: "Resolução de problemas", en: "Problem-solving" },
      { pt: "Proatividade", en: "Proactivity" },
    ],
  },

  // --- Certificados ---
  certificates: [] as Certificate[],

  // --- Projetos ---
  projects: [
    {
      id: "1",
      title: "Auth App",
      description: {
        pt: "Aplicação de estudo com Next.js, TypeScript e Firebase, com autenticação via Google e formulário de cadastro com exportação em JSON.",
        en: "Study project built with Next.js, TypeScript and Firebase, featuring Google authentication and a registration form with JSON export.",
      },
      image: "",
      tags: ["Next.js", "TypeScript", "Firebase", "Tailwind CSS"],
      category: "frontend",
      github: "https://github.com/Gustavomrib/LoginGoogle",
      demo: "https://login-google-sooty.vercel.app",
      featured: true,
    },
  ],

  // --- Experiência / Formação ---
  journey: [
    {
      year: { pt: "Atual", en: "Current" },
      title: {
        pt: "Estagiário — Célula de Inteligência Artificial",
        en: "Intern — Artificial Intelligence Cell",
      },
      company: { pt: "Tecnored", en: "Tecnored" },
      description: {
        pt: "Apoio a iniciativas internas de IA aplicada e automação de processos, com participação em estudos de ferramentas e organização de orientações para as equipes.",
        en: "Supporting internal applied-AI and process-automation initiatives, taking part in tool research and organizing guidance materials for the teams.",
      },
      type: "work" as const,
    },
    {
      year: { pt: "09/2026 — Atual", en: "09/2026 — Current" },
      title: {
        pt: "Bolsista de Iniciação Científica",
        en: "Undergraduate Research Scholar",
      },
      company: {
        pt: "Universidade Federal Fluminense (UFF) — Aterrado",
        en: "Universidade Federal Fluminense (UFF) — Aterrado",
      },
      description: {
        pt: "Participação em projeto voltado ao desenvolvimento full stack. Atualmente na fase inicial de estudos de conceitos e preparação técnica para as atividades do projeto.",
        en: "Participation in a project focused on full stack development. Currently in the initial stage of studying concepts and technical preparation for the project's activities.",
      },
      type: "education" as const,
    },
    {
      year: { pt: "2024 — Atual", en: "2024 — Current" },
      title: {
        pt: "Estudante de Engenharia de Software",
        en: "Software Engineering Student",
      },
      company: { pt: "UBM — Universidade de Barra Mansa", en: "UBM — Barra Mansa University" },
      description: {
        pt: "Graduação em andamento (6º período), com foco de estudos em desenvolvimento full stack: JavaScript, TypeScript, Node.js, React e bancos de dados.",
        en: "Undergraduate degree in progress (6th semester), with a study focus on full stack development: JavaScript, TypeScript, Node.js, React and databases.",
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
    { label: { pt: "Sobre", en: "About" }, href: "#about" },
    { label: { pt: "Projetos", en: "Projects" }, href: "#projects" },
    { label: { pt: "Experiência e formação", en: "Experience & education" }, href: "#journey" },
    { label: { pt: "Estudos", en: "Studies" }, href: "#skills" },
    { label: { pt: "Contato", en: "Contact" }, href: "#contact" },
  ],
};

// --- Helpers ---
export type SiteData = typeof siteData;

export type Certificate = {
  id: string;
  title: string;
  institution: string;
  description: string;
  url: string;
  date: string;
};

/** Resolve a localized string or plain string */
export function t(value: string | { pt: string; en: string }, locale: Locale = "pt"): string {
  if (typeof value === "string") return value;
  return value[locale];
}
