import Link from "next/link";
import Nav from "../Nav";
import StyledLogo from "./StyledLogo";

export default () => (
  <div>
    <div className="bar">
      <StyledLogo>
        <Link href="/">
          <a>Sick Fits</a>
        </Link>
      </StyledLogo>
      <Nav />
    </div>
    <div className="sub-bar">
      <p>Search</p>
    </div>
    <div>Cart</div>
  </div>
);
