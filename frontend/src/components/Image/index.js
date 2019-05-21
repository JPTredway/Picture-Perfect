import React from "react";
import { ImageWrapper, StyledImage } from "./styles";

const Image = ({ image }) => (
  <ImageWrapper>
    <StyledImage src={image.src} />
  </ImageWrapper>
);

export { Image };
