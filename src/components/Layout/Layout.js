import React from 'react';
import layoutClasses from './Layout.css';
import Aux from '../../hoc/Auxi';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer.js';
const layout = (props) => (
   <Aux>
        <Toolbar/>
        <SideDrawer/> 
        <main className={layoutClasses.Content}>
            {props.children}
        </main>
   </Aux>
);

export default layout;