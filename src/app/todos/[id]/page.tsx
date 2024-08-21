import TodoArticle from "@/components/TodoArticle";

const pageId = ({ params }: { params: { id: string } }) => {
  return (
    <>
      <TodoArticle id={Number(params.id)} />
    </>
  );
};

export default pageId;