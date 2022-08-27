import {
  screen,
  render,
  waitForElementToBeRemoved,
} from "@testing-library/react";

import { Country } from "./Country";
import { CountryProps } from "../Country/Country";
import { customRender } from "../../../test-utils";

const mockedCountry: CountryProps["country"] = {
  name: "Poland",
  capital: "Warsaw",
  nativeName: "Polska",
  population: 40000000,
  region: "Europe",
  subRegion: "None",
  topLevelDomain: [".pl"],
  currencies: [{ name: "Polish Złoty", code: "zl", symbol: "2" }],
  languages: [
    {
      name: "Polish",
      nativeName: "język polski",
    },
  ],
  flag: "flag.png",
  borders: ["BLR", "CZE", "DEU", "LTU", "RUS", "SVK", "UKR"],
  latlng: [52.0, 20.0],
  alpha2Code: "Pl",
};

describe("Country Component", () => {
  it("renders properly", async () => {
    customRender(<Country country={mockedCountry} />);

    expect(await screen.findByText(/Poland/i)).toBeInTheDocument();
    expect(await screen.findByText(/Warsaw/i)).toBeInTheDocument();
    expect(await screen.findByText(/Europe/i)).toBeInTheDocument();
  });
});
