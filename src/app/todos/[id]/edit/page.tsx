import TodoEdit from "@/components/TodoEdit";

const editPage = ({ params }: { params: { id: string } }) => {
  return (
    <TodoEdit id={Number(params.id)} />
  )
};

export default editPage;
