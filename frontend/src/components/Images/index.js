import React, { useEffect, useState } from "react";
import styled, { css } from "styled-components";
import { useFetch } from "../../hooks/useFetch";
import { API_URL } from "../../config";
import { Image } from "../Image";
import { Loader } from "../Loader";
import { ErrorMessage } from "../ErrorMessage";

const masonryLayout = css`
  column-count: 4;
  column-width: auto;

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

const Images = () => {
  const [images, setImages] = useState([]);
  const [{ loading, error }, sendRequest] = useFetch(true);
  const [grid, setGrid] = useState(false);

  useEffect(() => {
    const getImages = async () => {
      const url = `${API_URL}/images`;
      try {
        const images = await sendRequest(url);
        if (images) setImages(images);
      } catch (err) {
        console.log(err);
      }
    };
    getImages();
  }, []);

  const toggleGridLayout = () => {
    setGrid(!grid);
  };

  return (
    <>
      <Loader loading={loading} />
      <ErrorMessage error={error} />
      <button onClick={toggleGridLayout}>
        {grid ? "Masonry" : "Grid"} Layout
      </button>
      <StyledImages grid={grid}>
        {images.map(img => (
          <Image key={img._id} image={img} grid={grid} />
        ))}
      </StyledImages>
    </>
  );
};

export { Images };
