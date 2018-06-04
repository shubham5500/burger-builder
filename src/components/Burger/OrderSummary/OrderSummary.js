import React, { Component } from 'react';
import Aux from '../../../hoc/Auxi';
import Button from '../../UI/Button/Button';

class OrderSummary extends Component{

  componentWillUpdate(){
    console.log('[OrderSummery.js]');
  }

  render(){
    const ingredientList = Object.keys(this.props.ingredients).map((igKey)=>{
      return <li key={igKey + this.props.ingredients[igKey]}>
                <span style={{ textTranform: 'capitalize'}}>{igKey}</span>: {this.props.ingredients[igKey]}
              </li>
    });
    return (
      <Aux>
        <h3>Your Order</h3>
        <p>You have following ingredients in your burger: </p>
        <ul>
          {ingredientList}
        </ul>
        <p>Your total price: {this.props.price}</p>
        <p>Check out now?</p>
        <Button btnType="Danger" clicked={this.props.cancel}>Cancel</Button>
        <Button btnType="Success" clicked={this.props.continue}>Continue</Button>
      </Aux>
    )
  }
} 

export default OrderSummary;
