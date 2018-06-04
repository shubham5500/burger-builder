import React, {Component} from 'react';
import layoutClasses from './Layout.css';
import Aux from '../../hoc/Auxi';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer.js';
class Layout extends Component{
    state = {
        showSideDrawer: false
    }

    sideDrawerClose = () => {
        this.setState((prevState)=>{
            console.log(prevState);
            return {
                showSideDrawer: !prevState.showSideDrawer
            }
        })
    }

    render(){
        return (
            <Aux>
                <Toolbar toggle={this.sideDrawerClose}/>
                <SideDrawer open={this.state.showSideDrawer} closed={this.sideDrawerClose}/> 
                <main className={layoutClasses.Content}>
                    {this.props.children}
                </main>
            </Aux>
        )
    }
}


export default Layout;