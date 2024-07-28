import { Box, Button, Flex, ListItem, UnorderedList } from "@chakra-ui/react";

const TodoList = () => {
  return (
    <Flex display="flex" justifyContent="center">
      <Box display="flex" justifyContent="space-between">TodoList</Box>
      <Box>
        <Button mr={2} fontSize="xs">Edit</Button>
        <Button mr={2} fontSize="xs">Delete</Button>
      </Box>
    </Flex>
    // <UnorderedList listStyleType="none" >
    //   <ListItem></ListItem>
    // </UnorderedList>
  );
};

export default TodoList;
