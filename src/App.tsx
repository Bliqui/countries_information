import { Box } from "@chakra-ui/react";
import { Header } from "./Components/Header/Header";
import { Main } from "./Components/Main/Main";

export const App = () => (
  <Box w="100%" h="100%">
    <Header />
    <Main />
  </Box>
);
