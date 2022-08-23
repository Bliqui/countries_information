import { screen, render, getElementError } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { TextInputWithSearchIcon } from "./TextInputWithSearchIcon";

describe("TextInputWithSeatchIcon component", () => {
  const onChange = jest.fn();

  let textInputEl: HTMLElement;

  beforeEach(() => {
    render(
      <TextInputWithSearchIcon
        placeholder="Search for country..."
        width="25rem"
        onChange={onChange}
        value={""}
      />
    );

    textInputEl = screen.getByRole("textbox");
  });

  it("renders properly", () => {
    expect(textInputEl).toBeInTheDocument();
  });

  it("should fire onChange while typing in input", async () => {
    await userEvent.type(textInputEl, "dupa");

    expect(onChange).toBeCalledTimes("dupa".length);
  });
});
