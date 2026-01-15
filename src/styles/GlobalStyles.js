import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.text};
    font-family: 'Inter', sans-serif;
    overflow-x: hidden;
    min-height: 100vh;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

    html, body {
    width: 100%;
    font-family: "Playfair Display", serif;
  }

  #root {
    width: 100%;
  }

  img {
    max-width: 100%;
    height: auto;
  }
`;
