// ・TODO詳細遷移
// ・フィルター
// ・ソート

import { TodoData } from "@/app/types/types";
import { Box, Button, Card, CardBody, HStack, Text } from "@chakra-ui/react";
import Link from "next/link";

async function fetchAllTodos(): Promise<TodoData[]> {
  const res = await fetch(`http://localhost:3000/api/todos`, {
    cache: "no-store",
  });

  const data = await res.json();
  return data.data;
}

interface paramsProps {
  id: number;
}

export default async function TodoList({ id }: paramsProps) {
  const data: TodoData[] = await fetchAllTodos();

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
      <Link href={`/todos/${id}`}>
        {data.map((data) => (
          <Card key={data.id} w={700} mx={370} mt={4} mb={4} shadow="lg">
            <CardBody>
              <Box>
                <HStack>
                  <Text>Todo番号：{data.id}</Text>
                </HStack>
                <br />
                <HStack>
                  <Text>Todoタイトル：{data.title}</Text>
                </HStack>
                <br />
                <HStack>
                  <Text>Todoステータス：{data.status}</Text>
                </HStack>
              </Box>
            </CardBody>
          </Card>
        ))}
      </Link>
    </>
  );
}
