import React, { useState } from "react";
import { useFetch } from "../../hooks/useFetch";
import { API_URL } from "../../config";
import { Form } from "../styles/Form";
import { ErrorMessage } from "../ErrorMessage";
import { StyledUpload, StyledImg } from "./styles";

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
