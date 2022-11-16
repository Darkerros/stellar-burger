import React from 'react';
import IngredientsColumnTitle from "../IngredientsColumnTitle/IngredientsColumnTitle";
import ingredientsColumnStyles from './IngredientsColumn.module.css'
import Ingredient from "../Ingredient/Ingredient";
import PropTypes from "prop-types";
import ingredientType from "../../types/ingredientType";
// @ts-ignore
const IngredientsColumn = ({title, ingredients, getIngredientCountFn, id}) => {
    return (<li className={ingredientsColumnStyles.IngredientsColumn + ' mt-10'} id={id}>
            <IngredientsColumnTitle>{title}</IngredientsColumnTitle>
            <ul className={ingredientsColumnStyles.IngredientsColumn__content + ' mt-6'}>
                {ingredients.map((ingredientInfo) => <Ingredient key={ingredientInfo._id}
                                                                 counter={getIngredientCountFn(ingredientInfo._id) ? getIngredientCountFn(ingredientInfo._id) : undefined}
                                                                 ingredient={ingredientInfo}/>)}
            </ul>
        </li>)
};

IngredientsColumn.propTypes = {
    title: PropTypes.string.isRequired,
    ingredients: PropTypes.arrayOf(ingredientType).isRequired,
    getIngredientCountFn: PropTypes.func.isRequired,
    id: PropTypes.string.isRequired
}

export default IngredientsColumn;