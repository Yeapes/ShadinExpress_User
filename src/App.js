import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
 
  
class App extends  Component {
    render() { 
        return(
            <Fragment>
                <div>
                    <h1>Bookkeeper</h1>
                    <nav
                        style={{
                        borderBottom: "solid 1px",
                        paddingBottom: "1rem"
                        }}
                    >
                        <Link to="/">Home</Link> |{" "} 
                        <Link to="/test">Test</Link>
                    </nav>
                </div>
            </Fragment>
        );
    }
}
 
export default App;