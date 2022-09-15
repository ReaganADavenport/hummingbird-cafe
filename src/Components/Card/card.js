import React,{Component} from 'react';
import './card.css';



class Card extends Component {
  render(){
    const { itemName} = this.props;
    
    return(
        <div className="Card">

          <h2>{itemName}</h2>


        </div>
    )
  }
}

export default Card;