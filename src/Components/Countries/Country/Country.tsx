import {
  Image,
  Box,
  Button,
  HStack,
  Heading,
  VStack,
  Text,
  chakra,
  Badge,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { ArrowBackIcon } from "@chakra-ui/icons";
import { LanguageServiceMode } from "typescript";

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
  const navigate = useNavigate();
  const navigateToHome = () => navigate("/");
  return (
    <Box pt="30px">
      <Box maxW="1100px" mx="auto">
        <Button
          aria-label="button to the main page"
          mb="40px"
          leftIcon={<ArrowBackIcon />}
          onClick={navigateToHome}
        >
          Back
        </Button>
        <HStack spacing="80px">
          <Image w="500px" h="400px" src={country.flag} alt="flag" />
          <Box>
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
                  <chakra.span fontWeight="600">Level Domain: </chakra.span>Top
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
        </HStack>
      </Box>
    </Box>
  );
};
