import React from 'react';
import IngredientsColumn from "../IngredientsColumn/IngredientsColumn";
import ingredientsStyles from './Ingredients.module.css'
import groupedIngredientsType from "../../types/groupedIngredientsType";
import PropTypes from "prop-types";
// @ts-ignore
const Ingredients = ({groupedIngredients,getIngredientCountFn,addIngredientsToCartFn,tabInfoList}) => {
    return (
        <ul className={ingredientsStyles.Ingredients + ' mt-10 mb-10'}>
            {groupedIngredients.map((group: { name: string; ingredientsList: any; },index: number) => <IngredientsColumn id={tabInfoList[index].id}getIngredientCountFn={getIngredientCountFn} key={index} title={group.name} ingredients={group.ingredientsList} addIngredientsToCartFn={addIngredientsToCartFn}/>)}
        </ul>
    );
};


export default Ingredients;