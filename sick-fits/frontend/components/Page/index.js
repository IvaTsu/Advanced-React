import Header from "../Header/index";
import Meta from "../Meta";
import { ThemeProvider } from "styled-components";
import { StyledPage, StyledPageInnerDiv } from "./styles";
import globalTheme from "./../styles/Theme";

export default ({ children }) => (
  <ThemeProvider theme={globalTheme}>
    <StyledPage>
      <Meta />
      <Header />
      <StyledPageInnerDiv>{children}</StyledPageInnerDiv>
    </StyledPage>
  </ThemeProvider>
);
