import React from 'react';
import classes from './Toolbar.css';
import Logo from '../../Logo/Logo';
import NavItems from '../NavigationItems/NavigationItems';
import menulogo from '../../../assets/images/menu.png';
import MenuButton from '../../UI/MenuButton/MenuButton';

const toolbar = (props) => {
  return (
    <header className={classes.Toolbar}>
       <MenuButton toggle={props.toggle}/>
       <div className={classes.Logo}>
        <Logo/>
       </div>
        <nav className={classes.desktopOnly}> 
           <NavItems></NavItems>
        </nav>
    </header>
  )
}

export default toolbar;
