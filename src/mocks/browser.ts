import { rest } from "msw";
import { setupServer } from "msw/node";

const buildResponse = () => new CountriesResponseBuilder();

const handlers = [
  rest.get("https://restcountries.com/v3.1/all", (req, res, ctx) => {
    const mockedResponse = [
      buildResponse()
        .withName("Poland")
        .withPopulation(45000000)
        .withFlags("www.poland.png")
        .withRegion("Europe")
        .withCapital("Warsaw")
        .build(),
      buildResponse()
        .withName("Russia")
        .withPopulation(45000000)
        .withFlags("www.russia.png")
        .withRegion("Europe")
        .withCapital("Moscow")
        .build(),
    ];

    return res(ctx.status(200), ctx.json(mockedResponse));
  }),
];

export const server = setupServer(...handlers);
class CountriesResponseBuilder {
  private _name = "";
  private _population = 0;
  private _flag = "";
  private _region = "";
  private _capital = "";

  withName(name: string) {
    this._name = name;
    return this;
  }

  withPopulation(population: number) {
    this._population = population;
    return this;
  }

  withFlags(url: string) {
    this._flag = url;
    return this;
  }

  withRegion(region: string) {
    this._region = region;
    return this;
  }

  withCapital(capital: string) {
    this._capital = capital;
    return this;
  }

  build() {
    return {
      name: {
        common: this._name,
      },
      population: this._population,
      flags: {
        png: this._flag,
      },
      region: this._region,
      capital: [this._capital],
    };
  }
}
