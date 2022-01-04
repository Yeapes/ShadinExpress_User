import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import HomePage from './pages/HomePage';
 
  
class App extends  Component {
    render() { 
        return(
            <Fragment>
                 <HomePage />
            </Fragment>
        );
    }
}
 
export default App;