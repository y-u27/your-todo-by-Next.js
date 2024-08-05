// GET→〜/api/todos/[id]：特定のtodoを取得する
// PATCH→〜/api/todos/[id]：特定のtodoを更新す
// DELETE→〜/api/todos/[id]：特定のtodoを削除する

import { NextResponse } from "next/server";
import prisma from "@/app/lib/prismaClient";

interface Params {
  id: string;
}

// 特定のtodoを取得
export async function GET(request: Request, { params }: { params: Params }) {
  const id = parseInt(params.id);

  const todo = await prisma.post.findUnique({
    where: {
      id: id,
    },
  });

  if (!todo) {
    //レスポンスJSONを返します
    return NextResponse.json(
      {
        sucess: true,
        message: "詳細データメモが見つかりません!",
        data: null,
      },
      {
        status: 404,
      }
    );
  }

  //レスポンスJSONを返します
  return NextResponse.json(
    {
      sucess: true,
      message: "詳細Todoデータ",
      data: todo,
    },
    {
      status: 200,
    }
  );
}

// 特定のtodoの更新
export async function PATCH(request: Request, { params }: { params: Params }) {
  const id = parseInt(params.id);

  const { title, content, status } = await request.json();

  const todo = await prisma.post.update({
    where: {
      id,
    },
    data: {
      title,
      content,
      status,
    },
  });

  return NextResponse.json(
    {
      sucess: true,
      message: "Todo更新",
      data: todo,
    },
    {
      status: 200,
    }
  );
}

// 特定のtodoの削除
export async function DELETE(request: Request, { params }: { params: Params }) {
  const id = parseInt(params.id);

  await prisma.post.delete({
    where: {
      id,
    },
  });

  return NextResponse.json(
    {
      sucess: true,
      message: "Todo削除",
    },
    {
      status: 200,
    }
  );
}
