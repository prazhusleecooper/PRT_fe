import React, { Component } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import * as Icon from 'react-feather';

import '../styling/AddCustomer.css';

var validate = require('validate.js');
//* CONSTRAINTS for the email validation for Validate.JS
var constraints = {
    
    emailAddress: {
      
        presence: {
        
            allowEmpty: false,
            message: "Please enter an email address",
            value: 0,
        },
      
        email: {
            message: "Please enter a valid email address",
            value: -1,
        }
    },
};

class AddCustomer extends Component {
    
    constructor(props) {
        
        super(props);

        this.state = {
            customerName: '',
            customerEmail: '',
            customerPhone1: '',
            customerPhone2: '',
            customerHouseNo: '',
            customerRoadName: '',
            customerAreaName: '',
            customerLandMark: '',
            customerCity: '',
            customerPin: '',
            customerCountry: 'India',
        };
    }

    // ? Rendering Methods

    // ? Non-Rendering Methods
    // * Method to Add a Customer - Form submit
    addCustomer() {

        let formValid = this.validateForm();
        
        if(formValid) {
            
            toast.success('✅ Customer Added Successfully!');
        }

    } // * End of addCustomer Method

    // * Method to handle TextField Change
    handleTextFieldChange(event) {
        
        this.setState({
            [event.target.name]: event.target.value,
        });
    } // * End of handleTextFieldChange Method

    // * Method to clear all the fields of the form
    clearForm() {
        
        this.setState({
            customerName: '',
            customerEmail: '',
            customerPhone1: '',
            customerPhone2: '',
            customerHouseNo: '',
            customerRoadName: '',
            customerAreaName: '',
            customerLandMark: '',
            customerCity: '',
            customerPin: '',
            customerCountry: 'India',
        });

        toast.warning('✏️ Form cleared');

    } // * End of clearForm Method

    // * Method to handle the form validation
    validateForm = () => {
        
        if(this.state.customerName === '' || this.state.customerEmail === '' || this.state.customerPhone1 === '') {

            toast.warning('🙅‍♂️ Please fill all the details!');
            return false;
        }

        var emailValid = validate({ emailAddress: this.state.customerEmail }, constraints );

        if (emailValid === 'undefined') {
            
            toast.warning('Please enter a valid email');
            return false;
        }
    
        return true;
    } // * End of validateForm Method

