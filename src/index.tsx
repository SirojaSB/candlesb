import React from 'react';
import ReactDOM from 'react-dom/client';
import {createGlobalStyle} from "styled-components";

import App from './App';
import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";
import {store} from './redux/store'

const Global = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Comfortaa, sans-serif;
    color: #0B254B;
    
    input:focus-visible {
      outline: none;
    }
  }
`

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    <>
        <Global/>
        <BrowserRouter>
            <Provider store={store}>
                <App/>
            </Provider>
        </BrowserRouter>
    </>
);

