import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/header.css'
import { faHome, faClone, faUser, faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const header = () => {
    return (
        <div className='header'>
            <img src='../images/chechilogo.png'></img>
            <nav className='nav_bar'>
                <Link to="/"> <FontAwesomeIcon icon={faHome} /> Home</Link>
                <Link to="/about"><FontAwesomeIcon icon={faUser} />About</Link>
                <Link to="/contacts"><FontAwesomeIcon icon={faPhone} />Contacts</Link>
                <Link to="/services"><FontAwesomeIcon icon={faClone}/>Services</Link>
            </nav>
        </div>
    );
};

export default header;
