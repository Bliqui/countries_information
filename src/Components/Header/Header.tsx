import { chakra, Heading } from "@chakra-ui/react";
import { ColorModeSwitcher } from "../../ColorModeSwitcher";

export const Header = () => {
  return (
    <chakra.header
      py="20px"
      display="flex"
      maxW={{ base: "90%", md: "1100px" }}
      mx="auto"
      justifyContent="space-between"
    >
      <Heading>Where in the world?</Heading>
      <ColorModeSwitcher justifySelf="flex-end" />
    </chakra.header>
  );
};
