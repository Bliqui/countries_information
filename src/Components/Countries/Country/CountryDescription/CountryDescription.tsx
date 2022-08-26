import { Text, chakra } from "@chakra-ui/react";

type CountryDescriptionProps = {
  descName: string;
  descValue: string;
};

export const CountryDescription = ({
  descName,
  descValue,
}: CountryDescriptionProps) => {
  return (
    <Text>
      <chakra.span fontWeight="600">{descName} </chakra.span>
      {descValue}
    </Text>
  );
};
