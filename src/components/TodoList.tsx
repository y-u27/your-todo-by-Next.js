// ・TODO詳細遷移
// ・フィルター
// ・ソート
"use client";
import {
  Box,
  Button,
  Card,
  CardBody,
  FormControl,
  FormLabel,
  HStack,
} from "@chakra-ui/react";
import { useState } from "react";

interface Todo {
  id: number;
  title: string;
  content: string;
  status: string;
}

const TodoList = () => {
  const [todos, setTodos] = useState<Todo[]>([]);

  const createTodo = () => {
    const newTodo: Todo = {
      id: 1,
      title: "サンプルTodoタイトル",
      content: "サンプルTodo内容",
      status: "未完了",
    };
    setTodos([...todos, newTodo]);
  };

  return (
    <>
      <Box display="flex" justifyContent="center" p={10}>
        <Button
          w={700}
          bgColor="#b0c4de"
          _hover={{ backgroundColor: "#4169e1", color: "white" }}
          onClick={createTodo}
        >
          Todo作成
        </Button>
      </Box>
      {todos.map((todo, id) => (
        <Card key={id} w={700} mx={370} mt={5} shadow="lg">
          <CardBody>
            <FormControl>
              <HStack>
                <FormLabel>Todo番号：{todo.id}</FormLabel>
              </HStack>
              <br />
              <HStack>
                <FormLabel>Todoタイトル：{todo.title}</FormLabel>
              </HStack>
              <br />
              <HStack>
                <FormLabel>Todo内容：{todo.content}</FormLabel>
              </HStack>
              <br />
              <HStack>
                <FormLabel>Todoステータス：{todo.status}</FormLabel>
              </HStack>
            </FormControl>
          </CardBody>
        </Card>
      ))}
    </>
  );
};

export default TodoList;
