import React from 'react';
import {Link} from 'react-router-dom';

import  Logo  from '../../assets/logoBleet.png';

import './header.styles.scss'

const Header = () =>(
    <div className='header'>
        <Link className='logo-container' to="/">
          <img src={Logo} alt="Logo"/>
        </Link>
        <div className='options'>
            <Link className='option' to='/shop'>
                SHOP
            </Link>
            <Link className='option' to='/shop'>
                CONTACT
            </Link>
           
        </div>
    </div>
)

export default Header;