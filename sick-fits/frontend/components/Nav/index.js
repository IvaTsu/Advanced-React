import Link from "next/link";
import { StyledNav } from "./styles";

export default () => (
  <StyledNav>
    <div className="nav">
      <Link href="/">
        <a>Go Home</a>
      </Link>
      <Link href="/sell">
        <a>Go to Sell</a>
      </Link>
    </div>
    <div className="sub-nav">
      <p>Search</p>
    </div>
  </StyledNav>
);
