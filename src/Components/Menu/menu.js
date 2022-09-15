import React from 'react';
import './menu.css';

import Card from '../Card/card';


const Menu = () => {

    return(
        <div className='Menu'>
            <div className='Title'>
                <h2>Menu</h2>
            </div>
        
        <div className='Drinks'>
            <Card itemName={"Latte"}></Card>
            <Card itemName={"Green Tea"}></Card>
            <h3>Green Tea</h3>
        </div>

      </div>
    )
}

export default Menu;