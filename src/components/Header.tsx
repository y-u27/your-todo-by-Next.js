import { Heading } from "@chakra-ui/react";

const Header = () => {
  return (
    <>
      <Heading
        color="white"
        bgColor="#afeeee"
        textAlign="center"
        h={20}
        size="lg"
        textShadow="1px 1px #0000cd"
        p={5}
      >
        Your Todo by Next.js
      </Heading>
    </>
  );
};

export default Header;
