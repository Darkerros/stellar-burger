import React from 'react';
import burgerContructorStyles from './BurgerConstructor.module.css'
import BurgerComponents from "../BurgerComponents/BurgerComponents";
import Price from "../Price/Price";
import PriceInfo from "../PriceInfo/PriceInfo";

// @ts-ignore
const BurgerConstructor = ({currentBun,cartItemsList,deleteIngridientFromCartFn,cartPrice}) => {
    return (
        <div className={burgerContructorStyles.BurgerConstructor}>
            <BurgerComponents currentBun={currentBun} cartItemsList={cartItemsList} deleteIngridientFromCartFn={deleteIngridientFromCartFn}/>
            <PriceInfo cartPrice={cartPrice}/>
        </div>
    );
};

export default BurgerConstructor;