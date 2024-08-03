import { NextResponse } from "next/server";
import prisma from "@/app/lib/prismaClient";

export async function GET(req: Request) {
  const allTodoPost = await prisma.post.findMany();
  return NextResponse.json(allTodoPost);
}
