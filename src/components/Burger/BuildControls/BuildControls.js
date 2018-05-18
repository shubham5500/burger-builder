import React from 'react';
import classes from './BuildControls.css';
import BuildControllers from './BuildControllers/BuildControllers';

const controls = [
    {label: 'Salad', type: 'salad'},
    {label: 'Meat', type: 'meat'},
    {label: 'Cheese', type: 'cheese'},
    {label: 'Bacon', type: 'bacon'}
]

const buildControls = (props) => {
    return (        
        <div className={classes.BuildControl}>
           <p>Current Price is: <strong>{props.price.toFixed(2)}</strong></p>
           {controls.map((cltr)=>{
               return <BuildControllers moreFunc={props.more} 
                                        lessFunc={props.less}
                                        type={cltr.type} 
                                        key={cltr.label} 
                                        label={cltr.label}/>
           })}
           <button onClick={props.purchasing} disabled={!props.purchasable} className={classes.OrderButton}>ORDER NOW</button>
        </div>
    )
}

export default buildControls;