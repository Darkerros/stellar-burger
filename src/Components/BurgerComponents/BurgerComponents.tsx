import React from 'react';
import burgerComponentStyles from './BurgerComponents.module.css'
import {ConstructorElement} from "@ya.praktikum/react-developer-burger-ui-components";

// @ts-ignore
const BurgerComponents = ({currentBun,cartItemsList,deleteIngridientFromCartFn}) => {
    return (
        <div className={burgerComponentStyles.BurgerComponents + " mt-25 pl-10"}>
            <div className={burgerComponentStyles.BurgerComponents__locked + " pl-4 pr-4"}>
                <ConstructorElement text={currentBun.name} thumbnail={currentBun.image} price={currentBun.price} isLocked={true}  type={'top'}/>
            </div>
            <div className={burgerComponentStyles.BurgerComponents__unlocked + ' mt-2 mb-2 pl-4 pr-4"'}>
                {cartItemsList && cartItemsList.map((ingredient: {
                    cartItemId: any;
                    _id: any; name: string; image: string; price: number; }) => <ConstructorElement key={ingredient.cartItemId} text={ingredient.name} thumbnail={ingredient.image} price={ingredient.price} isLocked={false} extraClass={'mb-2'} handleClose={() => deleteIngridientFromCartFn(ingredient.cartItemId)} />)}
            </div>
            <div className={burgerComponentStyles.BurgerComponents__locked  + " pl-4 pr-4"}>
                <ConstructorElement text={currentBun.name} thumbnail={currentBun.image} price={currentBun.price} isLocked={true} type={'bottom'}/>
            </div>
        </div>
    );
};

export default BurgerComponents;