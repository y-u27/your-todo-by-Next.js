import { NextResponse } from "next/server";
import prisma from "@/app/lib/prismaClient";

// 型定義
// type TodoRequest = {
//   title: string;
//   content: string;
//   status?: string;
// };

// 作成する関数
// 修正する request→request: Request
export async function POST(request) {
  const { title, content, status } = await request.json();

  const todo = await prisma.post.create({
    data: {
      title,
      content,
      status,
    },
  });
}

// すべてのTodoを取得
export async function GET() {
  const todos = await prisma.post.findMany();

  return NextResponse.json(
    {
      sucess: true,
      message: "Todoのデータを取得",
      data: todos,
    },
    {
      status: 200,
    }
  );
}
