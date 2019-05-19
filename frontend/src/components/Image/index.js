import React from "react";
import styled, { css } from "styled-components";

const gridStyle = css`
  height: 200px;

  img {
    max-height: 100%;
  }
`;

const masonryStyle = css`
  line-height: 1rem;
`;

const ImageWrapper = styled.div`
  break-inside: avoid-column;
  padding: 1rem;
  cursor: pointer;
  width: 100%;
  display: flex;
  flex-wrap: none;
  align-items: center;
  justify-content: center;
  ${props => (props.grid ? gridStyle : masonryStyle)}
  transition: all 0.4s cubic-bezier(0, 0.6, 0.82, 1);

  &:hover {
    transform: translateY(-1rem);
    box-shadow: 2px 5px 5px rgba(0, 0, 0, 0.2);
  }
`;

const StyledImage = styled.img`
  max-width: 100%;
  transition: all 0.4s cubic-bezier(0, 0.6, 0.82, 1);
`;

const Image = ({ image, grid }) => (
  <ImageWrapper grid={grid}>
    <StyledImage src={image.src} />
  </ImageWrapper>
);

export { Image };
