import React from 'react';
import ReactDOM from 'react-dom/client';
import {createGlobalStyle} from "styled-components";

import App from './App';

const Global = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Comfortaa, sans-serif;
  }
`

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    <>
        <Global/>
        <App/>
    </>
);

