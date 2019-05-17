import React, { useState } from "react";
import styled from "styled-components";
import { useFetch } from "../../hooks/useFetch";
import { API_URL } from "../../config";
import { Form } from "../styles/Form";
import { ErrorMessage } from "../ErrorMessage";

const StyledUpload = styled.div`
  margin-top: 3rem;
  display: flex;
  justify-content: center;
`;

const StyledImg = styled.img`
  display: block;
  margin: 0 auto;
  width: 100%;
  height: auto;
`;

const Upload = () => {
  const [url, setUrl] = useState("");
  const [file, setFile] = useState("");
  const [{ loading, error }, sendRequest] = useFetch();

  const handleChange = e => {
    setFile(e.target.files[0]);
    setUrl(URL.createObjectURL(e.target.files[0]));
  };

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      const formData = new FormData();
      formData.append("file", file);

      const url = `${API_URL}/images`;
      const config = {
        method: "POST",
        body: formData
      };
      const data = await sendRequest(url, config);
      console.log("data from upload: ", data);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <StyledUpload>
      <Form method="POST" onSubmit={handleSubmit}>
        <fieldset disabled={loading}>
          <h2>Upload an image</h2>
          <ErrorMessage error={error} />
          <StyledImg src={url} alt="" />
          <label htmlFor="file">Image</label>
          <input
            onChange={handleChange}
            name="file"
            id="file"
            type="file"
            accept="image/*"
            required
          />
          <button type="submit">Upload Image!</button>
        </fieldset>
      </Form>
    </StyledUpload>
  );
};

export { Upload };
