import React from 'react';
// @ts-ignore
import styles from "./BurgerIngredients.module.css"
import Tabs from "../Tabs/Tabs";

const BurgerIngredients = () => {
    return (
        <div className={styles.BurgerIngredients}>
            <p className='text text_type_main-large'>Bylki</p>
            <Tabs/>
        </div>
    );
};

export default BurgerIngredients;