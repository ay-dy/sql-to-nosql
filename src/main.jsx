import React from 'react';
import ReactDOM from 'react-dom/client';
import { createGlobalStyle } from 'styled-components';
import App from './App';
import './fonts.css';

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    padding: 0;
    max-width: 100vw;
  }

  :root {
    min-width: 384px;
    max-width: 768px;
    min-height: 100vh;
    margin: 0 auto;
    padding: 32px;
    font-family: 'Rubik', sans-serif;
    font-size: 16px;
    line-height: 1.5;
    background-color: #112733;
    color: #eef6f9;
  }
`;

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GlobalStyle />
    <App />
  </React.StrictMode>
)
