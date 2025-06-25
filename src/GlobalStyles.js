import { createGlobalStyle, css } from 'styled-components';
import theme, { colors } from './theme';

const globalStyles = css`
  * {
    box-sizing: border-box;
    scrollbar-width: thin; /* only for FF */
    
    &:focus {
      outline: none;
    }
  }

  body {
    min-height: 100vh;
    margin: 0;
    font-family: Arial, sans-serif;
    font-size: ${theme.fontSizes[7]}px;
    line-height: 1.5;
    text-rendering: optimizeSpeed;
    font-smooth: always;
    -moz-osx-font-smoothing: grayscale;
    -moz-font-smoothing: antialiased;
    -webkit-font-smoothing: antialiased;
    color: ${colors.text.primary};
    background: ${colors.white};
    overflow: auto;
  }

  button,
  textarea,
  [type='text'],
  [type='button'] {
    outline: none;
    -webkit-appearance: none;

    &:focus {
      outline: none;
    }
  }

  button {
    border: 0;
    background: none;
    padding: 0;
    cursor: pointer;
  }

  input {
    border: 0;
  }

  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  button,
  input,
  optgroup,
  select,
  textarea {
    line-height: 1.5;
  }

  img {
    max-width: 100%;
  }
`;

const GlobalStyles = createGlobalStyle`${globalStyles}`;

export { GlobalStyles };
