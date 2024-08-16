//・TODO編集
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

interface paramsProps {
  id: number;
}

const editTodos = async (
  title: string | undefined,
  content: string | undefined,
  status: string | undefined,
  id: number
) => {
  const res = await fetch(`http://localhost:3000/api/todos/${id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ title, content, status }),
  });
};

const TodoEdit = ({ id }: paramsProps) => {
  const router = useRouter();
  const toast = useToast();
  const titleRef = useRef<HTMLInputElement | null>(null);
  const contentRef = useRef<HTMLInputElement | null>(null);
  const statusRef = useRef<HTMLSelectElement | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    toast({
      title: "Todo更新",
      description: "Todoが更新されました!",
      status: "success",
      duration: 5000,
      isClosable: true,
    });

    await editTodos(
      titleRef.current?.value,
      contentRef.current?.value,
      statusRef.current?.value,
      id
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
          Todo編集ページ
        </Text>
        <Card w="50%" mx="320px" shadow="lg">
          <CardBody>
            <Box>
              <HStack>
                <Text>Todoタイトル：</Text>
                <Input w="70%" h={10} ref={titleRef} />
              </HStack>
              <br />
              <HStack>
                <Text>Todo内容：</Text>
                <Input w="70%" h={10} ref={contentRef} />
              </HStack>
              <br />
              <HStack>
                <Text>ステータス：</Text>
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
                更新
              </Button>
            </Box>
          </CardBody>
        </Card>
      </Box>
    </>
  );
};

export default TodoEdit;
