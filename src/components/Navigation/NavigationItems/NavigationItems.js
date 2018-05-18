import React from 'react';
import classes from './NavigationItems.css';
import NavLink from './NavigationLink/NavigationLink';
const navItems = (props) => {
  return (
    <ul className={classes.NavigationItems}>
        <NavLink link="/" active>Burger Builder</NavLink>
        <NavLink link="/">Check Out</NavLink>
    </ul>
  )
}

export default navItems;
