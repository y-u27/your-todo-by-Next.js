import { NextResponse } from "next/server";
import prisma from "@/app/lib/prismaClient";

// 型定義
// type TodoRequest = {
//   title: string;
//   content: string;
//   status?: string;
// };

// すべてのTodoを取得
export async function GET() {
  const todos = await prisma.post.findMany();

  return NextResponse.json(
    {
      sucess: true,
      message: "List Todo",
      data: todos,
    },
    {
      status: 200,
    }
  );
}
