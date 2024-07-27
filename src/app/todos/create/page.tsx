import InputTodo from "@/components/InputTodo";
import TodoList from "@/components/TodoList";
import React from "react";

const createPage = () => {
  return (
    <>
      <InputTodo />
      <TodoList />
    </>
  );
};

export default createPage;
