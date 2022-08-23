import { screen, render } from "@testing-library/react";

import { SelectInput } from "./SelectInput";
import userEvent from "@testing-library/user-event";

describe("SelectInput component", () => {
  const selectOptions = [
    { title: "Africa", name: "Africa" },
    { title: "Americas", name: "Americas" },
  ];

  const onSelect = jest.fn();

  beforeEach(() => {
    render(
      <SelectInput
        placeholder="hi"
        selectOptions={selectOptions}
        onSelect={onSelect}
      />
    );
  });

  it("component renders properly", () => {
    expect(screen.getByRole("combobox")).toBeInTheDocument();
  });

  it("should fire onSelect only once", async () => {
    await userEvent.selectOptions(getSelectInputEl(), "Africa");

    expect(onSelect).toBeCalledTimes(1);
  });

  it("should fire onSelect only once", async () => {
    await userEvent.selectOptions(getSelectInputEl(), "Africa");
    const selectedOptionHTML = screen.getByText("Africa") as HTMLOptionElement;

    expect(selectedOptionHTML.selected).toBeTruthy();
  });

  const getSelectInputEl = () => {
    return screen.getByRole("combobox");
  };
});
