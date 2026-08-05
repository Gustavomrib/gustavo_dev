import { NextResponse } from "next/server";
import { Resend } from "resend";
import { siteData } from "@/data/site";

export const runtime = "nodejs";

interface ContactBody {
  name?: string;
  email?: string;
  message?: string;
}

export async function POST(request: Request) {
  let body: ContactBody;
  try {
    body = (await request.json()) as ContactBody;
  } catch {
    return NextResponse.json(
      { error: "Payload inválido." },
      { status: 400 }
    );
  }

  const name = typeof body.name === "string" ? body.name.trim() : "";
  const email = typeof body.email === "string" ? body.email.trim() : "";
  const message = typeof body.message === "string" ? body.message.trim() : "";

  if (!name || !email || !message) {
    return NextResponse.json(
      { error: "Nome, e-mail e mensagem são obrigatórios." },
      { status: 400 }
    );
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json(
      { error: "E-mail inválido." },
      { status: 400 }
    );
  }

  const apiKey = process.env.RESEND_API_KEY;

  if (!apiKey) {
    return NextResponse.json(
      { error: "Servidor de e-mail não configurado." },
      { status: 500 }
    );
  }

  const resend = new Resend(apiKey);

  const { error } = await resend.emails.send({
    from: `Portfólio <onboarding@resend.dev>`,
    to: [siteData.socials.email],
    replyTo: email,
    subject: `Nova mensagem de ${name} (portfólio)`,
    text: `Nome: ${name}\nE-mail: ${email}\n\nMensagem:\n${message}`,
  });

  if (error) {
    return NextResponse.json(
      { error: "Falha ao enviar o e-mail." },
      { status: 500 }
    );
  }

  return NextResponse.json({ ok: true });
}
