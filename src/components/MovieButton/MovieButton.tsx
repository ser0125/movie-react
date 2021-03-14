import styled from "styled-components";
import { darken } from "polished";

interface ButtonProps {
  bgColor?: string;
  color?: string;
  borderColor?: string;
  size?: string;
  status?: string;
  onClick?: (e: Event) => void;
  theme: object;
}

const handleSizeType = (size: string): string => {
  switch (size) {
    case "lg":
      return "0.85rem 1.5rem";
    case "sm":
      return "0.5rem 0.7rem";
    default:
      return "0.6rem 1.2rem";
  }
};

const MovieButton = styled.button<ButtonProps>`
  cursor: pointer;
  padding: ${({ size }) => handleSizeType(size)};
  border-radius: ${props => props.theme.borderRadiusDefault};
  font-size: 1em;
  border: ${props =>
    props.borderColor
      ? `2px solid ${props.theme.statusColors[props.borderColor]}`
      : "none"};
  font-weight: 600;
  box-shadow: 0px 3px 5px 0px ${props => props.theme.defaultColor};
  color: ${props =>
    props.color ? props.theme.statusColors[props.color] : "#fff"};
  background-color: ${props =>
    props.bgColor || props.status
      ? props.theme.statusColors[props.bgColor || props.status]
      : props.theme.defaultColor};
  transition: all 0.3s ease;
  &:not(:disabled):hover,
  &:not(:disabled):active,
  &:not(:disabled):focus {
    transform: translateY(-0.3em);
    box-shadow: 0px 3px 5px 1px ${props => props.theme.defaultColorAlt};
    background-color: ${props =>
      darken(
        props.theme.darkenPercent,
        props.bgColor || props.status
          ? props.theme.statusColors[props.bgColor || props.status]
          : props.theme.defaultColor
      )};
  }
  &:disabled {
    opacity: 0.7;
    cursor: default;
    font-family: inherit;
  }
`;

export default MovieButton;