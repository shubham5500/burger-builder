import React from 'react';
import Aux from '../../../hoc/Auxi';
import Button from '../../UI/Button/Button';

const orderSummary = (props) => {
  const ingredientList = Object.keys(props.ingredients).map((igKey)=>{
    console.log('Hello', igKey, 'Yolo', props.ingredients[igKey]);
    return <li key={igKey + props.ingredients[igKey]}>
              <span style={{ textTranform: 'capitalize'}}>{igKey}</span>: {props.ingredients[igKey]}
            </li>
  });
  
  return (
    <Aux>
      <h3>Your Order</h3>
      <p>You have following ingredients in your burger: </p>
      <ul>
        {ingredientList}
      </ul>
      <p>Your total price: {props.price}</p>
      <p>Check out now?</p>
      <Button btnType="Danger" clicked={props.cancel}>Cancel</Button>
      <Button btnType="Success" clicked={props.continue}>Continue</Button>
    </Aux>
  )
}

export default orderSummary;
