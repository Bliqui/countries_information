import { Heading, Text, Box } from "@chakra-ui/react";
import React from "react";

type CountryDescriptionProps = {
  title: string;
  population: number;
  region: string;
  capital: string;
};

export const CountryDescription = ({
  title,
  population,
  region,
  capital,
}: CountryDescriptionProps) => {
  return (
    <React.Fragment key={title}>
      <Heading my="20px" fontSize="22px">
        {title}
      </Heading>
      <Box>
        <Box>
          <Text display="inline" pr="5px" fontWeight="600">
            Population:
          </Text>

          {new Intl.NumberFormat("pl-PL", { style: "decimal" }).format(
            population
          )}
        </Box>
        <Box>
          <Text display="inline" pr="5px" fontWeight="600">
            Region:
          </Text>
          {region}
        </Box>
        <Box>
          <Text display="inline" pr="5px" fontWeight="600">
            Capital:
          </Text>
          {capital}
        </Box>
      </Box>
    </React.Fragment>
  );
};
