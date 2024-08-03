import TodoList from "@/components/TodoList";
import { TodoData } from "../types/types";

async function getTodoAllData() {
  const response = await fetch("http://localhost:3000/api/todos", {
    cache: "no-store",
  });

  const todoAllData: TodoData = await response.json();

  return todoAllData;
}

export default async function Home() {
  const todoAllData = await getTodoAllData();

  return (
    <>
      <TodoList />
    </>
  );
}
