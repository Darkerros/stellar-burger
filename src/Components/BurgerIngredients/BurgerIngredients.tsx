import React from 'react';
// @ts-ignore
import styles from "./BurgerIngredients.module.css"
import {Tab} from "@ya.praktikum/react-developer-burger-ui-components";
import Tabs from "../Tabs/Tabs";

const BurgerIngredients = () => {
    return (
        <div className={styles.BurgerIngredients}>
            <Tabs/>
        </div>
    );
};

export default BurgerIngredients;