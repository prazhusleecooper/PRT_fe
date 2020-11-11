// ? NPM library import
import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

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
    }


    // ? Render Method
    render() {

        return(

            <>
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
                                Add Customer
                        </NavLink>
                        <NavLink 
                            to='/customerList'
                            className='nav-link'
                            activeClassName='nav-link-active'
                        >
                                Customers List
                        </NavLink>
                    </div>
                </div>    
            </>
        );
    }
}

export default Navbar;