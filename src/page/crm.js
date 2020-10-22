import React from 'react';
import Navbar from '../components/Navbar/navbar';
import Main from '../components/Main/Main';
import Contacts from '../components/Contacts/contacts';
import './styles/crm.css';
/* This component Render the three Main parts of the Code Navbar, Main and the Contact part*/
const Crm = () => {
    return(
        <div className="container-crm">
            <Navbar className="container-navbar"/>
            <Main className="container-main"/>
            <Contacts className="container-contacts"/>
        </div>
    )
}

export default Crm