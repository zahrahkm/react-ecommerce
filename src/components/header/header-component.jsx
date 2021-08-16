import React from "react";
import {Link} from "react-router-dom";
import './header.style.css'
import {Container} from "@material-ui/core";
import {auth} from '../../firebase/firebase.utils'
import {connect} from "react-redux";

const Header=({currentUser})=>(
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
            {currentUser ?
            <div className='option' onClick={()=>auth.signOut()}>SIGN OUT</div>
            :
            <Link to='/signin' className='option'>SIGN IN</Link>
            }
        </div>
    </div>
    </Container>
)
const mapStateToProps=(state)=>({
    currentUser: state.user.currentUser
})
export default connect(mapStateToProps)(Header);