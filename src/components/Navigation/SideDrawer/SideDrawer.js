import React from 'react';
import classes from './SideDrawer.css';
import Logo from '../../Logo/Logo';
import NavItems from '../NavigationItems/NavigationItems';
import Backdrop from '../../UI/Backdrop/Backdrop';
import Aux from '../../../hoc/Auxi';
const sideDrawer = (props) => {

  let showDrawerMenu = [classes.SideDrawer, classes.Close];

  if(props.open){
    showDrawerMenu = [classes.SideDrawer, classes.Open];
  }

  return (
    <Aux>
      <Backdrop show={props.open} clicked={props.closed}/>
      <div className={showDrawerMenu.join(' ')}>
      <div className={classes.Logo}> <Logo/></div>
        <nav>
            <NavItems/>
        </nav>
      </div>
    </Aux>
  )
}

export default sideDrawer;
