import React, { useState } from "react";
import styled from "styled-components";
import { useForm } from "../../hooks/useForm";
import { useFetch } from "../../hooks/useFetch";
// import axios from "axios";
import { API_URL } from "../../config";
import { Form } from "../styles/Form";
import { ErrorMessage } from "../ErrorMessage";

const StyledUpload = styled.div`
  margin-top: 3rem;
  display: flex;
  justify-content: center;
`;

const Upload = () => {
  const [form, handleChange] = useForm({ file: null });
  const [{ loading, error }, sendRequest] = useFetch();

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      const formData = new FormData();
      formData.append("file", form.file);
      const url = `${API_URL}/images`;
      const config = {
        data: JSON.stringify(form)
      };
      const data = await sendRequest(url, config);
      if (data) {
        console.log("image sent to express app, recieved data: ", data);
      }
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
          <label htmlFor="file">Choose an image</label>
          <input
            onChange={handleChange}
            name="file"
            id="file"
            type="file"
            required
          />
          <button type="submit">Upload Image!</button>
        </fieldset>
      </Form>
    </StyledUpload>
  );
};

export { Upload };
