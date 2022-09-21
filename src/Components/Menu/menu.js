import React from 'react';
import './menu.css';

import HotCard from '../Card/hotcard';
import ColdCard from '../Card/coldcard';
import BobaCard from '../Card/bobacard';


const Menu = () => {

    return(
        <div className='Menu'>
            <div className='Title'>
                <h2>Menu</h2>
            </div>
        
        <div className='Drinks'>
            <HotCard itemName={"Latte"} itemIngredients={"expresso, steamed milk, milk foam"} itemContents={'latte'}></HotCard>
            <HotCard itemName={"Café Bombón"} itemIngredients={"expresso, condensed milk"} itemContents={'bombon'}></HotCard>
            <HotCard itemName={"Cappuccino"} itemIngredients={"expresso, steamed milk, milk foam"} itemContents={'cappuccino'}></HotCard>
            <HotCard itemName={"Green Tea"} itemIngredients={"macha green tea"} itemContents={'greenTea'}></HotCard>
            <HotCard itemName={"Chai Tea Latte"} itemIngredients={"chai tea, steamed milk, milk foam"} itemContents={'chaiTeaLatte'}></HotCard>
            <HotCard itemName={"London Fog"} itemIngredients={"earl grey tea, vanilla, lavender, brown sugar, steamed milk, milk foam"} itemContents={'londonFog'}></HotCard>
            <ColdCard itemName={"Lemonade"} itemIngredients={"lemon juice, sugar"} itemContents={'lemonade'}></ColdCard>
            <ColdCard itemName={"Dragon Fruit Lemonade"} itemIngredients={"dragon fruit, lemonade, maple syrup"} itemContents={'dragonFruit'}></ColdCard>
            <ColdCard itemName={"Butterfly Lemonade"} itemIngredients={"butterfly pea blossoms, lemonade"} itemContents={'butterfly'}></ColdCard>
            <ColdCard itemName={"Iced Chai Tea Latte"} itemIngredients={"chai tea, milk"} itemContents={'iceChaiTeaLatte'}></ColdCard>
            <ColdCard itemName={"Iced English Breakfast Tea Latte"} itemIngredients={"English breakfast tea, milk"} itemContents={'iceBreakfastTeaLatte'}></ColdCard>
            <ColdCard itemName={"Iced Green Tea Latte"} itemIngredients={"matcha tea, milk"} itemContents={'iceGreenTeaLatte'}></ColdCard>
            <BobaCard itemName={"Boba Tea"} itemIngredients={"black tea, milk, boba pearls"} itemContents={'bobaTea'}></BobaCard>
        </div>

      </div>
    )
}

export default Menu;