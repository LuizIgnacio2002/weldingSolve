import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html, body, #root {
    width: 100%;
    height: 100%;
  }

  body {
    font-family: Arial, sans-serif;
    background-color: #f0f0f0;
    overflow-y: auto; /* Enable vertical scrolling */
    margin: 0px;
  }
`;
