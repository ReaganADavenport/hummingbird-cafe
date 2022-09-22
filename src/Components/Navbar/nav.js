import React from 'react';
import './nav.css'

import logo from "../../Assets/logo.png"

const Nav = () => {
    return(
        <div className='Nav'>
            <div className='Logo'>
                <a href='/'><img src={logo}></img></a>
            </div>
            <div className='Links'>
                <a href='#Menu'><p>Menu</p></a>
                <a href=''><p>Location</p></a>
            </div>
            
        </div>
    )
    };

export default Nav;