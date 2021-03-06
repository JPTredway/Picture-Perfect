import styled, { keyframes } from "styled-components";

const spin = keyframes`
  0%, 100% {
    animation-timing-function: cubic-bezier(0.5, 0, 1, 0.5);
  }
  0% {
    transform: rotateY(0deg);
  }
  50% {
    transform: rotateY(1800deg);
    animation-timing-function: cubic-bezier(0, 0.5, 0.5, 1);
  }
  100% {
    transform: rotateY(3600deg);
  }
`;

const Spinner = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  transform: translateZ(1px);

  div {
    display: inline-block;
    width: 51px;
    height: 51px;
    margin: 6px;
    border-radius: 50%;
    background: #90ddf0;
    animation: 2.4s ${spin} cubic-bezier(0, 0.2, 0.8, 1) infinite;
  }
`;

export { Spinner };
