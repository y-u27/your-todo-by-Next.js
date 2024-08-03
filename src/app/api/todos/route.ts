import { NextResponse } from "next/server";
import prisma from "@/app/lib/prismaClient";

// 型定義
type TodoRequest = {
  title: string;
  content: string;
  status?: string;
};

// Todoを作成する関数
export async function POST(request: Request): Promise<NextResponse> {
  // リクエストを取得
  const { title, content, status }: TodoRequest = await request.json();

  //Todo作成
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
      message: "Todoが正常に作成されました",
      data: todo,
    },
    { status: 201 }
  );
}
