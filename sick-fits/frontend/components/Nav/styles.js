import styled from "styled-components";

const StyledNav = styled.nav`
  .nav {
    display: grid;
    grid-template-columns: auto 1fr;
    justify-content: space-between;
    align-items: stretch;
    border-bottom: 10px solid ${props => props.theme.black};
    @media (max-width: 1300px) {
      display-template-columns: 1fr;
      justify-content: center;
    }
  }
  .sub-nav {
    display: grid;
    grid-template-columns: 1fr auto;
    border-bottom: 1px solid ${props => props.theme.lightGrey};
  }
`;

export { StyledNav };
