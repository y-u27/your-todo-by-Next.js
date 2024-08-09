// 一つひとつの詳細（タイトル・内容・期限・ステータスなどを表示するページ）
//・TODO削除
//・コメント投稿機能
"use client";

import { Box, Button, Card, CardBody, HStack, Text } from "@chakra-ui/react";
import Link from "next/link";

const TodoArticle = () => {
  interface Todo {
    id: number;
    title: string;
    content: string;
    status: string;
  }

  const MOCK_TODOS: Todo[] = [
    {
      id: 1,
      title: "サンプルTodoタイトル",
      content: "サンプルTodo内容",
      status: "未完了",
    },
  ];

  const todo = MOCK_TODOS[0];

  return (
    <Box padding="100px">
      <Text
        w="50%"
        mx="320px"
        display="flex"
        justifyContent="center"
        alignItems="center"
        bgColor="blue.200"
        color="white"
        fontSize={16}
        mb={5}
      >
        Todo詳細ページ
      </Text>
      <Card w="50%" mx="320px" shadow="lg">
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
              <Text>Todo内容：{todo.content}</Text>
            </HStack>
            <br />
            <HStack>
              <Text>Todoステータス：{todo.status}</Text>
            </HStack>
            <Box pt={3} display="flex" justifyContent="center">
              <Link href="/todos/${id}/edit">
                <Button
                  w={16}
                  mr={3}
                  _hover={{ backgroundColor: "#00fa9a", color: "white" }}
                >
                  編集
                </Button>
              </Link>
              <Button _hover={{ backgroundColor: "#dc143c", color: "white" }}>
                削除
              </Button>
            </Box>
          </Box>
        </CardBody>
      </Card>
    </Box>
  );
};

export default TodoArticle;
