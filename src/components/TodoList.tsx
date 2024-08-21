// ・TODO詳細遷移
// ・フィルター
// ・ソート
"use client";

import { TodoData } from "@/app/types/types";
import { todoState } from "@/atom/todoState";
import { Box, Button, Card, CardBody, HStack, Text } from "@chakra-ui/react";
import Link from "next/link";
import { useEffect } from "react";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";

export interface paramsProps {
  id: number;
  todos: TodoData[];
}

export default function TodoList({ id, todos }: paramsProps) {
  const [todosState, setTodos] = useRecoilState(todoState);

  useEffect(() => {
    setTodos(todos);
  }, [todos, setTodos]);

  return (
    <>
      <Box display="flex" justifyContent="center" p={10}>
        <Link href="/todos/create">
          <Button
            w={700}
            bgColor="#b0c4de"
            _hover={{
              backgroundColor: "#4169e1",
              color: "white",
            }}
            _active={{ transform: "scale(0.85)", opacity: 0.1 }}
          >
            Todo作成
          </Button>
        </Link>
      </Box>
      {todosState.map((todo) => (
        <Link key={todo.id} href={`/todos/${todo.id}`} onClick={() => setTodos([todo])}>
          <Card w={700} mx={370} mt={4} mb={4} shadow="lg">
            <CardBody>
              <Box>
                <HStack>
                  <Text>Todo番号：{todo.id}</Text>
                </HStack>
                <br />
                <HStack>
                  <Text>Todoタイトル：{todo.title}</Text>
                </HStack>
                <br />
                <HStack>
                  <Text>Todoステータス：{todo.status}</Text>
                </HStack>
              </Box>
            </CardBody>
          </Card>
        </Link>
      ))}
    </>
  );
}
