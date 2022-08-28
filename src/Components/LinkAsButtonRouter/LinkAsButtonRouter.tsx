import { Link, LinkProps } from "@chakra-ui/react";
import { ReactNode } from "react";
import { Link as ReactRouterLink } from "react-router-dom";

type LinkAsButtonRouterProps = LinkProps & {
  navigateTo: string;
  children: ReactNode;
  marTop?: string;
  marBottom?: string;
  onClick?: () => void;
};

export const LinkAsButtonRouter = ({
  navigateTo,
  children,
  marTop = "0",
  marBottom = "0",
  onClick = () => {},
  ...rest
}: LinkAsButtonRouterProps) => {
  return (
    <Link onClick={onClick} as={ReactRouterLink} to={navigateTo} {...rest}>
      {children}
    </Link>
  );
};
