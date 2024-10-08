// GET→〜/api/todos：todoの一覧を取得する
// POST→〜/api/todos：todoを新規作成する

import { NextResponse } from "next/server";
import prisma from "@/app/lib/prismaClient";

// 一覧を取得
// すべてのTodoを取得
export async function GET() {
  // supabaseのPostテーブルから
  const todos = await prisma.post.findMany();

  return NextResponse.json(
    {
      success: true,
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
      success: true,
      message: "Todoを正常に作成できました!",
      data: todo,
    },
    {
      status: 201,
    }
  );
}
