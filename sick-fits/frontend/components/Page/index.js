import Header from "../Header/Header";
import Meta from "../Meta";
import { ThemeProvider } from "styled-components";
import { StyledPage, StyledPageInnerDiv } from "./styles";
import Theme from "./../styles/Theme";

export default ({ children }) => (
  <ThemeProvider theme={Theme}>
    <StyledPage>
      <Meta />
      <Header />
      <StyledPageInnerDiv>{children}</StyledPageInnerDiv>
    </StyledPage>
  </ThemeProvider>
);
