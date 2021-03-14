import styled from "styled-components";

interface CustomProps {
  cutomsClass?: string;
}

const BoxRadius = styled.div<CustomProps>`
  background-color: ${props => props.theme.defaultColor};
  padding: 2rem;
  color: ${props => props.theme.thirdColor};
  border-radius: ${props => props.theme.borderRadiusContainer};
  margin: 5vmax 0;
  @media screen and (min-width: ${props => props.theme.breakpointSm}) {
    & {
      padding: 2.5rem;
    }
  }
`;

export default BoxRadius;
