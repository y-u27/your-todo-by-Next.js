import { Box, Button, HStack } from "@chakra-ui/react";

const TodoList = () => {
  return (
    <>
      <HStack display="flex" justifyContent="center" spacing="24%">
        <Box>
          <Box>TodoList</Box>
        </Box>
        <Box>
          <Button mr={2} fontSize="xs">
            Edit
          </Button>
          <Button fontSize="xs">Delete</Button>
        </Box>
      </HStack>
    </>
  );
};

export default TodoList;
