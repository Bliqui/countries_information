import React from "react";
import { Country } from "../Components/Countries/Country/Country";
import { useParams } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";
import { Text, Spinner } from "@chakra-ui/react";

type countryReq = {
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
}[];

export const CountryPage = () => {
  const params = useParams();
  const {
    data: recievedCountry,
    isLoading,
    error,
  } = useFetch<countryReq>(
    `https://restcountries.com/v2/name/${params.countryId}`
  );

  if (error) {
    return <Text color="red">{error}</Text>;
  } else if (isLoading) {
    return <Spinner position="absolute" left="50%" mt="20%" size="lg" />;
  }
  return recievedCountry ? <Country country={recievedCountry[0]} /> : null;
};
