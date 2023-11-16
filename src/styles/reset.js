import { createGlobalStyle } from 'styled-components';
/* user agent stylesheet 초기화 */
import Pretendard from '../fonts/Pretendard-Regular.woff';
import Actor from '../fonts/Actor-Regular.woff';

const GlobalStyles = createGlobalStyle`
  @font-face {
    font-family: 'Pretendard';
    src: url(${Pretendard}) format('woff');
    font-weight: 400;
    font-style: normal;
  }

  @font-face {
    font-family: 'Actor';
    src: url(${Actor}) format('woff');
    font-weight: 400;
    font-style: normal;
  }

  * {
    box-sizing: border-box;
    margin: 0;
    font-family: 'Pretendard';
    word-break: keep-all;
  }

  html,
  body {
    font-size: 62.5%;
    background-color: ${(props) => props.theme['grayscale-20']};
  }

  a {
    color: inherit;
    text-decoration: none;
    cursor: pointer;
  }

  input {
    border: none;
    padding: none;
  }
  input:focus {
    outline: none;
  }
  input[type='search']::-webkit-search-decoration,
  input[type='search']::-webkit-search-cancel-button,
  input[type='search']::-webkit-search-results-button,
  input[type='search']::-webkit-search-results-decoration {
    display: none;
  }

  button {
    border: none;
    padding: unset;
    background-color: unset;
    cursor: pointer;
  }
`;

export default GlobalStyles;
