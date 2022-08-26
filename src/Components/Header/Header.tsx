import { chakra, Heading } from "@chakra-ui/react";
import { ColorModeSwitcher } from "../../ColorModeSwitcher";

export const Header = () => {
  return (
    <chakra.header
      py="20px"
      display="flex"
      maxW={{ sm: "90%", lg: "1100px" }}
      mx="auto"
      justifyContent="space-between"
    >
      <Heading>Where in the world?</Heading>
      <ColorModeSwitcher justifySelf="flex-end" />
    </chakra.header>
  );
};
