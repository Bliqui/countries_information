import {
  Image,
  Box,
  Button,
  HStack,
  Heading,
  VStack,
  Text,
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
  };
};

export const Country = ({ country }: CountryProps) => {
  return (
    <Box>
      <Button>
        <Link to="/">Back</Link>
      </Button>
      <HStack>
        <Image src={country.flag} alt="flag" />
        <Box>
          <Heading>{country.name}</Heading>
          <HStack>
            <VStack>
              <Text>Native Name: {country.nativeName}</Text>
              <Text>Population: {country.population}</Text>
              <Text>Region: {country.region}</Text>
              <Text>Sub Region: {country.subRegion}</Text>
              <Text>Capital: {country.capital}</Text>
            </VStack>
            <VStack>
              <Text>Top Level Domain: {country.topLevelDomain}</Text>
              <Text>
                Currencies:{" "}
                {country.currencies.map((c) => (
                  <Text>{c.name}</Text>
                ))}
              </Text>
              <Text>
                Languages:{" "}
                {country.languages.map((l) => (
                  <Text>{l.name}</Text>
                ))}
              </Text>
            </VStack>
          </HStack>
        </Box>
      </HStack>
    </Box>
  );
};
