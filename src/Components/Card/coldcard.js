import React,{Component} from 'react';
import './coldcard.css';



class ColdCard extends Component {
  render(){
    const { itemName, itemContents, itemIngredients} = this.props;
    
    return(
        <div className="ColdCard">

          <h1>{itemName}</h1>

            <div className='glass'>

                <div className={itemContents}></div>

                <div className='ice1'></div>

                <div className='ice2'></div>

                <div className='ice3'></div>
                
            </div>

            <div className='drink-ingredients'>
                    <h3>{itemIngredients}</h3>
                </div>

        </div>
    )
  }
}

export default ColdCard;