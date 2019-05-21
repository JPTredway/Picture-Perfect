import styled, { css } from "styled-components";

const masonryLayout = css`
  column-count: 4;
  column-width: auto;

  div {
    line-height: 1rem;
    margin-bottom: 1rem;
  }

  @media (max-width: 1300px) {
    column-count: 3;
  }

  @media (max-width: 1000px) {
    column-count: 2;
  }

  @media (max-width: 800px) {
    column-count: 1;
  }
`;

const gridLayout = css`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 1rem;

  div {
    height: 240px;

    img {
      max-height: 100%;
    }
  }

  @media (max-width: 1300px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: 1000px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 800px) {
    grid-template-columns: 1fr;
  }
`;

const StyledImages = styled.div`
  ${props => (props.grid ? gridLayout : masonryLayout)};
`;

export { StyledImages };
