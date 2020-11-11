import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import AddCustomer from '../pages/AddCustomer';
import CustomerList from '../pages/CustomerList';

class Routing extends Component {

    constructor(props) {
        
        super(props);

        this.state = {

        };
    }

    render() {

        return(

            <Switch>
                <Route path='/addCustomer'>
                    <AddCustomer />
                </Route>
                <Route path='/customerList'>
                    <CustomerList />
                </Route>
            </Switch>
        );
    }
}

export default Routing;