import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.css';
import Counter from './components/counter'
import CounterF from './components/counterF'
import CountersTrail from './components/counters'
import APICall from './components/apiCall'
import Formik from './components/formikPrac'
import ReactRouter from './components/reactRouter'
import UseReducer from './components/useReducer'
import UserEffect from './components/useEffect';
import UseRef from './components/useRef';


ReactDOM.render(
  
    <UseRef/>,
  document.getElementById('root')
  
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
