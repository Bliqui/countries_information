import { Box, Flex } from "@chakra-ui/react";
import { useState } from "react";
import { Countries } from "../Countries/Countries";
import { SelectInput } from "../SelectInput/SelectInput";
import { TextInputWithSearchIcon } from "../TextInputWithSearchIcon/TextInputWithSearchIcon";
import { ScrollToTop } from "../ScrollToTop/ScrollToTop";

const selectOptions = [
  { title: "Africa", name: "Africa" },
  { title: "Americas", name: "Americas" },
  { title: "Asia", name: "Asia" },
  { title: "Europe", name: "Europe" },
  { title: "Oceania", name: "Oceania" },
];

export const Main = () => {
  const [inputValue, setInputValue] = useState("");
  const [selectedOption, setSelectedOption] = useState("");

  return (
    <Box maxW="1100px" mx="auto">
      <Flex py="30px" flexDir="column">
        <Flex
          flexDir={{ base: "column", md: "row" }}
          mx={{ base: "auto", md: "0" }}
          alignItems={{ base: "center", md: "flex-start" }}
          gap={{ base: "20px", md: "0" }}
        >
          <TextInputWithSearchIcon
            placeholder="Search for country..."
            width="25rem"
            onChange={setInputValue}
            value={inputValue}
          />
          <SelectInput
            placeholder="Filter by Region"
            selectOptions={selectOptions}
            onSelect={setSelectedOption}
          />
        </Flex>
        <Countries searchResult={inputValue} selectedOption={selectedOption} />
      </Flex>
      <ScrollToTop />
    </Box>
  );
};
