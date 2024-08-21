// 一つひとつの詳細（タイトル・内容・期限・ステータスなどを表示するページ）
//・TODO削除
//・コメント投稿機能
// 一覧画面から詳細画面に遷移する
// 詳細画面URLからtodoのidを取得する
// idを元に/api/todos/{id}からtodoの詳細情報を取得する
// 3で取得したtodoの詳細情報を詳細画面に表示する
"use client";

import { TodoData } from "@/app/types/types";
import { todoState } from "@/atom/todoState";
import {
  Box,
  Button,
  Card,
  CardBody,
  HStack,
  Text,
  Toast,
  useToast,
} from "@chakra-ui/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useRecoilValue } from "recoil";

export interface paramsProps {
  id: number;
}

const TodoArticle = ({ id }: paramsProps) => {
  const router = useRouter();
  const toast = useToast();
  const todosArticle: TodoData[] | undefined = useRecoilValue(todoState);

  const todosArticles = todosArticle?.find((todo) => todo.id === id);

  if (!todosArticles) {
    return (
      <Box padding="100px">
        <Text
          w="50%"
          mx="320px"
          display="flex"
          justifyContent="center"
          alignItems="center"
          bgColor="red.200"
          color="white"
          fontSize={16}
          mb={5}
        >
          Todoが見つかりませんでした。
        </Text>
      </Box>
    );
  }

  const handleDelete = async () => {
    try {
      const response = await fetch(`http://localhost:3000/api/todos/${id}`, {
        method: "DELETE",
      });

      if (response.ok) {
        toast({
          title: "Todo削除",
          description: "Todoを削除しました!",
          status: "success",
          duration: 3000,
          isClosable: true,
        });
        router.push("/todos");
        router.refresh();
      } else {
        toast({
          title: "Todo削除不可",
          description: "Todoを削除できませんでした",
          status: "success",
          duration: 3000,
          isClosable: true,
        });
      }
    } catch (error) {
      toast({
        title: "エラー発生",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    }
  };

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
              <Text>Todo番号：{todosArticles.id}</Text>
            </HStack>
            <br />
            <HStack>
              <Text>Todoタイトル：{todosArticles.title}</Text>
            </HStack>
            <br />
            <HStack>
              <Text>Todo内容：{todosArticles.content}</Text>
            </HStack>
            <br />
            <HStack>
              <Text>Todoステータス：{todosArticles.status}</Text>
            </HStack>
            <Box pt={3} display="flex" justifyContent="center">
              <Link href={`/todos/${id}/edit`}>
                <Button
                  w={16}
                  mr={3}
                  _hover={{ backgroundColor: "#00fa9a", color: "white" }}
                >
                  編集
                </Button>
              </Link>
              <Button
                _hover={{ backgroundColor: "#dc143c", color: "white" }}
                onClick={handleDelete}
              >
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
