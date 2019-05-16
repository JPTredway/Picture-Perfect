import React, { useState } from "react";

const ImageContext = React.createContext();

const ImageProvider = ({ children }) => {
  const [images, setImages] = useState([]);

  const value = {
    images,
    setImages
  };

  return (
    <ImageContext.Provider value={value}>{children}</ImageContext.Provider>
  );
};

export { ImageContext };
export { ImageProvider };
