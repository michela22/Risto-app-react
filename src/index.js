import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Navbar} from 'react-bootstrap';

//è qui che la componente app viene renderizzata
ReactDOM.render(
  //componenti da renderizzare -- sintassi jsx
  <React.StrictMode> {/* funge da contenitore e verifica che i componenti in
   esso contenuti rispettino le buone pratiche consigliate da React*/}
    <App />
  </React.StrictMode>,
  // qui decido in quale elemento della pagina inserirli
  //trova nella pag html il contenitore root presente nella pag index.html
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
