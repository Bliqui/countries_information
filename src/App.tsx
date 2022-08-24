import { Box } from "@chakra-ui/react";
import { Header } from "./Components/Header/Header";
import { Main } from "./Components/Main/Main";
import { AppProvider } from "./context/context";

export const App = () => (
  <AppProvider>
    <Box w="100%" h="100%">
      <Main />
    </Box>
  </AppProvider>
);
