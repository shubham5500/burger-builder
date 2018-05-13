import React from 'react';
import classes from './BuildControls.css';
import BuildControllers from './BuildControllers/BuildControllers';

const controls = [
    {label: 'Salad', type: 'salad'},
    {label: 'Meat', type: 'meat'},
    {label: 'Cheese', type: 'cheese'},
    {label: 'Bacon', type: 'bacon'}
]

const buildControls = () => {
    return (
        <div className={classes.BuildControl}>
           {controls.map((cltr)=>{
               return <BuildControllers key={cltr.label} label={cltr.label}/>
           })}
        </div>
    )
}

export default buildControls;