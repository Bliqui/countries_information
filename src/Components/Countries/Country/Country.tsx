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
import { Link } from "react-router-dom";

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
    <Box>
      <Box maxW="1100px" mx="auto">
        <Button mb="40px">
          <Link to="/">Back</Link>
        </Button>
        <HStack spacing="80px">
          <Image w="500px" h="400px" src={country.flag} alt="flag" />
          <Box>
            <Heading py="30px">{country.name}</Heading>
            <HStack alignItems="flex-start">
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
                  {country.subRegion}
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
                  {country.currencies.map((c) => (
                    <Text key={c.name}>{c.name}</Text>
                  ))}
                </Text>
                <Text>
                  <chakra.span fontWeight="600">Languages: </chakra.span>
                  {country.languages.map((l) => (
                    <Text key={l.name}>{l.name}</Text>
                  ))}
                </Text>
              </VStack>
            </HStack>
            <Text mt="40px">
              <chakra.span fontWeight="600">Border Countries:</chakra.span>
              {country.borders.map((country) => (
                <Badge mx="5px" key={country}>
                  {country}
                </Badge>
              ))}
            </Text>
          </Box>
        </HStack>
      </Box>
    </Box>
  );
};
