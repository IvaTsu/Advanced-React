import styled from "styled-components";

const StyledLogo = styled.h1`
  font-size: 4rem;
  margin-left: 2rem;
  position: relative;
  z-index: 2;
  transform: skew(-7deg);
  a {
    padding: 0.5rem 1rem;
    background: ${props => props.theme.red};
    color: ${props => props.theme.white};
    text-decoration: none;
    text-transform: uppercase;
  }
`;

export default StyledLogo;
