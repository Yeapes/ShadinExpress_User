import React, { Component, Fragment } from 'react';
import {Route, Routes} from 'react-router';
import HomePage from '../pages/HomePage';
class AppRouter extends Component {
    render() { 
        return(
            <Fragment>
                <Routes >
                    <Route exact path="/" component={HomePage} /> 
                </Routes > 
            </Fragment>
        );
    }
}
 
export default AppRouter;