import { Badge, Link } from "@chakra-ui/react";
import { Link as ReactRouterLink } from "react-router-dom";

type BadgeComponentType = {
  countryShort: string;
  onClick: () => void;
};

export const BadgeComponent = ({
  countryShort,
  onClick,
}: BadgeComponentType) => {
  return (
    <Badge
      cursor="pointer"
      mx="5px"
      boxShadow="0px 0px 8px 0px rgba(66, 68, 90, .3)"
      key={countryShort}
      _hover={{ transform: "scale(1.1)" }}
    >
      <Link
        as={ReactRouterLink}
        onClick={onClick}
        to={`/country/${countryShort}`}
      >
        {countryShort}
      </Link>
    </Badge>
  );
};
