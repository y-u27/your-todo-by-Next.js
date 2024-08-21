import TodoArticle from "@/components/TodoArticle";

const pageId = ({ params }: { params: { id: number } }) => {
  return (
    <>
      <TodoArticle id={params.id} />
    </>
  );
};

export default pageId;