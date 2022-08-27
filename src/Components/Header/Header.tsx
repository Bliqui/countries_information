import { Box, chakra, Heading } from "@chakra-ui/react";
import { ColorModeSwitcher } from "../../ColorModeSwitcher";

export const Header = () => {
  return (
    <chakra.header py="20px" boxShadow="0px 0px 10px 0px rgba(0, 0, 0, .4)">
      <Box
        display="flex"
        maxW={{ sm: "90%", lg: "1100px" }}
        mx="auto"
        justifyContent="space-between"
      >
        <Heading>Where in the world?</Heading>
        <ColorModeSwitcher justifySelf="flex-end" />
      </Box>
    </chakra.header>
  );
};
