import { rest } from "msw";
import { setupServer } from "msw/node";

type AllCountriesDataType = {
  name: string;
  population: number;
  flag: string;
  region: string;
  capital: string;
};

type CountryPageDataType = {
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
    latlng: [number, number];
  };
};

const handlers = [
  rest.get<AllCountriesDataType>(
    "https://restcountries.com/v3.1/all",
    (req, res, ctx) => {
      return res(
        ctx.json([
          {
            name: { common: "Poland" },
            population: 40000000,
            flags: { png: "url" },
            region: "Europe",
            capital: ["Warsaw"],
          },
          {
            name: { common: "Russia" },
            population: 60000000,
            flags: { png: "url" },
            region: "Europe",
            capital: ["Moscow"],
          },
        ])
      );
    }
  ),
];

export const server = setupServer();
// Describe the requests to mock.
