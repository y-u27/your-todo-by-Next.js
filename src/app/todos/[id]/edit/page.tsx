import TodoEdit from "@/components/TodoEdit";

const editPage = ({ params }: { params: { id: number } }) => {
  return (
    <TodoEdit id={params.id} />
  )
};

export default editPage;
