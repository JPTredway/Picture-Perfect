import styled from "styled-components";

const StyledNav = styled.div`
  margin: 0;
  padding: 0;
  display: inline-flex;
  justify-self: end;
  font-size: 2rem;

  a {
    cursor: pointer;
    text-transform: uppercase;
    padding: 1rem 3rem;
    display: flex;
    align-items: center;
    position: relative;
    overflow: hidden;
    color: ${props => props.theme.white};
    opacity: 0.8;

    &::after {
      content: "";
      height: 2px;
      background: ${props => props.theme.accent};
      width: 0;
      position: absolute;
      transition: width 0.4s cubic-bezier(1, 0.2, 0.6, 1);
      margin-top: 2rem;
    }

    &.active,
    &:hover {
      opacity: 1;
      &::after {
        width: calc(100% - 3em);
      }
    }
  }

  @media (max-width: ${props => props.theme.maxWidth}) {
    width: 100%;
    justify-content: center;
    font-size: 1.5rem;
  }
`;

export { StyledNav };
