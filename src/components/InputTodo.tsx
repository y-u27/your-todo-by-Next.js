import { Button, FormControl, Input } from "@chakra-ui/react";

const InputTodo = () => {
  return (
    <div>
      <FormControl p={50} display="flex" justifyContent="center">
        <Input
          py={5}
          w={500}
          display="flex"
          borderRadius={10}
          placeholder="Todo入力"
        />
        <Button
          py={5}
          mx={1}
          bgColor="#b0c4de"
          _hover={{ backgroundColor: "#4169e1", color: "white" }}
        >
          Add
        </Button>
      </FormControl>
    </div>
  );
};

export default InputTodo;
