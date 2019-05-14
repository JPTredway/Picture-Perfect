import styled from "styled-components";

const StyledHeader = styled.header`
  display: grid;
  grid-template-columns: auto 1fr;
  justify-content: space-between;
  background: ${props => props.theme.primary};
  color: ${props => props.theme.white};

  @media (max-width: ${props => props.theme.maxWidth}) {
    grid-template-columns: 1fr;
    justify-content: center;
  }
`;

const Logo = styled.h1`
  color: ${props => props.theme.white};
  font-size: 4rem;
  margin: 0 0 0 2rem;
  text-transform: uppercase;

  @media (max-width: ${props => props.theme.maxWidth}) {
    margin: 0;
    text-align: center;
  }
`;

export { StyledHeader };
export { Logo };
