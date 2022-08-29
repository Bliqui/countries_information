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

export const server = setupServer(
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
  rest.get<AllCountriesDataType>(
    `https://newsapi.org/v2/top-headlines?country=RUS`,
    (req, res, ctx) => {
      return res(
        ctx.json({
          articles: [
            {
              author: "Petya",
              title: "Shock content",
              description: "Shock content happened",
              url: "some url",
              publishedAt: "2022-08-29T08:00:28Z",
            },
            {
              author: "Vasya",
              title: "extra Shock content",
              description: "Shock content happened twice",
              url: "some url2",
              publishedAt: "2022-09-29T08:00:28Z",
            },
          ],
        })
      );
    }
  )
);
// Describe the requests to mock.
