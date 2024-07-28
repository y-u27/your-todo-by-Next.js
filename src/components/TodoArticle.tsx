// Todoの一つひとつの詳細（投稿した日時・内容・ステータスなどを表示するページ）
import { Box, FormControl, FormLabel, HStack } from "@chakra-ui/react";

const TodoArticle = () => {
  return (
    <FormControl>
      <FormLabel display="flex" justifyContent="center">
        Todoの詳細
      </FormLabel>
      <HStack display="flex" justifyContent="center">
        <Box>
          <Box>投稿日時：</Box>
          <Box>Todo内容：</Box>
          <Box>ステータス：</Box>
        </Box>
      </HStack>
    </FormControl>
  );
};

export default TodoArticle;
