// GET→〜/api/todos：todoの一覧を取得する
// POST→〜/api/todos：todoを新規作成する

import { NextResponse } from "next/server";
import prisma from "@/app/lib/prismaClient";

// 型定義
// type TodoRequest = {
//   title: string;
//   content: string;
//   status?: string;
// };

<<<<<<< HEAD
// 一覧を取得
=======
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
>>>>>>> origin/main
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

// 作成する関数
export async function POST(request: Request) {
  const { title, content, status } = await request.json();

  const todo = await prisma.post.create({
    data: {
      title,
      content,
      status,
    },
  });
  return NextResponse.json(
    {
      sccess: true,
      message: "Todoを正常に作成できました!",
      data: todo,
    },
    {
      status: 201,
    }
  );
}
