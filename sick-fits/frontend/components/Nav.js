import Link from "next/link";
import NavStyles from "./styles/NavStyles";

export default () => (
  <NavStyles>
    <Link href="/">
      <a>Go Home</a>
    </Link>
    <Link href="/sell">
      <a>Go to Sell</a>
    </Link>
  </NavStyles>
);
