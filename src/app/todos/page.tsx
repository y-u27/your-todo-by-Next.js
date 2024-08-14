import TodoList from "@/components/TodoList";

export default async function Home({ params }: { params: { id: number } }) {
  return (
    <>
      <TodoList id={params.id} />
    </>
  );
}
