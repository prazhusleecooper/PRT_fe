import React, { Component } from 'react';
import { MDBContainer, MDBBtn, MDBModal, MDBModalBody, MDBModalHeader, MDBModalFooter } from 'mdbreact';

import Modal from 'react-bootstrap/Modal';

import '../styling/CustomerList.css';

class CustomerList extends Component {
    
    constructor(props) {
        
        super(props);

        this.state = {
            searchQuery: '',
            modal: false,
            customerData: [
                    {
                        id: '1',
                        customerName: 'Prashanth',
                        customerEmail: 'prashu@gmail.com',
                        customerPhone1: '9944411899',
                        customerPhone2: '7904190190',
                        customerHouseNo: '101',
                        customerRoadName: 'Ramachandra road',
                        customerAreaName: 'R.S.Puram',
                        customerLandMark: 'Beside @Home',
                        customerCity: 'Coimbatore',
                        customerPin: '641002',
                        customerCountry: 'India',
                    },
                    {
                        id: '2',
                        customerName: 'Prashanth2',
                        customerEmail: 'prashu2@gmail.com',
                        customerPhone1: '9944411892',
                        customerPhone2: '7904190192',
                        customerHouseNo: '101',
                        customerRoadName: 'Ramachandra road',
                        customerAreaName: 'R.S.Puram',
                        customerLandMark: 'Beside @Home',
                        customerCity: 'Coimbatore',
                        customerPin: '641002',
                        customerCountry: 'India',
                    },
                    {
                        id: '3',
                        customerName: 'Prashant3',
                        customerEmail: 'prashu3@gmail.com',
                        customerPhone1: '9944411893',
                        customerPhone2: '7904190193',
                        customerHouseNo: '101',
                        customerRoadName: 'Ramachandra road',
                        customerAreaName: 'R.S.Puram',
                        customerLandMark: 'Beside @Home',
                        customerCity: 'Coimbatore',
                        customerPin: '641002',
                        customerCountry: 'India',
                    },
            ],
            searchResults: [
                {
                    id: '1',
                    customerName: 'Prashanth',
                    customerEmail: 'prashu@gmail.com',
                    customerPhone1: '9944411899',
                    customerPhone2: '7904190190',
                    customerHouseNo: '101',
                    customerRoadName: 'Ramachandra road',
                    customerAreaName: 'R.S.Puram',
                    customerLandMark: 'Beside @Home',
                    customerCity: 'Coimbatore',
                    customerPin: '641002',
                    customerCountry: 'India',
                },
                {
                    id: '2',
                    customerName: 'Prashanth2',
                    customerEmail: 'prashu2@gmail.com',
                    customerPhone1: '9944411892',
                    customerPhone2: '7904190192',
                    customerHouseNo: '101',
                    customerRoadName: 'Ramachandra road',
                    customerAreaName: 'R.S.Puram',
                    customerLandMark: 'Beside @Home',
                    customerCity: 'Coimbatore',
                    customerPin: '641002',
                    customerCountry: 'India',
                },
                {
                    id: '3',
                    customerName: 'Prashant3',
                    customerEmail: 'prashu3@gmail.com',
                    customerPhone1: '9944411893',
                    customerPhone2: '7904190193',
                    customerHouseNo: '101',
                    customerRoadName: 'Ramachandra road',
                    customerAreaName: 'R.S.Puram',
                    customerLandMark: 'Beside @Home',
                    customerCity: 'Coimbatore',
                    customerPin: '641002',
                    customerCountry: 'India',
                },
            ],
            selectedCustomer: '',
        };
    }

    // * Method to toggle on the modal
    toggleOn = () => {
        
        this.setState({
            modal:true,
        })
    }
    
    // * Method to toggle off the modal
    toggleOff = () => {
        
        this.setState({
          modal: false,
          selectedCustomer: '',
        });
    }

    // * Method to select customer to display the complete information in the modal
    selectCustomer = (customer) => {

        console.log('SLEECT CUSTOMER', customer);

        this.setState({

            modal: true,
            selectedCustomer: customer
        })
    }

    // ? Rendering Methods
    // * Render the Customers table
    customerTable = () => {
        
        return this.state.searchResults.map((data) => {
            
            return(

                <tr onClick={ () => this.selectCustomer(data) }>
                    <td> { data.customerName } </td>
                    <td> { data.customerEmail } </td>
                    <td> { data.customerPhone1 } </td>   
                    <td> { `${ data.customerHouseNo }, ${ data.customerRoadName }, ${ data.customerAreaName }, ${ data.customerCity } - ${ data.customerPin }` } </td>   
                </tr>
            )
        });
    }

    // * Method to Render the Customer Information Modal
    customerInformationModal = () => {


        if(this.state.selectedCustomer !== '') {
            return(
                <Modal 
                        show={this.state.modal} 
                        onHide={ () => this.toggleOff()}
                        size='md'
                >
                        <Modal.Header closeButton className='modal-header'>Customer Information</Modal.Header>
                        <Modal.Body>
                            <div class='modal-row'>
                                <div className='modal-row-data'>
                                    <span className='modal-field-name'>ID</span>: { this.state.selectedCustomer.id }
                                </div>
                            </div>

                            <br />

                            <div class='modal-row'>
                                <div className='modal-row-data'>
                                    <span className='modal-field-name'>Name</span>: { this.state.selectedCustomer.customerName }
                                </div>
                                <div>
                                    <span className='modal-field-name'>Email</span>: { this.state.selectedCustomer.customerEmail }
                                </div>
                            </div>

                            <br />

                            <div className='modal-row'>
                                <div className='modal-row-data'>
                                    <span className='modal-field-name'>Phone</span>: { this.state.selectedCustomer.customerPhone1 }
                                </div>
                                <div>
                                    <span className='modal-field-name'>Alternate Phone</span>: { this.state.selectedCustomer.customerPhone2 }
                                </div>
                            </div>

                            <br />

                            <div className='modal-row-address'>
                                    <span className='modal-field-name'>Address</span>: <br /> 
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{ this.state.selectedCustomer.customerHouseNo }, { this.state.selectedCustomer.customerRoadName },<br />
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{ this.state.selectedCustomer.customerAreaName }, <br />
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Landmark: { this.state.selectedCustomer.customerLandMark } <br />
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{ this.state.selectedCustomer.customerCity } - { this.state.selectedCustomer.customerPin }, <br />
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{ this.state.selectedCustomer.customerCountry }.
                            </div>
                        </Modal.Body>
                </Modal>
            );
        }
    }


    // * Render Method
    render() {
        
        return(

            <div className='primary-section'>

                { this.customerInformationModal() }

                <div class='heading-row'>
                    Customers List
                </div>

                <hr />

                <div className='search-bar-section'>
                    Search: &nbsp;&nbsp;
                    <input 
                        type='text'
                        onClick={ (event) => this.setState({ searchQuery: event.target.value }) }
                    />
                </div>

                <br />

                <div className='table-section'>

                    <table width='100%'>
                            <tr className='table-header'>
                                <th width='20%'>Name</th>
                                <th width='20%'>Email</th>
                                <th width='20%'>Phone</th>
                                <th width='40%'>Address</th>
                            </tr>

                            <tbody>
                                { this.customerTable() }
                            </tbody>
                        
                    </table>

                </div>
            </div>
        );
    }
}

export default CustomerList;