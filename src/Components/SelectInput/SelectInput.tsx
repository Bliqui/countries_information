import { Select } from "@chakra-ui/react";
import React from "react";

type SelectInputProps = {
  placeholder: string;
  selectOptions: { title: string; name: string }[];
  onSelect: (value: string) => void;
};

export const SelectInput = ({
  placeholder,
  selectOptions,
  onSelect,
}: SelectInputProps) => {
  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    onSelect(e.target.value);
  };

  return (
    <Select
      maxW="300px"
      placeholder={placeholder}
      onChange={handleChange}
      minW="100px"
    >
      {selectOptions.map(({ title, name }) => {
        return (
          <option key={name} value={name}>
            {title}
          </option>
        );
      })}
    </Select>
  );
};
