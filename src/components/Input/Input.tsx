import React from "react";
import styled from "styled-components";

interface InputProps {
  type: string;
  color?: string;
  theme: object;
  handleInputChange?: any;
}

const customInput = props => {
  return <input {...props} />;
};

const Input = styled(customInput)<InputProps>`
  padding: 0.625rem 0.75rem;
  border: 2px solid #ececec;
  border-radius: ${props => props.theme.borderRadiusDefault};
  box-shadow: 0px 4px 8px -3px ${props => props.theme.defaultColorAlt};
  font-size: 0.875rem;
  color: ${props =>
    props.color ? props.theme.statusColors[props.color] : "inherit"};
  font-family: inherit;
  border-color: ${props =>
    props.color ? props.theme.statusColors[props.color] : "transparent"};
`;

export const InputContainer = styled.div`
  margin-top: 0.75rem;
`;

export const HiddenInput = styled.input`
  display: none;
`;

export const defaultStyleSpan = props => `
    display: inline-block;
    width: 1.25rem;
    height: 1.25rem;
    border: 2px solid ${props.theme.firstColor};
    margin-right: 0.5rem;
    cursor: pointer;
`;

export const disabledStyleSpan = props => `
    cursor: default;
    border: 2px solid ${props.theme.defaultColorAlt};
    background-color: ${props.theme.defaultColorAlt};
`;

export default Input;
