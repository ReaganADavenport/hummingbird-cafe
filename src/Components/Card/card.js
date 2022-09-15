import React,{Component} from 'react';
import './card.css';



class Card extends Component {
  render(){
    const { itemName, itemIngredients} = this.props;
    
    return(
        <div className="Card">

          <h1>{itemName}</h1>
        
            <div className='coffee-cup'>
                
            </div>

            <div className='drink-ingredients'>
                    <h2>{itemIngredients}</h2>
                </div>

        </div>
    )
  }
}

export default Card;