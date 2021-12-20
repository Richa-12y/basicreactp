import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
import reportWebVitals from './reportWebVitals';
import State from "./state";
import Jsx from "./Jsx"
import { DetaBuinding } from './DetaBuinding'//
import Binding from './binding';
import StateProps from './state-props-refe'

ReactDOM.render(
  <React.StrictMode>
    {<Jsx />}
    {/*<App />*/}

    {<State />}
    {<DetaBuinding />}
    {<Binding />}
    <StateProps />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
