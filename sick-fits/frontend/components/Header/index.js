import Link from "next/link";
import Nav from "../Nav/index";
import { StyledLogo } from "./styles";

export default () => (
  <header>
    <StyledLogo>
      <Link href="/">
        <a>Sick Fits</a>
      </Link>
    </StyledLogo>
    <Nav />
    <div>Cart</div>
  </header>
);
