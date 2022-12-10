import React, {useContext} from 'react';
import IngredientsColumnTitle from "../IngredientsColumnTitle/IngredientsColumnTitle";
import ingredientsColumnStyles from './IngredientsColumn.module.css'
import Ingredient from "../Ingredient/Ingredient";
import PropTypes from "prop-types";
import ingredientType from "../../types/ingredientType";
import IngredientsContext from "../../context/IngredientsContext";

const IngredientsColumn = ({title, ingredients,id}) => {
    const {getIngredientCount} = useContext(IngredientsContext)

    return (<li className={ingredientsColumnStyles.IngredientsColumn + ' mt-10'} id={id}>
        <IngredientsColumnTitle>{title}</IngredientsColumnTitle>
        <ul className={ingredientsColumnStyles.IngredientsColumn__content + ' mt-6'}>
            {ingredients.map((ingredientInfo) => <Ingredient key={ingredientInfo._id}
                                                             counter={getIngredientCount(ingredientInfo._id) ? getIngredientCount(ingredientInfo._id) : 0}
                                                             ingredient={ingredientInfo}/>)}
        </ul>
    </li>)
};

IngredientsColumn.propTypes = {
    title: PropTypes.string.isRequired,
    ingredients: PropTypes.arrayOf(ingredientType).isRequired,
    id: PropTypes.string.isRequired
}

export default IngredientsColumn;
