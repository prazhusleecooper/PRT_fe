// ? NPM packages import
import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from 'react-router-dom';

// ? Project Files import
import Routing from './Routing';
import Navbar from '../components/Navbar';

class Layout extends Component {

    constructor(props) {
        
        super(props);
        
        this.state = {

        };

    }

    render() {
        
        return(
            
            <>
                <Router>
                    <Navbar />
                    <Routing />
                </Router>
            </>
        );
    }
}

export default Layout;