    // ? Render Method
    render() {
        
        return(

            <div className='primary-section'>
                <ToastContainer
                    position="bottom-right"
                    autoClose={5000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                />

                <div className='form-section'>

                    <div className='heading-section'>Customer Details &nbsp; <Icon.UserPlus /></div>
                    
                    < div
                        className='add-customer-form'
                    >

                        {/* CUSTOMER NAME */}
                        <label>
                            👤 Customer Name: 
                        </label>
                        <br />    
                        <input
                            type='text' 
                            className='customer-name-field form-input-field'
                            name='customerName'
                            value={ this.state.customerName }
                            onChange={ event => this.handleTextFieldChange(event) }
                            label='Customer Name'
                        />
                        
                        <br />
                        <br />

                        {/* CUSTOMER EMAIL */}
                        <label>
                            📧 Customer Email: 
                        </label>
                        <br />
                        <input
                            type='text' 
                            className='customer-email-field form-input-field'
                            name='customerEmail'
                            value={ this.state.customerEmail }
                            onChange={ event => this.handleTextFieldChange(event) }
                            label='Customer Email'
                        />

                        <br />
                        <br />
                        
                        {/* CUSTOMER PHONE ROW */}
                        <div className='forms-row'>
                            {/* CUSTOMER PHONE 1 */}
                            <label className='phone-label'>
                                📱 Phone No.: 
                            </label>
                            <br />
                            <input
                                type='text' 
                                className='customer-phone1-field form-input-field'
                                name='customerPhone1'
                                value={ this.state.customerPhone1 }
                                onChange={ event => this.handleTextFieldChange(event) }
                                label='Customer Phone'
                            />
                            
                            <br />
                            <br />
            
                            {/* CUSTOMER PHONE 2 */}
                            <label className='phone-label'>
                                ☎️ Alternate Phone No.: 
                            </label>
                            <br />
                            <input
                                type='text' 
                                className='customer-phone2-field form-input-field'
                                name='customerPhone2'
                                value={ this.state.customerPhone2 }
                                onChange={ event => this.handleTextFieldChange(event) }
                                label='Customer Alternate Phone'
                            />

                        </div>

                        <br />

                        <hr/>

                        <p className='form-sub-heading'>Address 📓</p>

                        {/* CUSTOMER ADDRESS ROW - I */}
                        <div className='forms-row'>
                            {/* CUSTOMER HOUSE NO */}
                            <label className='address-label'>
                                🏡 House/Flat No.: 
                            </label>
                            <br />
                            <input
                                type='text' 
                                className='customer-houseNo-field form-input-field'
                                name='customerHouseNo'
                                value={ this.state.customerHouseNo }
                                onChange={ event => this.handleTextFieldChange(event) }
                                label='Customer House No.'
                            />
                            
                            <br />
                            <br />
            
                            {/* CUSTOMER ROAD NAME */}
                            <label className='address-label'>
                                🛣️ Road Name.: 
                            </label>
                            <br />
                            <input
                                type='text' 
                                className='customer-roadName-field form-input-field'
                                name='customerRoadName'
                                value={ this.state.customerRoadName }
                                onChange={ event => this.handleTextFieldChange(event) }
                                label='Customer Road Name'
                            />
                        </div>

                        {/* CUSTOMER ADDRESS ROW - II */}
                        <div className='forms-row'>
                            {/* CUSTOMER AREA NAME */}
                            <label className='address-label'>
                                📍 Area Name: 
                            </label>
                            <br />
                            <input
                                type='text' 
                                className='customer-area-field form-input-field'
                                name='customerAreaName'
                                value={ this.state.customerAreaName }
                                onChange={ event => this.handleTextFieldChange(event) }
                                label='Area name'
                            />
                            
                            <br />
                            <br />
            
                            {/* CUSTOMER LANDMARK */}
                            <label className='address-label'>
                                🚧 Landmark: 
                            </label>
                            <br />
                            <input
                                type='text' 
                                className='customer-landmark-field form-input-field'
                                name='customerLandMark'
                                value={ this.state.customerLandMark }
                                onChange={ event => this.handleTextFieldChange(event) }
                                label='Landmark'
                            />
                        </div>
                        
                        {/* CUSTOMER ADDRESS ROW - III */}
                        <div className='forms-row'>
                            {/* CUSTOMER CITY */}
                            <label className='address-label'>
                                🌆 City: 
                            </label>
                            <br />
                            <input
                                type='text' 
                                className='customer-city-field form-input-field'
                                name='customerCity'
                                value={ this.state.customerCity }
                                onChange={ event => this.handleTextFieldChange(event) }
                                label='City'
                            />
                            
                            <br />
                            <br />
            
                            {/* CUSTOMER Pin */}
                            <label className='address-label'>
                                🔢 PIN Code: 
                            </label>
                            <br />
                            <input
                                type='text' 
                                className='customer-pin-field form-input-field'
                                name='customerPin'
                                value={ this.state.customerPin }
                                onChange={ event => this.handleTextFieldChange(event) }
                                label='Pin'
                            />
                        </div>

                        <div className='forms-row country-row'>
                            {/* CUSTOMER Country */}
                            <label className='address-label'>
                                🗺️ Country: 
                            </label>
                            <br />
                            <input
                                type='text' 
                                className='customer-country-field form-input-field'
                                name='customerCountry'
                                value={ this.state.customerCountry }
                                onChange={ event => this.handleTextFieldChange(event) }
                                label='Country'
                            />
                        </div>
                        
                        <br />

                        {/* FORM BUTTONS ROW */}
                        <div className='form-btns-row'>
                            <button
                                className='add-customer-btn form-btn'
                                onClick={ () => this.addCustomer() }
                            >
                                <Icon.UserPlus size={ 18 } /> &nbsp; Add Customer
                            </button>

                            <button 
                                className='clear-form-btn form-btn'
                                onClick={ () => this.clearForm() }
                            >
                                <Icon.X size={ 18 } /> &nbsp; Clear Form
                            </button>
                        </div>

                    </div>
                </div>
            </div>
        );
    }
}

export default AddCustomer;