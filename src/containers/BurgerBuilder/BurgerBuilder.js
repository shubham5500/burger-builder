import React, { Component } from 'react';
import Aux from '../../hoc/Auxi';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';

const INGREDIENTS_PRICE ={
    cheese: 0.5,
    salad: 0.4,
    meat: 1.3,
    bacon: 0.7
}

class BurgerBuilder extends Component{
    
    state = {
        ingredients: {
            salad: 1,
            cheese: 1,
            bacon: 1,
            meat: 2
        },
        totalPrice: 4
    }

    addIngredientHandler = (type) =>{
        console.log('adding...', type);
        const oldCount = this.state.ingredients[type];
        let updatedCount = oldCount + 1;
        let upgradedIngredient = {
            ...this.state.ingredients
        }
        

        upgradedIngredient[type] = updatedCount;
        let price = INGREDIENTS_PRICE[type];
        let oldPrice = this.state.totalPrice;
        let newPrice = oldPrice + price;
        console.log(price);
        this.setState({
            totalPrice: newPrice,
            ingredients: upgradedIngredient
        })
    }

    removeIngredientHandler = (type) => {

    }

    render(){
        return (
            <Aux>
                <Burger ingredients={this.state.ingredients}/>
                <BuildControls more={this.addIngredientHandler}/>
            </Aux>
        )
    }
}

export default BurgerBuilder;