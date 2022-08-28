import { Badge } from "@chakra-ui/react";
import { ReactNode } from "react";

type BadgeComponentType = {
  countryShort: string;
};

export const BadgeComponent = ({ countryShort }: BadgeComponentType) => {
  return (
    <Badge
      mx="5px"
      boxShadow="0px 0px 8px 0px rgba(66, 68, 90, .3)"
      key={countryShort}
      _hover={{ transform: "scale(1.1)" }}
      cursor="default"
    >
      {countryShort}
    </Badge>
  );
};
