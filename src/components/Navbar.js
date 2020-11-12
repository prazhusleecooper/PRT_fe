// ? NPM library import
import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import * as Icon from 'react-feather';

// ? Project files import
import '../styling/Navbar.css';


class Navbar extends Component {

    constructor(props) {

        super(props);

        this.state = {

            navBarOpen: false,
        };
    }

    // ? Non-rendering Methods
    // * Toggle collapse of the NavBar
    toggleCollapse = () => {
        
        this.setState({ navBarOpen: !this.state.navBarOpen });
    }// * End of toggleCollapse Method


    // ? Rendering methods


    // ? Render Method
    render() {

        return(

            <div>
                <div className='navBar'>
                    <div className='navBar-left'>
                        PRT Customers App
                    </div>

                    <div className='navBar-right'>
                        <NavLink 
                            to='/addCustomer'
                            className='nav-link'
                            activeClassName='nav-link-active'
                        >
                                <Icon.UserPlus size={ 18.5 } /> &nbsp; Add Customer
                        </NavLink>
                        <NavLink 
                            to='/customerList'
                            className='nav-link'
                            activeClassName='nav-link-active'
                        >
                            <Icon.List size={ 18.5 } /> &nbsp; Customers List
                        </NavLink>
                    </div>
                </div>    
            </div>
        );
    }
}

export default Navbar;