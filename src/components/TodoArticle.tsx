// Todoの一つひとつの詳細（投稿した日時・内容・ステータスなどを表示するページ）
//・TODO削除
//・コメント投稿機能
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
        <FormControl>
              <HStack>
                <FormLabel>Todoタイトル：</FormLabel>
                <Input w="70%" h={10} />
              </HStack>
              <br />
              <HStack>
                <FormLabel>Todo内容：</FormLabel>
                <Input w="70%" h={10} />
              </HStack>
              <br />
              <HStack>
                <FormLabel>Todoステータス：</FormLabel>
                <Input w="70%" h={10} />
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
