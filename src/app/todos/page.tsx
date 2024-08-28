import TodoList from "@/components/TodoList";
import { TodoData } from "../types/types";

async function fetchAllTodos(): Promise<TodoData[]> {
  const res = await fetch(`https://your-todo-by-next-js.vercel.app/api/todos`, {
    cache: "no-store",
  });

  const data = await res.json();
  return data.data;
}

export default async function Home({ params }: { params: { id: number } }) {
  const data: TodoData[] = await fetchAllTodos();
  return (
    <>
      <TodoList id={params.id} todos={data} />
    </>
  );
}
