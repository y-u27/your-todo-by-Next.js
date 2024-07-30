// Todoの一つひとつの詳細（投稿した日時・内容・ステータスなどを表示するページ）
import {
  Box,
  Button,
  Card,
  CardBody,
  FormControl,
  FormLabel,
} from "@chakra-ui/react";

const TodoArticle = () => {
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
          <Box>
            <Box borderBottom="1px" borderBottomColor="teal.300">
              投稿日時：
            </Box>
            <br />
            <Box borderBottom="1px" borderBottomColor="teal.300">
              Todo内容：
            </Box>
            <br />
            <Box borderBottom="1px" borderBottomColor="teal.300">
              ステータス：
            </Box>
          </Box>
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
