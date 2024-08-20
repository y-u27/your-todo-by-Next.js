import { TodoData } from "@/app/types/types";
import TodoArticle from "@/components/TodoArticle";

async function fetchAllTodos(): Promise<TodoData[]> {
  const res = await fetch(`http://localhost:3000/api/todos`, {
    cache: "no-store",
  });

  const data = await res.json();
  return data.data;
}

export default async function pageId({ params }: { params: { id: number } }) {
  const data: TodoData[] = await fetchAllTodos();
  return (
    <>
      <TodoArticle id={params.id} todos={data} />
    </>
  );
};