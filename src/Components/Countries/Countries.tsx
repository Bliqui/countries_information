import { SimpleGrid, Spinner, Text, Flex } from "@chakra-ui/react";
import { useContext, useEffect } from "react";
import { CountriesContext } from "../../context/context";
import { useFetch } from "../../hooks/useFetch";
import { DataType } from "../DataType";
import { CountryPreview } from "./CountryPreview/CountryPreview";

export const Countries = ({
  searchResult,
  selectedOption,
}: {
  searchResult: string;
  selectedOption: string;
}) => {
  const {
    data: receivedCountries,
    isLoading,
    error,
  } = useFetch<DataType[]>("https://restcountries.com/v3.1/all");

  const { state, dispatch } = useContext(CountriesContext);

  const isRequestNeeded = () => {
    if (state.countries.length === receivedCountries?.length) {
      return state.countries;
    }
    dispatch({
      type: "ADD_COUNTRIES",
      payload: receivedCountries,
    });
  };

  useEffect(() => {
    isRequestNeeded();
  }, [receivedCountries]);

  let sortedCountries =
    state.countries &&
    state.countries.filter((country) => {
      if (selectedOption === "") {
        return true;
      }
      return country.region === selectedOption;
    });

  let filteredCountries =
    sortedCountries &&
    sortedCountries.filter(({ name }) => {
      return name.common.toLowerCase().includes(searchResult.toLowerCase());
    });

  if (filteredCountries?.length === 0) {
    filteredCountries = sortedCountries;
  }

  return (
    <Flex flexDir="column" mt="50px">
      {error && <Text>{error}</Text>}
      {isLoading ? (
        <Spinner mt="20%" alignSelf="center" size="lg" />
      ) : (
        <SimpleGrid
          alignItems="center"
          rowGap="80px"
          columnGap="60px"
          minChildWidth="320px"
        >
          {filteredCountries?.length ? (
            filteredCountries.map(
              ({ name, flags, population, region, capital }) => {
                return (
                  <CountryPreview
                    key={name.common}
                    src={flags.png}
                    title={name.common}
                    population={population}
                    region={region}
                    capital={capital?.[0] ? capital?.[0] : ""}
                  />
                );
              }
            )
          ) : (
            <Text color="red.500" textAlign="center">
              No countries found
            </Text>
          )}
        </SimpleGrid>
      )}
    </Flex>
  );
};