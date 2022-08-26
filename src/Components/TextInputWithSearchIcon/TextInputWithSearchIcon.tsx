import { InputGroup, InputLeftElement, Input } from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";

type InputProps = {
  width: string;
  placeholder: string;
  value: string;
  onChange: (text: string) => void;
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
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          onChange(e.target.value)
        }
        userSelect="none"
        type="text"
        placeholder={placeholder}
      />
    </InputGroup>
  );
};
