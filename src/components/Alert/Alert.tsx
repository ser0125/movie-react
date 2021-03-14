import React from "react";
import styled from "styled-components";

interface AlertProps {
  color?: string;
  size?: string;
  theme: object;
}

const customAlert = props => {
  return <div {...props} />;
};

const Alert = styled(customAlert)<AlertProps>`
  margin: 15px 0;
  padding: 0.5rem 1rem;
  color: #fff;
  background-color: ${props =>
    props.color
      ? props.theme.statusColors[props.color]
      : props.theme.thirdColor};
  border-radius: ${props => props.theme.borderRadiusAlert};
  font-weight: ${props => props.theme.font};
`;

export default Alert;
