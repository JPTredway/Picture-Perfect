import styled from "styled-components";

const StyledPage = styled.div`
  min-height: 100vh;
  background: ${props => props.theme.white};
  color: ${props => props.theme.black};
`;

const Inner = styled.div`
  max-width: ${props => props.theme.maxWidth};
  margin: 0 auto;
  padding: 2rem;
`;

export { StyledPage };
export { Inner };
