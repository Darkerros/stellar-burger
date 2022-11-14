import React from 'react';
import IngredientsColumn from "../IngredientsColumn/IngredientsColumn";
import ingredientsStyles from './Ingredients.module.css'
// @ts-ignore
const Ingredients = ({groupedIngredients,getIngredientCountFn,addIngredientsToCartFn}) => {
    return (
        <div className={ingredientsStyles.Ingredients + ' mt-10 mb-10'}>
            {groupedIngredients.map((group: { name: any; ingredientsList: any; },index: React.Key | null | undefined) => <IngredientsColumn getIngredientCountFn={getIngredientCountFn} key={index} title={group.name} ingredients={group.ingredientsList} addIngredientsToCartFn={addIngredientsToCartFn}/>)}
        </div>
    );
};

export default Ingredients;