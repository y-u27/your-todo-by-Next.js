// Todoの一つひとつの詳細（投稿した日時・内容・ステータスなどを表示するページ）
import {
  Box,
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
        Todoの詳細
      </FormLabel>
      {/* <HStack mr="350px" p="30px"> */}
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
        </CardBody>
      </Card>
      {/* </HStack> */}
    </FormControl>
  );
};

export default TodoArticle;
