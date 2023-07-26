import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
  ${reset};
  
  * {
    box-sizing: border-box;
    -webkit-tap-highlight-color : transparent;
  }

  #root {
    max-width: 750px;
    height: 100vh;
    margin: 0 auto;
    background: #fff;
    position: relative;
  }

  button {
    cursor: pointer;
    border: none;
    outline: none;
    -webkit-appearance: none;
    border-radius: 0;
    padding: 0;
  }

  input {
    -webkit-appearance: none;
    -webkit-border-radius: 0;
  }

  input:focus {
    outline: none;
  }

  body, button, input, textarea {
    font-family: Pretendard, -apple-system, BlinkMacSystemFont, system-ui, Roboto, 'Helvetica Neue', 'Segoe UI', 'Apple SD Gothic Neo', 'Noto Sans KR', 'Malgun Gothic', sans-serif;
  }

  textarea {
    box-sizing: border-box;
    appearance: none;
    -moz-appearance: none;
    -webkit-appearance: none;
  }

  textarea:focus {
    outline: none;
  }

  a {
    text-decoration:none;
  }

  input[disabled] {
    background-color: white;
  }
`;

export default GlobalStyle;
