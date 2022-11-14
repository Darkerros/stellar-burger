import React from 'react';
import burgerComponentStyles from './BurgerComponents.module.css'
import {ConstructorElement} from "@ya.praktikum/react-developer-burger-ui-components";
import BurgerComponent from "../BurgerComponent/BurgerComponent";

// @ts-ignore
const BurgerComponents = ({currentBun,cartItemsList,deleteIngridientFromCartFn}) => {

    return (
        <div className={burgerComponentStyles.BurgerComponents + " mt-25"}>
            <div className={burgerComponentStyles.BurgerComponents__locked}>
                <BurgerComponent cartIngredient={currentBun} isLocked={true} dragAndDropEnabled={false} type={'top'} handleClose={() => 1}/>
            </div>
            <div className={burgerComponentStyles.BurgerComponents__unlocked}>
                {cartItemsList && cartItemsList.map((ingredient: { cartItemId: any; }) => <BurgerComponent cartIngredient={ingredient} isLocked={false} dragAndDropEnabled={true} type={undefined} handleClose={() => deleteIngridientFromCartFn(ingredient.cartItemId)}/>)}
            </div>
            <div className={burgerComponentStyles.BurgerComponents__locked}>
                <BurgerComponent cartIngredient={currentBun} isLocked={true} dragAndDropEnabled={false} type={'bottom'} handleClose={() => 1}/>
            </div>
        </div>
    );
};

export default BurgerComponents;