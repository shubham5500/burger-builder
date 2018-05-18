import React from 'react';
import classes from './Modal.css';
import Backdrop from '../Backdrop/Backdrop'
import Aux from '../../../hoc/Auxi';

const modal = (props) => {
  return (
    <Aux>
      <div className={classes.Modal}
         style={{transform: props.show ? 'translateY(0)': 'translateY(-100vh)',
                  opacity: props.show ? '1': '0'}}>
        {props.children}
      </div>
      <Backdrop clicked={props.modalClosed} show={props.show}/>
    </Aux>
  )
}

export default modal;
