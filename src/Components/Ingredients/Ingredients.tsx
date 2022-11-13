import React from 'react';
import IngredientsColumn from "../IngredientsColumn/IngredientsColumn";
import ingredientsStyles from './Ingredients.module.css'
// @ts-ignore
const Ingredients = ({groupedIngredients}) => {
    return (
        <div className={ingredientsStyles.Ingredients}>
            {groupedIngredients.map((group: { name: any; ingredientsList: any; },index: React.Key | null | undefined) => <IngredientsColumn key={index} title={group.name} ingredients={group.ingredientsList}/>)}
        </div>
    );
};

export default Ingredients;