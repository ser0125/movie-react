import React from "react";
import styled from "styled-components";

interface YoutubeVideoProps {
    keyid: string
}

const customFrame = props => {
  return <iframe
    frameBorder= "0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowFullScreen
    title="Embedded youtube"
    src={`https://www.youtube.com/embed/${props.keyid}`}
    {...props}
  />
};

const YoutubeEmbed = styled(customFrame)<YoutubeVideoProps>`
  width: 853px;
`;

export default YoutubeEmbed;
