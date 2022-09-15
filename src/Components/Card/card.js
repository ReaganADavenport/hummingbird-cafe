import React,{Component} from 'react';
import './card.css';



class Card extends Component {
  render(){
    const { itemName, itemIngredients} = this.props;
    
    return(
        <div className="Card">

          <h2>{itemName}</h2>
        
            <div className='coffee-cup'>
                
            </div>

            <div className='drink-ingredients'>
                    <h3>{itemIngredients}</h3>
                </div>

        </div>
    )
  }
}

export default Card;