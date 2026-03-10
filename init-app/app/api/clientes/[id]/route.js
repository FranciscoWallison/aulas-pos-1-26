import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

// pegar um cliente por ID
export async function GET(request, { params }) {
  const { id } = await params;
  const usuario = await prisma.usuario.findUnique({
    where: { id: Number(id) },
  });

  return NextResponse.json(usuario);
}

// atualizar um cliente por ID
export async function PUT(request, { params }) {
  const { id } = await params;
  const body = await request.json();

  const usuario = await prisma.usuario.update({
    where: { id: Number(id) },
    data: body,
  });

  return NextResponse.json(usuario);
}

// deletar um cliente por ID
export async function DELETE(request, { params }) {
  const { id } = await params;

  await prisma.usuario.delete({ where: { id: Number(id) } });

  return NextResponse.json({ message: `cliente ${id} deletado` });
}
