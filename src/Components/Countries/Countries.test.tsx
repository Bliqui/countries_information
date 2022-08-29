import {
  screen,
  render,
  waitForElementToBeRemoved,
} from "@testing-library/react";
import { Countries } from "./Countries";
import { server } from "../../mocks/browser";
import { customRender } from "../../test-utils";

beforeAll(() => {
  // Establish requests interception layer before all tests.
  server.listen();
});

afterEach(() => {
  server.resetHandlers();
});

afterAll(() => {
  // Clean up after all tests are done, preventing this
  // interception layer from affecting irrelevant tests.
  server.close();
});

describe("Countries component", () => {
  it("should show loader, hide it and show list of countries after", async () => {
    customRender(<Countries searchResult="Poland" selectedOption="Europe" />);
    expect(await screen.findByTestId("spinner")).toBeInTheDocument();

    await waitForElementToBeRemoved(() => screen.queryByTestId("spinner"));

    expect(await screen.findByText(/Poland/i)).toBeInTheDocument();
    expect(await screen.findByText(/Warsaw/i)).toBeInTheDocument();
    expect(await screen.findByText(/Europe/i)).toBeInTheDocument();
  });

  it('shows "No countries found" if invalid value passed trough the search input', async () => {
    render(<Countries searchResult="ABCD" selectedOption="Europe" />);

    expect(await screen.findByTestId("spinner")).toBeInTheDocument();
    await waitForElementToBeRemoved(() => screen.queryByTestId("spinner"));

    expect(screen.getByText("No countries found")).toBeInTheDocument();
  });

  it("matches snapshot", async () => {
    const output = customRender(
      <Countries searchResult="Poland" selectedOption="Europe" />
    );
    expect(await screen.findByTestId("spinner")).toBeInTheDocument();
    await waitForElementToBeRemoved(() => screen.queryByTestId("spinner"));

    expect(await screen.findByText(/Poland/)).toBeInTheDocument();

    expect(output).toMatchSnapshot();
  });
});
