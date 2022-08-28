import React, { useContext } from "react";
import { Country } from "../Components/Countries/Country/Country";
import { useParams } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";
import { Text, Spinner } from "@chakra-ui/react";
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
}[];

export const CountryPage = () => {
  const { state } = useContext(CountriesContext);
  const params = useParams();

  console.log(state);
  const {
    data: recievedCountry,
    isLoading,
    error,
  } = useFetch<CountryReq>(
    `https://restcountries.com/v2/name/${params.countryId}`
  );

  if (error) {
    return <Text color="red">{error}</Text>;
  } else if (isLoading) {
    return <Spinner position="absolute" left="50%" mt="20%" size="lg" />;
  }
  return recievedCountry ? <Country country={recievedCountry[0]} /> : null;
};
