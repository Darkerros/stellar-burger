import React from 'react';
import burgerComponentStyles from './BurgerComponents.module.css'
import BurgerComponent from "../BurgerComponent/BurgerComponent";
import bunType from "../../types/bunType";
import PropTypes from "prop-types";
import cartItemType from "../../types/cartItemType";

// @ts-ignore
const BurgerComponents = ({currentBun,cartItemsList,deleteIngridientFromCartFn}) => {

    return (
        <div className={burgerComponentStyles.BurgerComponents + " mt-25"}>
            <div className={burgerComponentStyles.BurgerComponents__locked}>
                <BurgerComponent cartIngredient={currentBun} isLocked={true} dragAndDropEnabled={false} type={'top'} handleClose={() => 1}/>
            </div>
            <ul className={burgerComponentStyles.BurgerComponents__unlocked + " pr-2"}>
                {cartItemsList && cartItemsList.map((ingredient: NonNullable<PropTypes.InferProps<{ calories: PropTypes.Validator<number>; carbohydrates: PropTypes.Validator<number>; fat: PropTypes.Validator<number>; image: PropTypes.Validator<string>; name: PropTypes.Validator<string>; price: PropTypes.Validator<number>; proteins: PropTypes.Validator<number>; type: PropTypes.Validator<string>; __v: PropTypes.Validator<number>; _id: PropTypes.Validator<string>; cartItemId: PropTypes.Validator<number>; }>>) => <BurgerComponent cartIngredient={ingredient} key={ingredient.cartItemId} isLocked={false} dragAndDropEnabled={true} type={"centre"} handleClose={() => deleteIngridientFromCartFn(ingredient.cartItemId)}/>)}
            </ul>
            <div className={burgerComponentStyles.BurgerComponents__locked}>
                <BurgerComponent cartIngredient={currentBun} isLocked={true} dragAndDropEnabled={false} type={'bottom'} handleClose={() => 1}/>
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