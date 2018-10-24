import { injectGlobal } from "styled-components";

injectGlobal`
  @font-face {
    font-family: "radnika-next";
    src:  url("/static/radnikanext-medium-webfont.woff2") format("woff2");
    font-weight: normal;
    font-style: normal;
  }
  html {
    box-sizing: border-box;
    font-size: 10px;
  }
  *, *:before, *:after {
    box-sizing: inherit;
  }
  body {
    padding: 0;
    margin: 0;
    font-size: 1.6rem;
    line-height: 2;
    font-family: "radnika-next";
  } 
`;

const globalTheme = {
  white: "#FFFFFF",
  red: "#FF0000",
  black: "#393939",
  grey: "#3A3A3A",
  lightGrey: "#E1E1E1",
  offWhite: "#EDEDED",
  maxWidth: "1000px",
  boxShadow: "0 12px 24px 0 rgba(0, 0, 0, 0.09)"
};

export default globalTheme;
