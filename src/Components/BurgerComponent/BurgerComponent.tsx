import React from 'react';
import burgerComponentStyles from './BurgerComponent.module.css'
import {ConstructorElement,DragIcon} from "@ya.praktikum/react-developer-burger-ui-components";
import PropTypes from "prop-types";
import cartItemType from "../../types/cartItemType";
// @ts-ignore
const BurgerComponent = ({dragAndDropEnabled,cartIngredient,isLocked,type,handleClose}) => {
    return (
        <li className={burgerComponentStyles.BurgerComponent + " mb-4"}>
            {dragAndDropEnabled && <DragIcon type={'primary'}/>}
            <ConstructorElement text={cartIngredient.name} thumbnail={cartIngredient.image} price={cartIngredient.price} isLocked={isLocked}  type={type} extraClass={dragAndDropEnabled ? 'ml-2' : 'ml-8'} handleClose={handleClose}/>
        </li>
    );
};

BurgerComponent.propTypes = {
    cartIngredient: cartItemType.isRequired,
    dragAndDropEnabled: PropTypes.bool.isRequired,
    isLocked: PropTypes.bool.isRequired,
    type: PropTypes.oneOf(['top','bottom',"centre"]).isRequired,
    handleClose: PropTypes.func.isRequired,
}

export default BurgerComponent;