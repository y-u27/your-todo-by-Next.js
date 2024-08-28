// ・TODOタイトル候補
// ・TODO作成
"use client";

import {
  Box,
  Button,
  Card,
  CardBody,
  HStack,
  Input,
  Select,
  Text,
  useToast,
} from "@chakra-ui/react";
import { useRouter } from "next/navigation";
import { useRef } from "react";

const createTodos = async (
  title: string | undefined,
  content: string | undefined,
  status: string | undefined
) => {
  const res = await fetch(`https://your-todo-by-next-js.vercel.app/api/todos`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ title, content, status }),
  });

  return res.json();
};

const TodoCreate = () => {
  const router = useRouter();
  const titleRef = useRef<HTMLInputElement | null>(null);
  const contentRef = useRef<HTMLInputElement | null>(null);
  const statusRef = useRef<HTMLSelectElement | null>(null);
  const toast = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    toast({
      title: "Todo作成完了",
      description: "新しいTodoが作成されました!",
      status: "success",
      duration: 5000,
      isClosable: true,
    });

    await createTodos(
      titleRef.current?.value,
      contentRef.current?.value,
      statusRef.current?.value
    );

    router.push("/todos");
    router.refresh();
  };

  return (
    <>
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
          Todo作成ページ
        </Text>
        <Card w="50%" mx="320px" shadow="lg">
          <CardBody>
            <Box>
              <HStack>
                <Text>Todoタイトル：</Text>
                <Input
                  w="70%"
                  h={10}
                  ref={titleRef}
                  placeholder="タイトル入力"
                />
              </HStack>
              <br />
              <HStack>
                <Text>Todo内容：</Text>
                <Input
                  w="70%"
                  h={10}
                  ref={contentRef}
                  placeholder="Todoの内容を入力"
                />
              </HStack>
              <br />
              <HStack>
                <Text>Todoステータス：</Text>
                <Select mx="30px" ref={statusRef}>
                  <option value="未完了">未完了</option>
                  <option value="進行中">進行中</option>
                  <option value="完了">完了</option>
                </Select>
              </HStack>
            </Box>
            <Box pt={3} display="flex" justifyContent="center">
              <Button
                w={130}
                _hover={{ backgroundColor: "#ffd700", color: "white" }}
                onClick={handleSubmit}
              >
                作成
              </Button>
            </Box>
          </CardBody>
        </Card>
      </Box>
    </>
  );
};

export default TodoCreate;
