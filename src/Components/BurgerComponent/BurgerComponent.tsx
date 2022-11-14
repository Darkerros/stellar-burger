import React from 'react';
import burgerComponentStyles from './BurgerComponent.module.css'
import {ConstructorElement,DragIcon} from "@ya.praktikum/react-developer-burger-ui-components";
// @ts-ignore
const BurgerComponent = ({dragAndDropEnabled,cartIngredient,isLocked,type,handleClose}) => {
    return (
        <div className={burgerComponentStyles.BurgerComponent + " mb-4"}>
            {dragAndDropEnabled && <DragIcon type={'primary'}/>}
            <ConstructorElement text={cartIngredient.name} thumbnail={cartIngredient.image} price={cartIngredient.price} isLocked={isLocked}  type={type} extraClass={dragAndDropEnabled ? 'ml-2' : 'ml-8'} handleClose={handleClose}/>
        </div>
    );
};

export default BurgerComponent;