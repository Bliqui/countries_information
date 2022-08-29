import React, { useContext, useEffect, useState } from "react";
import { Country } from "../Components/Countries/Country/Country";
import { useParams } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";
import { Text, Spinner, Flex } from "@chakra-ui/react";
import { CountriesContext } from "../context/context";

type CountryReq = {
  name: string;
  nativeName: string;
  capital: string;
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
  latlng: [number, number];
  alpha2Code: string;
  timezones: string[];
}[];

export const CountryPage = () => {
  const { state } = useContext(CountriesContext);
  const params = useParams();

  const {
    data: recievedCountry,
    isLoading,
    error,
  } = useFetch<CountryReq | CountryReq[number]>(
    `https://restcountries.com/v2/${state.param}/${params.countryId}`
  );

  if (error) {
    return <Text color="red">{error}</Text>;
  } else if (isLoading) {
    return (
      <Flex h="100%" justifyContent="center">
        <Spinner mt={{ base: "50%", md: "20%" }} mx="auto" size="lg" />
      </Flex>
    );
  }
  return recievedCountry ? (
    <Country
      country={
        Array.isArray(recievedCountry) ? recievedCountry[0] : recievedCountry
      }
    />
  ) : null;
};
