import React, { useState, useContext } from "react";
import styled from "styled-components";
import { useForm } from "../../hooks/useForm";
import { useFetch } from "../../hooks/useFetch";
import { API_URL } from "../../config";
import { AuthContext } from "../AuthContext";
import { history } from "../../routes/history";
import { ErrorMessage } from "../ErrorMessage";
import { Form } from "../styles/Form";

const StyledSignup = styled.div`
  margin-top: 3rem;
  display: flex;
  justify-content: center;
`;

const Signup = () => {
  const { setUser } = useContext(AuthContext);
  const [{ loading, error }, sendRequest] = useFetch();
  const [form, { handleTextChange }] = useForm({
    name: "",
    email: "",
    password: ""
  });

  const handleSubmit = async e => {
    e.preventDefault();
    const url = `${API_URL}/signup`;
    const config = {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(form)
    };
    try {
      const user = await sendRequest(url, config);
      setUser(user);
      history.push("/upload");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <StyledSignup>
      <Form method="POST" onSubmit={handleSubmit}>
        <fieldset disabled={loading}>
          <h2>Create an account</h2>
          <ErrorMessage error={error} />
          <label htmlFor="name">Name</label>
          <input
            name="name"
            value={form.name}
            placeholder="Enter your name..."
            onChange={handleTextChange}
            type="text"
            id="name"
            required
          />
          <label htmlFor="email">Email</label>
          <input
            name="email"
            value={form.email}
            placeholder="Enter your email..."
            onChange={handleTextChange}
            type="email"
            id="email"
            required
          />
          <label htmlFor="password">Password</label>
          <input
            name="password"
            value={form.password}
            placeholder="Enter your password..."
            onChange={handleTextChange}
            type="password"
            id="password"
            required
          />
          <button type="submit">Sign Up!</button>
        </fieldset>
      </Form>
    </StyledSignup>
  );
};

export { Signup };
