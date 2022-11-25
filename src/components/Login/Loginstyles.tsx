import styled, { createGlobalStyle } from 'styled-components';
export const GlobalStyle = createGlobalStyle`
  body {
    position: absolute;
    width: 100% !important;
    height: 100% !important;
    font-family: "Nunito", sans-serif;
    overflow-x: hidden;
  }
`
export const Input = styled.input`
    background-color: var(--body-bg) !important;
    color: var(--text2-color) !important;
`
