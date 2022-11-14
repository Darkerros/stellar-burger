import React from 'react';
import burgerContructorStyles from './BurgerConstructor.module.css'
import BurgerComponents from "../BurgerComponents/BurgerComponents";
import Price from "../Price/Price";
import PriceInfo from "../PriceInfo/PriceInfo";

// @ts-ignore
const BurgerConstructor = ({currentBun,cartItemsList,deleteIngridientFromCartFn,cartPrice}) => {
    return (
        <div className={burgerContructorStyles.BurgerConstructor + " pl-10"}>
            <div className={burgerContructorStyles.BurgerConstructor_content + " mr-4 ml-4"}>
                <BurgerComponents currentBun={currentBun} cartItemsList={cartItemsList} deleteIngridientFromCartFn={deleteIngridientFromCartFn}/>
                <PriceInfo cartPrice={cartPrice}/>
            </div>
        </div>
    );
};

export default BurgerConstructor;