import React from 'react';
import {Counter} from "@ya.praktikum/react-developer-burger-ui-components";
import ingredientStyles from './Ingredient.module.css'
import Price from "../Price/Price";
import ingredientType from "../../types/ingredientType";
import PropTypes from "prop-types";
// @ts-ignore
const Ingredient = ({ingredient,counter,onClick}) => {
    return (
        <li className={ingredientStyles.Ingredient} onClick={onClick}>
            {counter && <Counter count={counter} extraClass={ingredientStyles.Ingredient__count}/>}
            <img className={ingredientStyles.Ingredient__image + ' ml-4 mr-4'} src={ingredient.image}/>
            <Price>{ingredient.price}</Price>
            <p className={ingredientStyles.Ingredient__name + " text text_type_main-default mt-1"}>{ingredient.name}</p>
        </li>
    );
};

Ingredient.propTypes = {
    ingredient: ingredientType.isRequired,
    counter: PropTypes.number,
    onClick: PropTypes.func
}

export default Ingredient;