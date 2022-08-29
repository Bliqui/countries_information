import { Box, chakra, Flex, Heading, HStack } from "@chakra-ui/react";
import { ColorModeSwitcher } from "../../ColorModeSwitcher";
import { Timer } from "./Timer/Timer";

export const Header = () => {
  return (
    <chakra.header
      py="20px"
      px="5px"
      boxShadow="0px 0px 10px 0px rgba(0, 0, 0, .4)"
    >
      <Flex
        maxW={{ sm: "90%", lg: "1100px" }}
        mx="auto"
        justifyContent="space-between"
        alignItems="center"
      >
        <Heading size={{ base: "lg", md: "xl" }}>Where in the world?</Heading>
        <HStack>
          {/* <Timer /> */}
          <ColorModeSwitcher justifySelf="flex-end" />
        </HStack>
      </Flex>
    </chakra.header>
  );
};
