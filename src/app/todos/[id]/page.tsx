import { Article } from "@/app/types/types";
import TodoArticle from "@/components/TodoArticle";

const pageId = ({ id }: Article) => {
  console.log("ID in pageId:", id);
  
  return (
    <>
      <TodoArticle id={id} />
    </>
  );
};

export default pageId;
