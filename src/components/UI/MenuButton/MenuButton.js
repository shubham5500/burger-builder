import React from 'react';
import menulogo from '../../../assets/images/menu.png';

const menuButton = (props) => {

    let styleButton = {
        cursor: 'pointer'
    }
  return (
    <div onClick={props.toggle}>
        <img style={styleButton} src={menulogo}/>
    </div>
  )
}

export default menuButton
