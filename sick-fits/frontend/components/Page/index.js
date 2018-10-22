import Header from "../Header";
import Meta from "../Meta";
import { StyledPage } from "./styles";

export default ({ children }) => (
  <StyledPage>
    <Meta />
    <Header />
    {children}
  </StyledPage>
);
