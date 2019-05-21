import React, { useEffect, useState } from "react";
import { useFetch } from "../../hooks/useFetch";
import { API_URL } from "../../config";
import { Image } from "../Image";
import { Loader } from "../Loader";
import { ErrorMessage } from "../ErrorMessage";
import { StyledImages } from "./styles";

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

  if (loading) return <Loader />;

  return (
    <>
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
