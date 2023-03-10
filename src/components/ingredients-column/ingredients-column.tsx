import React, {FC} from 'react';
import IngredientsColumnTitle from "../ingredients-column-title/ingredients-column-title";
import ingredientsColumnStyles from './ingredients-column.module.css'
import Ingredient from "../ingredient/ingredient";
import {IIngredient} from "../../types/data/ingredient-type";
interface IProps {
    title: string,
    ingredients: IIngredient[],
    id: string,
    getIngredientCountFn: (ingredientId: string) => number
}

const IngredientsColumn:FC<IProps> = ({title, ingredients,id,getIngredientCountFn}) => {
    return (<li className={ingredientsColumnStyles.IngredientsColumn + ' mt-10'} id={id}>
        <IngredientsColumnTitle>{title}</IngredientsColumnTitle>
        <ul className={ingredientsColumnStyles.IngredientsColumn__content + ' mt-6'}>
            {ingredients.map((ingredientInfo) =>
                <Ingredient key={ingredientInfo._id} counter={getIngredientCountFn(ingredientInfo._id) ? getIngredientCountFn(ingredientInfo._id) : 0} ingredient={ingredientInfo}/>)}
        </ul>
    </li>)
};


export default IngredientsColumn;
