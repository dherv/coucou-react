import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  :root {
    --text-font: Roboto, "Helvetica Neue", sans-serif;
    --text-color: #767676;
    --border-radius: 4px;
  }

  html,
  body {
    font-family: var(--text-font);
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`;
