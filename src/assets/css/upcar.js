import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  @import url('https://fontlibrary.org/face/minecraftia');

  *,
  *::before,
  *::after {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 62.5%;
    min-height: 100%;
  }

  body {
    background: #4e54c8;
    background: -webkit-linear-gradient(to right, #8f94fb, #4e54c8);  
    background: linear-gradient(to right, #8f94fb, #4e54c8);

  }

  body, input {
    font-family: 'MinecraftiaRegular', sans-serif;
    font-size: 1.6rem;
    -webkit-font-smooting: antialiased !important;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  ::selection {
    background: #FFFF6C;
    color: #fff;
  }
`;
