import React, { Component } from 'react';
import Aux from '../../hoc/Auxi';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';

const INGREDIENTS_PRICE ={
    cheese: 0.5,
    salad: 0.4,
    meat: 1.3,
    bacon: 0.7
}

class BurgerBuilder extends Component{

    state = {
        ingredients: {
            salad: 0,
            cheese: 0,
            bacon: 0,
            meat: 0
        },
        totalPrice: 4,
        purchasable: false,
        purchasing: false
    }

    addIngredientHandler = (type) =>{
        const oldCount = this.state.ingredients[type];
        let updatedCount = oldCount + 1;
        let upgradedIngredient = {
            ...this.state.ingredients
        }
        upgradedIngredient[type] = updatedCount;
        let price = INGREDIENTS_PRICE[type];
        let oldPrice = this.state.totalPrice;
        let newPrice = oldPrice + price;
        this.setState({
            totalPrice: newPrice,
            ingredients: upgradedIngredient
        })
        this.updatePurchasableState(upgradedIngredient);
    }

    removeIngredientHandler = (type) => {
        const oldCount = this.state.ingredients[type];
        if(oldCount <= 0){
            return false;
        }
        let updatedCount = oldCount - 1;
        let upgradedIngredient = {
            ...this.state.ingredients
        }
        upgradedIngredient[type] = updatedCount;
        let deprice = INGREDIENTS_PRICE[type];
        let oldPrice = this.state.totalPrice;
        let newPrice = oldPrice - deprice;
        this.setState({
            totalPrice: newPrice,
            ingredients: upgradedIngredient
        })
        this.updatePurchasableState(upgradedIngredient);
    }

    updatePurchasableState = (ingredients) => {
        let sum = 0;
        for(let key in ingredients){
            sum = sum + ingredients[key];
        }
        this.setState({
            purchasable: sum > 0
        });   
    }

    purchaseHandler = () => {
        this.setState({purchasing: true})
    }

    modalCloseHandler = () => {
        this.setState({
            purchasing: false
        })
    }

    continueHandler = () => {
        alert("You continue");
    }

    render(){
        return (
            <Aux>
                <Modal modalClosed={this.modalCloseHandler} show={this.state.purchasing}>
                    <OrderSummary price={this.state.totalPrice.toFixed(2)} cancel={this.modalCloseHandler} continue={this.continueHandler} ingredients={this.state.ingredients}/>
                </Modal>
                <Burger ingredients={this.state.ingredients}/>
                <BuildControls more={this.addIngredientHandler} 
                               less={this.removeIngredientHandler}
                               price={this.state.totalPrice}
                               purchasable={this.state.purchasable}
                               purchasing={this.purchaseHandler}/>
            </Aux>
        )
    }
}

export default BurgerBuilder;