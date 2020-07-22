import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  * {
    font-family: 'Montserrat', sans-serif;

  }

  p {
    line-height: 1.3;
  }
  a {
      text-decoration:none;
      color:inherit;
  }
`;

export default GlobalStyles;
