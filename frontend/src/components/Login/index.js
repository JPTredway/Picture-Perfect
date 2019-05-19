import React, { useContext } from "react";
import styled from "styled-components";
import { history } from "../../routes/history";
import { useForm } from "../../hooks/useForm";
import { useFetch } from "../../hooks/useFetch";
import { API_URL } from "../../config";
import { AuthContext } from "../AuthContext";
import { ErrorMessage } from "../ErrorMessage";
import { Form } from "../styles/Form";

const StyledLogin = styled.div`
  margin-top: 3rem;
  display: flex;
  justify-content: center;
`;

const Login = () => {
  const { setUser } = useContext(AuthContext);
  const [{ loading, error }, sendRequest] = useFetch();
  const [form, { handleTextChange }] = useForm({
    email: "",
    password: ""
  });

  const handleSubmit = async e => {
    e.preventDefault();
    const url = `${API_URL}/login`;
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
      history.push("/images");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <StyledLogin>
      <Form method="POST" onSubmit={handleSubmit}>
        <fieldset disabled={loading}>
          <h2>Login to your account</h2>
          <ErrorMessage error={error} />
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
          <button type="submit">Login!</button>
        </fieldset>
      </Form>
    </StyledLogin>
  );
};

export { Login };
