import Link from "next/link";
import Nav from "../Nav";
import { Logo, StyledHeader } from "./styles";

export default () => (
  <StyledHeader>
    <div className="bar">
      <Logo>
        <Link href="/">
          <a>Sick Fits</a>
        </Link>
      </Logo>
      <Nav />
    </div>
    <div className="sub-bar">Search</div>
    <div>Cart</div>
  </StyledHeader>
);
