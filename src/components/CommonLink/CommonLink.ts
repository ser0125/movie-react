import styled from "styled-components";
import { darken } from "polished";
import { Link } from "react-router-dom";

interface LinkProps {
  color?: string;
  bold?: boolean;
  href?: string;
  theme: object;
}

const CommonLink = styled(Link)<LinkProps>`
  cursor: pointer;
  transition: color 0.1s ease;
  display: inline-block;
  color: ${(props): string =>
    props.color
      ? props.theme.statusColors[props.color]
      : props.theme.linkColor};
  font-weight: ${(props): string => (props.bold ? "bold" : "normal")};
  &:hover {
    text-decoration: underline;
    color: ${(props): string =>
      props.color
        ? darken(
            props.theme.darkenPercentLink,
            props.theme.statusColors[props.color]
          )
        : props.theme.linkColor};
  }
`;

export default CommonLink;
