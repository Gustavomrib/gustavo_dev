import type { Metadata, Viewport } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#06060a",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "Gustavo Ribeiro | Desenvolvedor Full Stack — .NET & React",
  description:
    "Portfólio de Gustavo Ribeiro — Desenvolvedor Full Stack com projetos reais em React, Next.js, .NET e Python. Autenticação, IA aplicada e colaboração Full Stack.",
  keywords: [
    "desenvolvedor",
    "full stack",
    "react",
    "next.js",
    ".net",
    "c#",
    "typescript",
    "python",
    "portfólio",
    "firebase",
    "inteligência artificial",
  ],
  authors: [{ name: "Gustavo Marques Lopes Ribeiro" }],
  creator: "Gustavo Ribeiro",
  openGraph: {
    title: "Gustavo Ribeiro | Desenvolvedor Full Stack — .NET & React",
    description:
      "Desenvolvedor Full Stack com projetos reais em React, Next.js, .NET e Python. Autenticação, IA e colaboração.",
    type: "website",
    locale: "pt_BR",
    siteName: "Gustavo Ribeiro — Portfólio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Gustavo Ribeiro | Desenvolvedor Full Stack — .NET & React",
    description:
      "Desenvolvedor Full Stack com projetos reais em React, Next.js, .NET e Python.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${inter.variable} ${jetbrainsMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground">
        {children}
      </body>
    </html>
  );
}
