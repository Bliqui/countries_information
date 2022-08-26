import { Link, LinkProps } from "@chakra-ui/react";
import { ReactNode } from "react";
import { Link as ReactRouterLink } from "react-router-dom";

type LinkAsButtonRouterProps = LinkProps & {
  navigateTo: string;
  children: ReactNode;
};

export const LinkAsButtonRouter = ({
  navigateTo,
  children,
  ...rest
}: LinkAsButtonRouterProps) => {
  return (
    <Link as={ReactRouterLink} to={navigateTo} {...rest}>
      {children}
    </Link>
  );
};
