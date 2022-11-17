import React, {useEffect} from 'react';
import burgerComponentStyles from './BurgerComponents.module.css'
import BurgerComponent from "../BurgerComponent/BurgerComponent";
import PropTypes from "prop-types";
import cartItemType from "../../types/cartItemType";
import ingredientType from "../../types/ingredientType";

const BurgerComponents = ({currentBun, cartItemsList, deleteIngridientFromCartFn}) => {
    useEffect(() => {
        console.log(cartItemsList)},[cartItemsList])

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
    currentBun: ingredientType.isRequired,
    cartItemsList: PropTypes.arrayOf(cartItemType).isRequired,
    deleteIngridientFromCartFn: PropTypes.func.isRequired,
}

export default BurgerComponents;