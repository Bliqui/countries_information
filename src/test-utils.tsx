import * as React from "react";
import { render, RenderOptions } from "@testing-library/react";
import { ChakraProvider, theme } from "@chakra-ui/react";
import { AppProvider } from "./context/context";
import { BrowserRouter } from "react-router-dom";

const AllProviders = ({ children }: { children?: React.ReactNode }) => (
  <AppProvider>
    <BrowserRouter>
      <ChakraProvider theme={theme}>{children}</ChakraProvider>
    </BrowserRouter>
  </AppProvider>
);

const customRender = (ui: React.ReactElement, options?: RenderOptions) =>
  render(ui, { wrapper: AllProviders, ...options });

export { customRender };
