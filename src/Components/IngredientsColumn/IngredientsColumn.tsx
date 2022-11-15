import React from 'react';
import IngredientsColumnTitle from "../IngredientsColumnTitle/IngredientsColumnTitle";
import ingredientsColumnStyles from './IngredientsColumn.module.css'
import Ingredient from "../Ingredient/Ingredient";
import groupedIngredientsType from "../../types/groupedIngredientsType";
import PropTypes from "prop-types";
import ingredientType from "../../types/ingredientType";
// @ts-ignore
const IngredientsColumn = ({title,ingredients,getIngredientCountFn,addIngredientsToCartFn,id}) => {
    return (
        <li className={ingredientsColumnStyles.IngredientsColumn + ' mt-10'} id={id}>
            <IngredientsColumnTitle>{title}</IngredientsColumnTitle>
            <ul className={ingredientsColumnStyles.IngredientsColumn__content + ' mt-6'}>
                {ingredients.map((ingredientInfo: NonNullable<PropTypes.InferProps<{ calories: PropTypes.Validator<number>; carbohydrates: PropTypes.Validator<number>; fat: PropTypes.Validator<number>; image: PropTypes.Validator<string>; name: PropTypes.Validator<string>; price: PropTypes.Validator<number>; proteins: PropTypes.Validator<number>; type: PropTypes.Validator<string>; __v: PropTypes.Validator<number>; _id: PropTypes.Validator<string>; }>>) => <Ingredient key={ingredientInfo._id}
                                                                                   counter={getIngredientCountFn(ingredientInfo._id) ? getIngredientCountFn(ingredientInfo._id) : undefined}
                                                                                   onClick={() => addIngredientsToCartFn(ingredientInfo)}
                                                                                   ingredient={ingredientInfo}/>)}
            </ul>
        </li>
    );
};
IngredientsColumn.propTypes = {
    title: PropTypes.string,
    ingredients: PropTypes.arrayOf(ingredientType),
    getIngredientCountFn: PropTypes.func,
    addIngredientsToCartFn: PropTypes.func,
}
export default IngredientsColumn;