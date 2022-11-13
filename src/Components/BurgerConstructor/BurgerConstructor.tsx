import React from 'react';
import burgerContructorStyles from './BurgerConstructor.module.css'
import BurgerComponents from "../BurgerComponents/BurgerComponents";
import Price from "../Price/Price";

// @ts-ignore
const BurgerConstructor = ({currentBun,cartItemsList,deleteIngridientFromCartFn,cartPrice}) => {
    return (
        <div className={burgerContructorStyles.BurgerConstructor}>
            <BurgerComponents currentBun={currentBun} cartItemsList={cartItemsList} deleteIngridientFromCartFn={deleteIngridientFromCartFn}/>
            <Price>{cartPrice}</Price>
        </div>
    );
};

export default BurgerConstructor;