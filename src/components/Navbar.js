import React from 'react';

import './styles/Navbar.css';
import confLogo from '../images/badge-header.svg';
import { Link } from 'react-router-dom';


class Navbar extends React.Component {
    render() {
        return(
            <div className="Navbar">
                <div className="container-fluid">   
                    <Link className="Navbar__brand" to="/">
                        <img className="Navbar__brand-logo" src={confLogo} alt="logo"/>
                        <span className="font-weight-light">Platzi</span>
                        <span className="font-weight-bold">Conf</span>
                    </Link>  
                </div>         
            </div>
        );
    }
}

export default Navbar;
