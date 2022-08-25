import { rest } from "msw";
import { setupServer } from "msw/node";

type allCountriesDataType = {
  name: string;
  population: number;
  flag: string;
  region: string;
  capital: string;
};

export const server = setupServer(
  // Describe the requests to mock.
  rest.get<allCountriesDataType>(
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
  )
);
