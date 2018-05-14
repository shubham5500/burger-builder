import React from 'react';
import classes from './BuildControllers.css';

const buildControllers = (props) => {
    return (
        <div className={classes.BuildControllers}>
            <div className={classes.Label}>{props.label}</div>
            <button className={classes.Less}>Less</button>
            <button onClick={() => props.moreFunc(props.type)} className={classes.More}>More</button>
        </div>
    )
}

export default buildControllers;