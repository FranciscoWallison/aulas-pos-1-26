import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";


// pegar os clientes cadastrados
export async function GET() {
  const ususarios = await prisma.usuario.findMany();
  return NextResponse.json(ususarios);
}

// cadastrar um cliente
export async function POST(request) {
  const body = await request.json();
  const usuario = await prisma.usuario.create({ data: body });
  return NextResponse.json(usuario, { status: 201 });
}

