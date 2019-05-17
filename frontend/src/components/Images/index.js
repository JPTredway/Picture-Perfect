import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useFetch } from "../../hooks/useFetch";
import { API_URL } from "../../config";
import { Image } from "../Image";
import { Loader } from "../Loader";
import { ErrorMessage } from "../ErrorMessage";

const StyledImages = styled.div`
  line-height: 0;
  column-gap: 1rem;
  column-count: 4;
  margin: 0 auto;
  border-radius: 5px;
  overflow: hidden;

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

const Images = () => {
  const [images, setImages] = useState([]);
  const [{ loading, error }, sendRequest] = useFetch(true);

  useEffect(() => {
    const getImages = async () => {
      const url = `${API_URL}/images`;
      try {
        const images = await sendRequest(url);
        setImages(images);
      } catch (err) {
        console.log(err);
      }
    };
    getImages();
  }, []);

  return (
    <>
      <Loader loading={loading} />
      <ErrorMessage error={error} />
      <StyledImages>
        {images.map(img => (
          <Image key={img._id} image={img} />
        ))}
      </StyledImages>
    </>
  );
};

export { Images };
