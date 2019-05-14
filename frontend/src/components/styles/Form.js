import styled from "styled-components";

const Form = styled.form`
  background: rgba(255, 255, 255, 0.5);
  box-shadow: 0 0 5px 3px rgba(0, 0, 0, 0.07);
  width: 600px;
  display: flex;
  justify-content: center;
  padding: 3rem;
  border-radius: 5px;

  fieldset,
  input,
  button {
    border: none;
  }

  h2 {
    font-size: 3rem;
    text-align: center;
    text-transform: uppercase;
  }

  fieldset {
    width: 100%;

    &::before {
      content: "";
      height: 5px;
      background: ${props => props.theme.accent};
      width: 100%;
      display: block;
    }

    &[disabled] {
      opacity: 0.5;
    }
  }

  input {
    display: block;
    width: 100%;
    padding: 1rem 1rem;
    font-size: 2rem;
    margin-bottom: 2rem;
    position: relative;
    border: 1px solid rgba(255, 255, 255, 0.5);
    border-radius: 3px;
    transition: all 0.4s cubic-bezier(0, 0.8, 0.82, 1);
    color: ${props => props.theme.black};

    &::placeholder {
      font-size: 1.5rem;
      opacity: 0.5;
    }

    &:focus {
      outline: none;
      border: 1px solid ${props => props.theme.accent};
    }
  }

  button {
    background: ${props => props.theme.secondary};
    font-size: 1.5rem;
    padding: 1rem 2rem;
    color: ${props => props.theme.white};
    border-radius: 3px;
    border: 1px solid transparent;
    transition: all 0.4s cubic-bezier(0, 0.8, 0.82, 1);

    &:hover {
      cursor: pointer;
      color: ${props => props.theme.secondary};
      background: white;
      border: 1px solid ${props => props.theme.secondary};
    }

    &:focus {
      outline: none;
    }
  }
`;

export { Form };
