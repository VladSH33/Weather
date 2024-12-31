import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`

  @font-face {
  font-family: 'MyCustomFont';
  src: url('/fonts/HelveticaNeue-Medium.otf') format('opentype'),
  url('/fonts/HelveticaNeue-Medium.otf') format('opentype');
  font-weight: normal;
  font-style: normal;
}

  html {
    font-size: 12px;

    @media (max-width: 1000px) {
      font-size: 10px;
    }
    @media (max-width: 750px) {
      font-size: 8px;
    }
    @media (max-width: 565px) {
      font-size: 6px;
    }
    @media (max-width: 440px) {
      font-size: 4px;
    }
  }



  body {
    margin: 0;
    padding: 0;
    font-family: 'MyCustomFont', sans-serif;
    background: ${({ theme }) => theme.background};
    transition: all 0.5s linear;
    min-height: 100vh;
  }

  *, *::before, *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    list-style: none;
    text-decoration: none;
    color: inherit;
  }

  input {
    outline: none;
    border: none;
  }

  h1 {
    font-size: 3rem;
    color: rgba(255, 255, 255, 0.85);
    margin: 30px 0;
  }
`;


