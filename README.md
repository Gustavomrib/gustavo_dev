# gustavo.dev — Portfólio Pessoal

Portfólio profissional de **Gustavo Marques Lopes Ribeiro** — Desenvolvedor Full Stack com projetos reais em React, Next.js, .NET e Python.

![Next.js](https://img.shields.io/badge/Next.js-16-black?logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-strict-3178C6?logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-06B6D4?logo=tailwindcss)

---

## Sobre

Portfólio moderno e responsivo com design premium dark, animações suaves e performance otimizada. 100% estático (SSG), pronto para deploy no Vercel.

### Seções
- **Hero** — Apresentação com avatar, CTAs e animações de entrada
- **Sobre** — Narrativa profissional com cards de interesses
- **Skills** — Categorias técnicas com barras de progresso animadas
- **Projetos** — Cards com destaque, filtros animados e badges (Featured / Collab)
- **Jornada** — Timeline profissional e acadêmica
- **Contato** — Formulário de contato e links sociais

### Projetos em Destaque
| Projeto | Tecnologias | Links |
|---------|------------|-------|
| **Auth App** | Next.js, TypeScript, Firebase, Tailwind | [Código](https://github.com/Gustavomrib/LoginGoogle) · [Demo](https://login-google-sooty.vercel.app) |
| **Assistente de Análise de Texto com IA** | Python, NLP | [Código](https://github.com/Gustavomrib/-ASSISTENTE-DE-AN-LISE-DE-TEXTO-COM-IA) |
| **TechPlanner** | JavaScript, HTML, CSS | [Código](https://github.com/Gustavomrib/TechPlanner) |
| **Surface E-Commerce** | JavaScript, Full Stack (Collab) | [Código](https://github.com/thalles-j/surface-test) |

---

## Tech Stack

- **Framework:** Next.js 16 (App Router, Turbopack, SSG)
- **Linguagem:** TypeScript (strict)
- **Estilo:** Tailwind CSS 4 (`@theme inline`)
- **Animações:** Framer Motion (layoutId, useInView, AnimatePresence)
- **Ícones:** Lucide React + SVGs customizados
- **Fontes:** Inter + JetBrains Mono (next/font)
- **Deploy:** Vercel

## Estrutura

```
src/
├── app/            # Layout, página, estilos globais, favicon
├── components/
│   ├── layout/     # Navbar, Footer
│   ├── sections/   # Hero, About, Skills, Projects, Journey, Contact
│   └── ui/         # SectionHeading, SectionWrapper, SocialIcons
├── data/
│   └── site.ts     # Dados centralizados (i18n PT/EN)
public/
├── avatar.jpg      # Foto de perfil
└── curriculo.pdf   # Currículo (opcional)
```

## Personalização

Todos os dados do portfólio ficam em **`src/data/site.ts`** — edite apenas este arquivo para alterar nome, descrição, projetos, skills, jornada e links sociais. Suporte a i18n (PT/EN) integrado.

## Início Rápido

```bash
# Clonar
git clone https://github.com/Gustavomrib/gustavo_dev.git
cd gustavo_dev

# Instalar dependências
npm install

# Rodar em desenvolvimento
npm run dev
```

Acesse **http://localhost:3000**

## Deploy

O projeto está pronto para deploy no [Vercel](https://vercel.com):

1. Importe o repositório no Vercel
2. Framework preset: **Next.js** (detectado automaticamente)
3. Deploy automático a cada push na `main`

---

## Contato

- **GitHub:** [Gustavomrib](https://github.com/Gustavomrib)
- **LinkedIn:** [gustavomrib](https://www.linkedin.com/in/gustavomrib/)
- **Email:** gustavomrib13@gmail.com

## Licença

MIT

1. Faça push do repositório para o GitHub
2. Acesse [vercel.com](https://vercel.com)
3. Importe o repositório
4. A Vercel detecta Next.js automaticamente — clique em **Deploy**

Ou use a CLI:

```bash
npx vercel
```

## Checklist para Personalização

- [ ] Substitua `public/avatar.svg` por sua foto real (`avatar.jpg` ou `.png`)
- [ ] Coloque seu currículo em `public/curriculo.pdf`
- [ ] Adicione imagens dos projetos em `public/projects/`
- [ ] Edite `src/data/site.ts` com seus dados
- [ ] Atualize a metadata em `src/app/layout.tsx` se desejar
- [ ] Integre o formulário de contato (Formspree, API route, etc.)

## Licença

MIT
