import { InputGroup, InputLeftElement, Input } from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
import { ChangeEvent } from "react";

type InputProps = {
  width: string;
  placeholder: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
};

export const TextInputWithSearchIcon = ({
  width,
  placeholder,
  value,
  onChange,
}: InputProps) => {
  return (
    <InputGroup mx={{ base: "auto", sm: "0" }} w={{ base: "300px" }}>
      <InputLeftElement
        pointerEvents="none"
        children={<SearchIcon color="gray.300" />}
      />
      <Input
        w={width}
        value={value}
        onChange={onChange}
        type="text"
        placeholder={placeholder}
      />
    </InputGroup>
  );
};
