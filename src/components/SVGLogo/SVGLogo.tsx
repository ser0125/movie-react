import * as React from "react";
import styled from "styled-components";

const SVGLogo = (props) => {
  return (
    <svg
      viewBox="0 0 100 100"
      width={props.size}
      height={props.size}
      {...props}
    >
      <mask id="diagBar">
        <rect x="0" y="0" width="100%" height="100%" fill="white" />
        <rect
          x="100"
          y="0"
          width="10"
          height="150"
          transform="rotate(45 100 0), translate(-5 -5)"
          fill="black"
        />
      </mask>
      <circle cx="50" cy="50" r="50" mask="url(#diagBar)"></circle>
    </svg>
  );
};

const StyledSVGLogo = styled(SVGLogo)`
  fill: ${(props) => props.theme.statusColors[props.fill]};
`;

export default StyledSVGLogo;
