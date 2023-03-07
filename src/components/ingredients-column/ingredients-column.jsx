import React from 'react';
import IngredientsColumnTitle from "../ingredients-column-title/ingredients-column-title";
import ingredientsColumnStyles from './ingredients-column.module.css'
import Ingredient from "../ingredient/ingredient";
import PropTypes from "prop-types";
import ingredientType from "../../types/ingredientType";

const IngredientsColumn = ({title, ingredients,id,getIngredientCountFn}) => {
    return (<li className={ingredientsColumnStyles.IngredientsColumn + ' mt-10'} id={id}>
        <IngredientsColumnTitle>{title}</IngredientsColumnTitle>
        <ul className={ingredientsColumnStyles.IngredientsColumn__content + ' mt-6'}>
            {ingredients.map((ingredientInfo) =>
                <Ingredient key={ingredientInfo._id} counter={getIngredientCountFn(ingredientInfo._id) ? getIngredientCountFn(ingredientInfo._id) : 0} ingredient={ingredientInfo}/>)}
        </ul>
    </li>)
};

IngredientsColumn.propTypes = {
    title: PropTypes.string.isRequired,
    ingredients: PropTypes.arrayOf(ingredientType).isRequired,
    id: PropTypes.string.isRequired,
    getIngredientCountFn: PropTypes.func.isRequired
}

export default IngredientsColumn;
