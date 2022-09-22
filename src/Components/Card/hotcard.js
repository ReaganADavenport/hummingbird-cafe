import React,{Component} from 'react';
import './hotcard.css';



class HotCard extends Component {
  render(){
    const { itemName, itemContents, itemIngredients} = this.props;
    
    return(
        <div className="HotCard">

          <h1>{itemName}</h1>


            <div className='drink-steam'>
              <span className='steam'></span>
              
            </div>
            <div className='cup'>
              <div className={itemContents}></div>
                
            </div>

            <div className='drink-ingredients'>
                    <h3>{itemIngredients}</h3>
                </div>

        </div>
    )
  }
}

export default HotCard;