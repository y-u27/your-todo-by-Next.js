// ・TODO詳細遷移
// ・フィルター
// ・ソート
"use client";
import {
  Box,
  Button,
  Card,
  CardBody,
  HStack,
  Text,
} from "@chakra-ui/react";

const TodoList = () => {

  const MOCK_TODOS = [
    {
      id: 1,
      title: "サンプルTodoタイトル",
      content: "サンプルTodo内容",
      status: "未完了"
    },
    {
      id: 1,
      title: "サンプルTodoタイトル",
      content: "サンプルTodo内容",
      status: "未完了"
    },
    {
      id: 1,
      title: "サンプルTodoタイトル",
      content: "サンプルTodo内容",
      status: "未完了"
    }
  ]

  return (
    <>
      <Box display="flex" justifyContent="center" p={10}>
        <Button
          w={700}
          bgColor="#b0c4de"
          _hover={{ backgroundColor: "#4169e1", color: "white" }}
        >
          Todo作成
        </Button>
      </Box>
      {MOCK_TODOS.map((todo, id) => (
        <Card key={id} w={700} mx={370} mt={4} shadow="lg">
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
            </Box>
          </CardBody>
        </Card>
      ))}
    </>
  );
};

export default TodoList;
