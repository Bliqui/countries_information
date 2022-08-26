import { Link, LinkProps } from "@chakra-ui/react";
import { ReactNode } from "react";
import { Link as ReactRouterLink } from "react-router-dom";

type LinkAsButtonRouterProps = LinkProps & {
  navigateTo: string;
  children: ReactNode;
  marTop?: string;
  marBottom?: string;
};

export const LinkAsButtonRouter = ({
  navigateTo,
  children,
  marTop = "0",
  marBottom = "0",
  ...rest
}: LinkAsButtonRouterProps) => {
  return (
    <Link as={ReactRouterLink} to={navigateTo} {...rest}>
      {children}
    </Link>
  );
};
