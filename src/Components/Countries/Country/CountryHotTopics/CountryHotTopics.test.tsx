import { screen, render } from "@testing-library/react";
import { server } from "../../../../mocks/browser";
import { CountryHotTopics } from "./CountryHotTopics";

beforeAll(() => {
  server.listen();
});

afterEach(() => {
  server.resetHandlers();
});

afterAll(() => {
  server.close();
});

describe("hot topics component", () => {
  it("renders properly", async () => {
    render(<CountryHotTopics countryFlag={"flag"} countryIso={"alpha2Code"} />);

    expect(await screen.findByText("Author: Petya")).toBeInTheDocument();
    expect(await screen.findByText("Shock content")).toBeInTheDocument();
    expect(
      await screen.findByText("Shock content happened")
    ).toBeInTheDocument();
    expect(
      await screen.findByText("Monday, August 29, 2022 at 10:00:28 AM GMT+2")
    ).toBeInTheDocument();

    expect(await screen.findByText("Author: Vasya")).toBeInTheDocument();
    expect(await screen.findByText("extra Shock content")).toBeInTheDocument();
    expect(
      await screen.findByText("Shock content happened twice")
    ).toBeInTheDocument();
    expect(
      await screen.findByText(
        "Thursday, September 29, 2022 at 10:00:28 AM GMT+2"
      )
    ).toBeInTheDocument();
  });

  it("matches snapshot", async () => {
    const output = render(
      <CountryHotTopics countryFlag={"flag"} countryIso={"alpha2Code"} />
    );
    expect(await screen.findByText("Author: Vasya")).toBeInTheDocument();
    expect(output).toMatchSnapshot();
  });
});
