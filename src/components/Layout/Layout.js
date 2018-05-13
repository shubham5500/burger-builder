import React from 'react';
import layoutClasses from './Layout.css';
import Aux from '../../hoc/Auxi';

const layout = (props) => (
   <Aux>
        <div>Toolbar, Sidebar, Backdrop</div>
        <main className={layoutClasses.Content}>
            {props.children}
        </main>
   </Aux>
);

export default layout;