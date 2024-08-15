import { Article } from "@/app/types/types";
import TodoArticle from "@/components/TodoArticle";

const pageId = ({ id }: Article) => {
  
  return (
    <>
      <TodoArticle id={id} />
    </>
  );
};

export default pageId;
