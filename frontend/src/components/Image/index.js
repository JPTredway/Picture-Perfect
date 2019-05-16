import React from "react";
import styled from "styled-components";

const StyledImage = styled.div`
  flex: 1 0 auto;
  margin-bottom: 1rem;

  img {
    width: 100%;
    height: auto;
  }
`;

const Image = ({ image }) => (
  <StyledImage>
    <img src={image.src} />
  </StyledImage>
);

export { Image };
