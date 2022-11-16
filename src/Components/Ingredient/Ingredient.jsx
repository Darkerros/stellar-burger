import React, {useState} from 'react';
import {Counter} from "@ya.praktikum/react-developer-burger-ui-components";
import ingredientStyles from './Ingredient.module.css'
import Price from "../Price/Price";
import Modal from "../Modal/Modal";
import IngredientDetails from "../IngredientDetails/IngredientDetails";
import PropTypes from "prop-types";
import CartInfo from "../CartInfo/CartInfo";
import ingredientType from "../../types/ingredientType";
// @ts-ignore
const Ingredient = ({ingredient,counter}) => {
    const [ingredientModalState,setIngredientModalState] = useState(false)
    const closeIngredientModal = () => setIngredientModalState(false)

    return (
        <li className={ingredientStyles.Ingredient} onClick={() => setIngredientModalState(true)}>
            {counter && <Counter count={counter} extraClass={ingredientStyles.Ingredient__count}/>}
            <img className={ingredientStyles.Ingredient__image + ' ml-4 mr-4'} src={ingredient.image}/>
            <Price>{ingredient.price}</Price>
            <p className={ingredientStyles.Ingredient__name + " text text_type_main-default mt-1"}>{ingredient.name}</p>
            {ingredientModalState &&
                <Modal handleClose={closeIngredientModal}>
                    <IngredientDetails ingredientDetails={ingredient}/>
                </Modal>
            }
        </li>
    );
};

Ingredient.propTypes = {
    ingredient: ingredientType.isRequired,
    counter: PropTypes.number
}

export default Ingredient;