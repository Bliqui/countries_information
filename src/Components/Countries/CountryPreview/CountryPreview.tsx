import { VStack, Image, Box, Button, Link } from "@chakra-ui/react";
import { CountryDescription } from "./CountryDescription/CountryDescription";
import { LinkAsButtonRouter } from "../../LinkAsButtonRouter/LinkAsButtonRouter";
import { useContext } from "react";
import { CountriesContext } from "../../../context/context";

type CountryProps = {
  src: string;
  title: string;
  population: number;
  region: string;
  capital: string;
};

export const CountryPreview = ({
  src,
  title,
  population,
  region,
  capital,
}: CountryProps) => {
  const { state, dispatch } = useContext(CountriesContext);

  const setParams = () => {
    dispatch({ type: "SET_PARAM", payload: [], param: "alpha" });
  };

  return (
    <VStack
      bgColor="gray.200"
      _dark={{ bgColor: "gray.700" }}
      borderRadius="10px"
      alignItems="center"
      w="320px"
      minH="400px"
      mx="auto"
      data-testid="countryCard"
      boxShadow="0px 0px 8px 0px rgba(66, 68, 90, .6)"
    >
      <Box h="180px" w="100%">
        <Image
          borderTopLeftRadius="10px"
          borderTopRightRadius="10px"
          src={src}
          h="100%"
          w="100%"
          userSelect="none"
        />
      </Box>
      <Box width="100%" px="20px" mt="20px" textAlign="start">
        <CountryDescription
          title={title}
          population={population}
          region={region}
          capital={capital}
        />
      </Box>
      <LinkAsButtonRouter
        py="8px"
        px="20px"
        borderRadius="10px"
        _hover={{ textTransform: "none", bgColor: "whiteAlpha.900" }}
        _active={{ bgColor: "blackAlpha.400" }}
        _dark={{
          bgColor: "blackAlpha.500",
          _hover: { bgColor: "whiteAlpha.200" },
        }}
        bgColor="whiteAlpha.700"
        navigateTo={`country/${title.toLowerCase()}`}
        boxShadow="0px 0px 4px 0px rgba(66, 68, 90, 1)"
        display="block"
        onClick={setParams}
      >
        Details
      </LinkAsButtonRouter>
    </VStack>
  );
};
