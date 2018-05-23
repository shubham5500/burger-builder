import React from 'react';
import classes from './SideDrawer.css';
import Logo from '../../Logo/Logo';
import NavItems from '../NavigationItems/NavigationItems';

const sideDrawer = (props) => {
  return (
    <div className={classes.SideDrawer}>
      <Logo/>
      <nav>
          <NavItems/>
      </nav>
    </div>
  )
}

export default sideDrawer;
