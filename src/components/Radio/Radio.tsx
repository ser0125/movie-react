import styled, { css } from 'styled-components';
import * as React from 'react';
import { InputContainer, HiddenInput, defaultStyleSpan, disabledStyleSpan } from '../Input/Input';

interface SpanProps {
    checked: string;
    disabled: boolean;
    theme: object;
}

const Radio = (props) => {
  return (
    <InputContainer>
      <HiddenInput type='radio'/>
      <StyledRadio checked={props.checked} disabled={props.disabled}/>
      <label>
        {props.label}
      </label>
    </InputContainer>
  );
};

const StyledRadio = styled.span<SpanProps>`
  ${defaultStyleSpan}
	border-radius: 50%;
  ${props => props.checked && css`
    &::after {
		  content: " ";
      width: 0.5rem;
      height: 0.5rem;
      display: block;
      margin: 4px;
      background-color: ${props => props.theme.firstColor};
      border-radius: 50%;
    }
  `}
  ${props => props.disabled && css`
    ${disabledStyleSpan};
  `}
`;

export default Radio;