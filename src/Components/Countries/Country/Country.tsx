import {
  Image,
  Box,
  HStack,
  Heading,
  VStack,
  Text,
  chakra,
  Badge,
  Flex,
} from "@chakra-ui/react";
import { ArrowBackIcon } from "@chakra-ui/icons";
import { Map } from "./Map/Map";
import { LinkAsButtonRouter } from "../../LinkAsButtonRouter/LinkAsButtonRouter";

type CountryProps = {
  country: {
    name: string;
    capital: string;
    nativeName: string;
    population: number;
    region: string;
    subRegion: string;
    topLevelDomain: string[];
    currencies: { code: string; name: string; symbol: string }[];
    languages: {
      name: string;
      nativeName: string;
    }[];
    flag: string;
    borders: string[];
  };
};

export const Country = ({ country }: CountryProps) => {
  return (
    <Box _dark={{ bgColor: "gray.700" }} bgColor="gray.200" py="30px">
      <Box maxW={{ base: "90%", md: "1100px" }} mx="auto">
        <LinkAsButtonRouter
          py="8px"
          px="20px"
          mb="40px"
          display="flex"
          alignItems="center"
          gap="5px"
          maxW="100px"
          borderRadius="10px"
          _hover={{ textTransform: "none", bgColor: "whiteAlpha.900" }}
          _active={{ bgColor: "blackAlpha.400" }}
          _dark={{
            bgColor: "blackAlpha.500",
            _hover: { bgColor: "whiteAlpha.200" },
          }}
          bgColor="whiteAlpha.700"
          navigateTo={`/`}
        >
          <ArrowBackIcon />
          Back
        </LinkAsButtonRouter>
        <Flex
          direction={{ base: "column", md: "row" }}
          alignItems={{ base: "center" }}
          gap="80px"
        >
          <Image
            w={{ base: "100%", md: "500px" }}
            h={{ md: "100%" }}
            src={country.flag}
            alt="flag"
          />
          <Box maxW={{ base: "90%" }} mx={{ base: "auto" }}>
            <Heading py="30px">{country.name}</Heading>
            <HStack spacing="60px" alignItems="flex-start">
              <VStack alignItems="flex-start">
                <Text>
                  <chakra.span fontWeight="600">Native Name: </chakra.span>
                  {country.nativeName}
                </Text>
                <Text>
                  <chakra.span fontWeight="600">Population: </chakra.span>
                  {Intl.NumberFormat().format(country.population)}
                </Text>
                <Text>
                  <chakra.span fontWeight="600">Region: </chakra.span>
                  {country.region}
                </Text>
                <Text>
                  <chakra.span fontWeight="600">Sub Region: </chakra.span>
                  {country.subRegion ? country.subRegion : "None"}
                </Text>
                <Text>
                  <chakra.span fontWeight="600">Capital: </chakra.span>
                  {country.capital}
                </Text>
              </VStack>
              <VStack alignItems="flex-start">
                <Text>
                  <chakra.span fontWeight="600">Top Level Domain: </chakra.span>
                  {country.topLevelDomain}
                </Text>
                <Text>
                  <chakra.span fontWeight="600">Currencies: </chakra.span>
                  {country.currencies.map((cur, i) => (
                    <chakra.span key={cur.name}>
                      {country.currencies.length === i + 1
                        ? cur.name
                        : cur.name + ","}
                    </chakra.span>
                  ))}
                </Text>
                <Text>
                  <chakra.span fontWeight="600">Languages: </chakra.span>
                  {country.languages.map((l, i) => (
                    <chakra.span pr="5px" key={l.name}>
                      {country.languages.length === i + 1
                        ? l.name
                        : l.name + ","}
                    </chakra.span>
                  ))}
                </Text>
              </VStack>
            </HStack>
            <Text mt="40px">
              <chakra.span fontWeight="600">Border Countries: </chakra.span>
              {country.borders ? (
                country.borders.map((country) => {
                  return (
                    <Badge mx="5px" key={country}>
                      {country}
                    </Badge>
                  );
                })
              ) : (
                <chakra.span>None</chakra.span>
              )}
            </Text>
          </Box>
        </Flex>
        <Map />
      </Box>
    </Box>
  );
};
