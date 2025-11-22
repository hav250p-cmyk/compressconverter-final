import { NextResponse } from "next/server";
import { createCheckoutSession } from "../../../lib/stripe.js";

export async function POST(request) {
  try {
    const body = await request.json();
    const email = body?.email;

    if (!email) {
      return NextResponse.json(
        { error: "E-mail é obrigatório" },
        { status: 400 }
      );
    }

    const session = await createCheckoutSession(email);

    return NextResponse.json({ url: session.url });
  } catch (error) {
    console.error("Erro ao criar sessão de checkout", error);
    return NextResponse.json(
      { error: "Não foi possível criar a sessão de checkout" },
      { status: 500 }
    );
  }
}
