import React from 'react';
import {Counter} from "@ya.praktikum/react-developer-burger-ui-components";
import ingredientStyles from './Ingredient.module.css'
import Price from "../Price/Price";
// @ts-ignore
const Ingredient = ({img, counter, price, name,onClick}) => {
    return (
        <div className={ingredientStyles.Ingredient} onClick={onClick}>
            {counter && <Counter count={counter} extraClass={ingredientStyles.Ingredient__count}/>}
            <img className={ingredientStyles.Ingredient__image + ' ml-4 mr-4'} src={img}/>
            <Price>{price}</Price>
            <p className={ingredientStyles.Ingredient__name + " text text_type_main-medium mt-1"}>{name}</p>
        </div>
    );
};

export default Ingredient;