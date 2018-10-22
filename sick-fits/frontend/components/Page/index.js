import Header from "../Header";
import Meta from "../Meta";
import { StyledPage, StyledPageInnerDiv } from "./styles";

export default ({ children }) => (
  <StyledPage>
    <Meta />
    <Header />
    <StyledPageInnerDiv>{children}</StyledPageInnerDiv>
  </StyledPage>
);
