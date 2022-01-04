import React from 'react';
import ReactDOM from 'react-dom';  
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import reportWebVitals from './reportWebVitals';
import './assets/css/fontawesome.css'
import App from './App'; 
// Importing the Bootstrap CSS
import 'bootstrap/dist/css/bootstrap.min.css';
import HomePage from './pages/HomePage';
import './assets/css/animate.css' 
 

ReactDOM.render( 
  <BrowserRouter>
    <Routes>
        <Route path="/" element={<App />} /> 
        <Route path="test" element={<HomePage />} />
    </Routes>
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
