import React from 'react';
import IngredientsColumnTitle from "../IngredientsColumnTitle/IngredientsColumnTitle";
import ingredientsColumnStyles from './IngredientsColumn.module.css'
import Ingredient from "../Ingredient/Ingredient";
import data from "../../utils/data";
// @ts-ignore
const IngredientsColumn = ({title,ingredients,getIngredientCountFn,addIngredientsToCartFn}) => {
    return (
        <div className={'mt-10'}>
            <IngredientsColumnTitle>{title}</IngredientsColumnTitle>
            <div className={ingredientsColumnStyles.IngredientsColumn__content}>
                {ingredients.map((ingredientInfo: {
                    _id: any; image: any; price: any; name: any; }) => <Ingredient key={ingredientInfo._id} img={ingredientInfo.image} price={ingredientInfo.price} name={ingredientInfo.name} counter={getIngredientCountFn(ingredientInfo._id) ? getIngredientCountFn(ingredientInfo._id) : undefined} onClick={() => addIngredientsToCartFn(ingredientInfo)}/>)}
            </div>
        </div>
    );
};

export default IngredientsColumn;