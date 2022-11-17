import React from 'react';
import burgerComponentStyles from './BurgerComponents.module.css'
import BurgerComponent from "../BurgerComponent/BurgerComponent";
import bunType from "../../types/bunType";
import PropTypes from "prop-types";
import cartItemType from "../../types/cartItemType";

const BurgerComponents = ({currentBun, cartItemsList, deleteIngridientFromCartFn}) => {

    return (
        <div className={burgerComponentStyles.BurgerComponents + " mt-25"}>
            <div className={burgerComponentStyles.BurgerComponents__locked}>
                {currentBun &&
                    <BurgerComponent cartIngredient={currentBun} isLocked={true} dragAndDropEnabled={false} type={'top'}
                                     handleClose={() => 1}/>}
            </div>
            <ul className={burgerComponentStyles.BurgerComponents__unlocked + " pr-2"}>
                {cartItemsList && cartItemsList.map((ingredient) => <BurgerComponent cartIngredient={ingredient}
                                                                                     key={ingredient.cartItemId}
                                                                                     isLocked={false}
                                                                                     dragAndDropEnabled={true}
                                                                                     type={"centre"}
                                                                                     handleClose={() => deleteIngridientFromCartFn(ingredient.cartItemId)}/>)}
            </ul>
            <div className={burgerComponentStyles.BurgerComponents__locked}>
                {currentBun && <BurgerComponent cartIngredient={currentBun} isLocked={true} dragAndDropEnabled={false}
                                                type={'bottom'} handleClose={() => 1}/>}
            </div>
        </div>
    );
};

BurgerComponents.propTypes = {
    currentBun: bunType.isRequired,
    cartItemsList: PropTypes.arrayOf(cartItemType),
    deleteIngridientFromCartFn: PropTypes.func.isRequired,
}

export default BurgerComponents;