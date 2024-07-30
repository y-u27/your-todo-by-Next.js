// ・TODO詳細遷移
// ・フィルター
// ・ソート
import { Box, Button } from "@chakra-ui/react";

const TodoList = () => {
  return (
    <Box display="flex" justifyContent="center" p={10}>
      <Button
        w={700}
        bgColor="#b0c4de"
        _hover={{ backgroundColor: "#4169e1", color: "white" }}
      >
        Todo作成
      </Button>
    </Box>
  );
};

export default TodoList;
