import React, {useEffect, useState} from 'react';
// @ts-ignore
import styles from "./BurgerIngredients.module.css"
import Tabs from "../Tabs/Tabs";
import Title from "../Title/Title";
import Ingredients from "../Ingredients/Ingredients";

// @ts-ignore
const BurgerIngredients = ({groupedIngredients,getIngredientCountFn,addIngredientsToCartFn,...otherProps}) => {

    return (
        <div className={styles.BurgerIngredients}>
            <Title>Соберите бургер</Title>
            <Tabs classname={'mt-5'}/>
            <Ingredients getIngredientCountFn={getIngredientCountFn} groupedIngredients={groupedIngredients} addIngredientsToCartFn={addIngredientsToCartFn}/>
        </div>
    );
};

export default BurgerIngredients;