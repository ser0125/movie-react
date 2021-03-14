import styled, { css } from 'styled-components';
import * as React from 'react';
import { InputContainer, HiddenInput, defaultStyleSpan, disabledStyleSpan } from '../Input/Input';

interface SpanProps {
    checked: string;
    disabled: boolean;
    theme: object;
}

const Checkbox = (props) => {
  return (
    <InputContainer>
      <HiddenInput type='checkbox'/>
      <StyledCheckbox checked={props.checked} disabled={props.disabled}/>
      <label>
        {props.label}
      </label>
    </InputContainer>
  );
};

const StyledCheckbox = styled.span<SpanProps>`
        ${defaultStyleSpan};
        ${props => props.checked && css`
            position: relative;
		    &::after {
			    content: "";
                position: absolute;
                top: 1px;
                left: 5px;
                width: 7px;
                height: 12px;
                border: solid ${props => props.theme.firstColor};
                border-width: 0 4px 4px 0;
                transform: rotate(45deg);
                }
            }
        `}

        ${props => props.disabled && css`
            ${disabledStyleSpan};
        `}
`;

export default Checkbox;