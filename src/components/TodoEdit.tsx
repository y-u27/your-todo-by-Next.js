import {
  Box,
  Button,
  Card,
  CardBody,
  FormControl,
  FormLabel,
} from "@chakra-ui/react";

const TodoEdit = () => {
  return (
    <>
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
          Todo編集ページ
        </FormLabel>
        <Card w="50%" mx="320px" shadow="lg">
          <CardBody>
            <Box>
              <Box borderBottom="1px" borderBottomColor="teal.300">
                Todoタイトル：
              </Box>
              <br />
              <Box borderBottom="1px" borderBottomColor="teal.300">
                Todo内容：
              </Box>
              <br />
              <Box borderBottom="1px" borderBottomColor="teal.300">
                期限：
              </Box>
              <br />
              <Box borderBottom="1px" borderBottomColor="teal.300">
                ステータス：
              </Box>
            </Box>
            <Box pt={3} display="flex" justifyContent="center">
              <Button
                w={130}
                _hover={{ backgroundColor: "#ffd700", color: "white" }}
              >
                保存
              </Button>
            </Box>
          </CardBody>
        </Card>
      </FormControl>
    </>
  );
};

export default TodoEdit;
