// Todoの一つひとつの詳細（投稿した日時・内容・ステータスなどを表示するページ）
//・TODO削除
//・コメント投稿機能

// 詳細を表示するだけで良いので、表示ができて入力はできないように実装
"use client";

import {
  Box,
  Button,
  Card,
  CardBody,
  FormControl,
  FormLabel,
  HStack,
  Input,
} from "@chakra-ui/react";
import { useState } from "react";

interface Todo {
  title: string;
  content: string;
  status: string;
}

const TodoArticle = () => {
  const newTodo: Todo = {
    title: "サンプルTodoタイトル",
    content: "サンプルTodo内容",
    status: "未完了",
  };

  return (
    <FormControl padding="100px">
      <FormLabel
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
      </FormLabel>
      <Card w="50%" mx="320px" shadow="lg">
        <CardBody>
          <FormControl>
            <HStack>
              <FormLabel>Todoタイトル：{newTodo.title}</FormLabel>
            </HStack>
            <br />
            <HStack>
              <FormLabel>Todo内容：{newTodo.content}</FormLabel>
            </HStack>
            <br />
            <HStack>
              <FormLabel>Todoステータス：{newTodo.status}</FormLabel>
            </HStack>
          </FormControl>
          <Box pt={3} display="flex" justifyContent="center">
            <Button
              w={16}
              mr={3}
              _hover={{ backgroundColor: "#00fa9a", color: "white" }}
            >
              編集
            </Button>
            <Button _hover={{ backgroundColor: "#dc143c", color: "white" }}>
              削除
            </Button>
          </Box>
        </CardBody>
      </Card>
    </FormControl>
  );
};

export default TodoArticle;
