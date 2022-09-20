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
            <Card itemName={"Latte"} itemIngredients={"expresso, steamed milk, milk foam"} itemContents={'latte'}></Card>
            <Card itemName={"Green Tea"} itemIngredients={"green tea"} itemContents={'greenTea'}></Card>
        </div>

      </div>
    )
}

export default Menu;