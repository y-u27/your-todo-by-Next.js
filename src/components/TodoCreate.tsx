// ・TODOタイトル候補
// ・TODO作成
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

const TodoCreate = () => {
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
          Todo作成ページ
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
                w={130}
                _hover={{ backgroundColor: "#ffd700", color: "white" }}
              >
                作成
              </Button>
            </Box>
          </CardBody>
        </Card>
      </FormControl>
    </>
  );
};

export default TodoCreate;
