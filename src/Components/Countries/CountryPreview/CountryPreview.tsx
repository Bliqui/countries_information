import { VStack, Image, Box, Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { CountryDescription } from "./CountryDescription/CountryDescription";

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
  return (
    <VStack
      bgColor="gray.200"
      _dark={{ bgColor: "gray.700" }}
      borderRadius="10px"
      alignItems="center"
      w="320px"
      h="400px"
      mx="auto"
      data-testid="countryCard"
    >
      <Box h="180px" w="100%">
        <Image
          borderTopLeftRadius="10px"
          borderTopRightRadius="10px"
          src={src}
          h="100%"
          w="100%"
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
      <Link to={`country/${title.toLowerCase()}`}>
        <Button mt="5px" _hover={{ bgColor: "whiteAlpha.800" }}>
          Details
        </Button>
      </Link>
    </VStack>
  );
};
