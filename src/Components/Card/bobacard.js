import React,{Component} from 'react';
import './bobacard.css';



class BobaCard extends Component {
  render(){
    const { itemName, itemContents, itemIngredients} = this.props;
    
    return(
        <div className="BobaCard">

          <h1>{itemName}</h1>

            <div className='glass'>

                <div className={itemContents}></div>

                <div className='ice1'></div>

                <div className='ice2'></div>

                <div className='ice3'></div>

                <div className='boba1'></div>
                <div className='boba2'></div>
                <div className='boba3'></div>
                
            </div>

            <div className='drink-ingredients'>
                    <h3>{itemIngredients}</h3>
                </div>

        </div>
    )
  }
}

export default BobaCard;