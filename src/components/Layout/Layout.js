import React from 'react';
import layoutClasses from './Layout.css';
import Aux from '../../hoc/Auxi';
import Toolbar from '../Navigation/Toolbar/Toolbar';

const layout = (props) => (
   <Aux>
        <Toolbar/>
        <main className={layoutClasses.Content}>
            {props.children}
        </main>
   </Aux>
);

export default layout;