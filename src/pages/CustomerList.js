import React, { Component } from 'react';
import { CSVLink } from 'react-csv';
import * as Icon from 'react-feather';
import Modal from 'react-bootstrap/Modal';

import '../styling/CustomerList.css';
import { ToastContainer, toast } from 'react-toastify';

var moment = require('moment'); 
class CustomerList extends Component {
    
    constructor(props) {
        
        super(props);

        this.state = {
            loading: false,
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
                        whatsapp: true,
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
                        whatsapp: true,
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
                        customerPin: '641003',
                        customerCountry: 'India',
                        whatsapp: false,
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
                    whatsapp: true,
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
                    whatsapp: true,
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
                    customerPin: '641003',
                    customerCountry: 'India',
                    whatsapp: false,
                },
            ],
            selectedCustomer: '',
            customerHeaders: [
                { label: 'ID', key: 'id' },
                { label: 'Name', key: 'customerName' },
                { label: 'Email', key: 'customerEmail' },
                { label: 'Phone', key: 'customerPhone1' },
                { label: 'Alternate Phone', key: 'customerPhone2' },
                { label: 'House/Flat no.', key: 'customerHouseNo' },
                { label: 'Road Name', key: 'customerRoadName' },
                { label: 'Area', key: 'customerAreaName' },
                { label: 'Landmark', key: 'customerLandMark' },
                { label: 'City', key: 'customerCity' },
                { label: 'PIN code', key: 'customerPin' },
                { label: 'Country', key: 'customerCountry' },
            ],
        };
    }



    // ? Non-Rendering Methods
    // * Method to toggle on the modal
    toggleOn = () => {
        
        this.setState({
            modal:true,
        })
    } // * End of toggleOn Method
    

    // * Method to toggle off the modal
    toggleOff = () => {
        
        this.setState({
          modal: false,
          selectedCustomer: '',
        });
    } // * End of toggleOff Method


    // * Method to select customer to display the complete information in the modal
    selectCustomer = (customer) => {

        this.setState({

            modal: true,
            selectedCustomer: customer
        })
    } // * End of selecteCustomer Method


    // * Method to generate/filter the serach results
    filterSearchResults = (event) => {

        this.setState({
            searchQuery: event.target.value,
        })

        var searchResults = this.state.customerData.filter((customerData) => {

            if(customerData.customerName.includes(this.state.searchQuery) ||
                customerData.customerEmail.includes(this.state.searchQuery) ||
                customerData.customerPhone1.includes(this.state.searchQuery) ||
                customerData.customerPhone2.includes(this.state.searchQuery) ||
                customerData.customerPhone2.includes(this.state.searchQuery) ||
                customerData.customerHouseNo.includes(this.state.searchQuery) ||
                customerData.customerRoadName.includes(this.state.searchQuery) ||
                customerData.customerAreaName.includes(this.state.searchQuery) ||
                customerData.customerLandMark.includes(this.state.searchQuery) ||
                customerData.customerCity.includes(this.state.searchQuery) ||
                customerData.customerCountry.includes(this.state.searchQuery) ||
                customerData.customerPin.includes(this.state.searchQuery)
                
            ) {
                return customerData;
            }
        });

        console.log('SEARCH RESULTS::', searchResults);
    } // * End of filterSearchResults Method


    // * Method to search customers
    searchCustomers = () => {
        
        this.setState({
            loading: true,
        })

        var searchResults = this.state.customerData.filter((customerData) => {

            if(customerData.customerName.toLowerCase().includes(this.state.searchQuery.toLowerCase()) ||
                customerData.customerEmail.toLowerCase().includes(this.state.searchQuery.toLowerCase()) ||
                customerData.customerPhone1.toLowerCase().includes(this.state.searchQuery.toLowerCase()) ||
                customerData.customerPhone2.toLowerCase().includes(this.state.searchQuery.toLowerCase()) ||
                customerData.customerPhone2.toLowerCase().includes(this.state.searchQuery.toLowerCase()) ||
                customerData.customerHouseNo.toLowerCase().includes(this.state.searchQuery.toLowerCase()) ||
                customerData.customerRoadName.toLowerCase().includes(this.state.searchQuery.toLowerCase()) ||
                customerData.customerAreaName.toLowerCase().includes(this.state.searchQuery.toLowerCase()) ||
                customerData.customerLandMark.toLowerCase().includes(this.state.searchQuery.toLowerCase()) ||
                customerData.customerCity.toLowerCase().includes(this.state.searchQuery.toLowerCase()) ||
                customerData.customerCountry.toLowerCase().includes(this.state.searchQuery.toLowerCase()) ||
                customerData.customerPin.toLowerCase().includes(this.state.searchQuery.toLowerCase())
            ) {
                return customerData;
            }
        });

        this.setState({
            searchResults: searchResults,
            loading: false,
        })
    } // * End of searchCustomers Method



    // ? Rendering Methods
    // * Render the Search bar section
    searchBarSection = () => {

        return(
            
            <div className='search-bar-section'>
                Search Customer: &nbsp;&nbsp;
                <input 
                    type='text'
                    onChange={ event => this.setState({ searchQuery: event.target.value }) }
                    className='search-text-input'
                /> 
                <button
                    onClick={() => this.searchCustomers()}
                    className='search-btn'
                >
                    <Icon.Search color='#FFFFFF' size={15} />
                    &nbsp;
                    Search
                </button>
            </div>
        );
    } // * End of searchBarSection Method


    // * Render the download buttons section
    downloadButtonSection = () => {

        return(

            <div className='download-btns-section'>
                <CSVLink
                    data={ this.state.searchResults.map(({ whatsapp, ...rest }) => rest) }
                    filename={ `PRT Customers-filtered List - ${ moment().format('dd-mm-yyyy') }.csv` }
                    headers={ this.state.customerHeaders }
                    className="donwload-filtered-btn"
                    target="_blank"
                    onClick={ event => {
                        toast.warning('🙅‍♂️ There are no filtered Customers!')
                        return false; // ? Preventing the download of the CSV file since there is no searched/filtered customer data
                    }}
                >
                    🔽 Download Filtered
                </CSVLink>
                <CSVLink
                    data={ this.state.customerData.map(({ whatsapp, ...rest }) => rest) }
                    filename={ `PRT All Customers List - ${ moment().format('DD-MM-yyyy') }.csv` }
                    headers={ this.state.customerHeaders }
                    className="donwload-all-btn"
                    target="_blank"
                >
                    ⏬ Download All
                </CSVLink>
            </div>
        );
    } // * End of downloadButtonSection Method


    // * Render the Customers table
    customerTable = () => {
        
        if(this.state.searchResults.length > 0) {
            
            return this.state.searchResults.map((data) => {
            
                return(
    
                    <tr onClick={ () => this.selectCustomer(data) }>
                        <td> { data.customerName } </td>
                        <td> { data.customerPhone1 } </td>   
                        <td> { `${ data.customerHouseNo }, ${ data.customerRoadName }, ${ data.customerAreaName }, ${ data.customerCity } - ${ data.customerPin }` } </td>   
                        <td> { data.customerEmail } </td>
                    </tr>
                )
            });
        } else {

            return(
                <div className='table-info-section'>
                    No Customers found. Please alter search query.
                </div>
            )
        }
    } // * End of customerTable Method


    // * Method to Render the Customer Information Modal
    customerInformationModal = () => {

        if(this.state.selectedCustomer !== '') {
            return(
                <Modal 
                        show={this.state.modal} 
                        onHide={ () => this.toggleOff()}
                        size='md'
                >
                        <Modal.Header closeButton className='modal-header'>Customer Information &nbsp; <Icon.User color='#1781E8' size={ 25 }/></Modal.Header>
                        <Modal.Body>
                            <div class='modal-row'>
                                <div className='modal-row-data'>
                                    <Icon.Hash color='#1781E8' size={ 18 }/> &nbsp; <span className='modal-field-name'>ID</span>: { this.state.selectedCustomer.id }
                                </div>
                            </div>

                            <br />

                            <div class='modal-row'>
                                <div className='modal-row-data'>
                                    <Icon.UserCheck color='#1781E8' size={ 18 }/> &nbsp; <span className='modal-field-name'>Name</span>: { this.state.selectedCustomer.customerName }
                                </div>
                                <div>
                                    <Icon.AtSign color='#1781E8' size={ 18 }/> <span className='modal-field-name'>Email</span>: { this.state.selectedCustomer.customerEmail }
                                </div>
                            </div>

                            <br />

                            <div className='modal-row'>
                                <div className='modal-row-data'>
                                    <Icon.Smartphone color='#1781E8' size={ 18 }/> &nbsp; <span className='modal-field-name'>Phone</span>: { this.state.selectedCustomer.customerPhone1 }
                                </div>
                                <div>
                                    <Icon.Phone color='#1781E8' size={ 18 }/> <span className='modal-field-name'>Alternate Phone</span>: { this.state.selectedCustomer.customerPhone2 }
                                </div>
                            </div>

                            <br />

                            <div className='modal-row'>
                                <div className='modal-row-data'>
                                    <Icon.MessageCircle color='#1781E8' size={ 19 }/> &nbsp; <span className='modal-field-name'>whatsapp updates</span>: { this.state.selectedCustomer.whatsapp ? 'Yes' : 'No' }
                                </div>
                            </div>

                            <br />

                            <div className='modal-row-address'>
                                <Icon.BookOpen color='#1781E8' size={ 18 }/> <span className='modal-field-name'>Address</span>: <br /> 
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
    } // * End of customerInformationModal Method


    // * Method to render the laoding animation
    loadingAnimation = () => {
        
        return(
            <div className='loading-bg'>
                <div class="spinner-box">
                    <div class="leo-border-1">
                        <div class="leo-core-1"></div>
                    </div> 
                    <div class="leo-border-2">
                        <div class="leo-core-2"></div>
                    </div> 
                </div>
            </div>
        );
    } // * End of loadingAnimation method


    // * Render Method
    render() {
        
        return(

             this.state.loading ? this.loadingAnimation(): 
            
            <div className='primary-section'>


                { this.customerInformationModal() }

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

                <div class='heading-row'>
                    Customers List &nbsp;<Icon.User color='#1781E8'/>
                </div>

                <hr />

                { this.searchBarSection() }

                <br />

                { this.downloadButtonSection() }

                <br />

                <div className='table-section'>

                    <table width='100%'>
                            <tr className='table-header'>
                                <th width='20%'>👤 Name</th>
                                <th width='20%'>☎️ Phone</th>
                                <th width='40%'>📓 Address</th>
                                <th width='20%'>📧 Email</th>
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