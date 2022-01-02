import React, { Component, Fragment } from 'react';
import { BrowserRouter, HashRouter } from 'react-router-dom';
import AppRouter from './route/AppRouter';
  
class App extends  Component {
    render() { 
        return(
            <Fragment>
              <BrowserRouter  basename="/">
                <AppRouter />
            </BrowserRouter>
            </Fragment>
        );
    }
}
 
export default App;