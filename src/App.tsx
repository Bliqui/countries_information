import { Box } from "@chakra-ui/react";
import { Main } from "./Components/Main/Main";
import { AppProvider } from "./context/context";

export const App = () => (
  <Box w="100%" h="100%">
    <Main />
  </Box>
);
