import React, {Fragment}from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Information from './components/Information/Information'
import reportWebVitals from './reportWebVitals';
import App from './app'


ReactDOM.render(
  <Fragment>
   <Information information="Meus Repositórios"/>
    <App></App>
  </Fragment>,
  document.getElementById('root')
);

reportWebVitals();
