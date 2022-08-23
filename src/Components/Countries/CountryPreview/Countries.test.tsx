import { screen, render } from "@testing-library/react";
import { Countries } from "../Countries";
import { rest } from "msw";
import { server } from "../../../mocks/browser";

describe("Countries component", () => {
  beforeAll(() => {
    // Establish requests interception layer before all tests.
    server.listen();
  });

  beforeEach(() => {
    server.restoreHandlers();
    render(<Countries searchResult="Poland" selectedOption="Europe" />);
  });

  afterAll(() => {
    // Clean up after all tests are done, preventing this
    // interception layer from affecting irrelevant tests.
    server.close();
  });

  it("should render component properly", async () => {
    const component = await screen.findByText(/Poland/i);

    expect(component).toBeInTheDocument();
  });

  it("renders with capital, population, flag and region information", async () => {
    const element = await screen.findByTestId("countryCard");

    expect(element.textContent).toContain("Region:Europe");
    expect(element.textContent).toContain("Capital:Warsaw");
  });
});
