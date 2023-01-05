import React, {useState} from 'react';
import {Counter} from "@ya.praktikum/react-developer-burger-ui-components";
import ingredientStyles from './Ingredient.module.css'
import Price from "../Price/Price";
import Modal from "../Modal/Modal";
import IngredientDetails from "../IngredientDetails/IngredientDetails";
import PropTypes from "prop-types";
import ingredientType from "../../types/ingredientType";
import {useDrag} from "react-dnd";

const Ingredient = ({ingredient, counter}) => {
    const [ingredientModalState, setIngredientModalState] = useState(false)
    const closeIngredientModal = () => setIngredientModalState(false)

    const [,dragRef] = useDrag({
        type: 'ingredient',
        item: ingredient,
    })

    return (
        <li className={ingredientStyles.Ingredient} onClick={() => setIngredientModalState(true)} ref={dragRef}>
            {counter !== 0 && <Counter count={counter} extraClass={ingredientStyles.Ingredient__count}/>}
            <img className={ingredientStyles.Ingredient__image + ' ml-4 mr-4'} src={ingredient.image}
                 alt={ingredient.name ? ingredient.name : 'Картинка ингредиента'}/>
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
    counter: PropTypes.number.isRequired
}

export default Ingredient;
