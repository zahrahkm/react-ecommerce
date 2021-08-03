import React from "react";
import {Link} from "react-router-dom";
import './header.style.css'
import {Container} from "@material-ui/core";

const Header=()=>(
    <Container maxWidth='xl' >
    <div className='header'>
        <div>
            <Link to='/' className="logo-container">
                <img src="../../zhlogo.png" alt="logo" className="logo"/>
            </Link>
        </div>
        <div className='options'>
            <Link to='/shop' className='option'>SHOP</Link>
            <Link to='/contact' className='option'>CONTACT</Link>
        </div>
    </div>
    </Container>
)

export default Header;