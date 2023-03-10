import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :root {
    --white: #FFFFFF;
    --primary: #F9921A;
    --secondary: #77A32B;
    --red: #ff5252;
    --background: #FDFBF7;
    --title-color: #000000;
    --text-color: #575856;

    --max-width: 1280px;
  }

  html {
    @media (max-width: 1080px) {
      font-size: 93.75%;
    }
    @media (max-width: 720px) {
      font-size: 87.5%;
    }
  }

  body {
    background-color: var(--background);
    -webkit-font-smoothing: antialiased;
  }

  body,
  input,
  textarea,
  button {
    font: 300 1rem 'Ubuntu', sans-serif;
    color: var(--text-color);
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  strong {
    font-weight: 500;
    color: var(--title-color);
  }

  button {
    cursor: pointer;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  [disabled] {
    opacity: 0.6;
    cursor: not-allowed;
  }

  ::-webkit-scrollbar {
    width: 8px;
  }

  ::-webkit-scrollbar-track {
    background: var(--background);
  }

  ::-webkit-scrollbar-thumb {
    background: var(--primary);
    border-radius: 4px;
  }
`;
