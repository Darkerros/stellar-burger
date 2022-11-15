// @ts-ignore
import styles from "./BurgerIngredients.module.css"
import Tabs from "../Tabs/Tabs";
import Title from "../Title/Title";
import Ingredients from "../Ingredients/Ingredients";
import groupedIngredientsType from "../../types/groupedIngredientsType";
import PropTypes from "prop-types";
import {useMemo, useState} from "react";

// @ts-ignore
const BurgerIngredients = ({groupedIngredients,getIngredientCountFn,addIngredientsToCartFn}) => {
    // @ts-ignore
    const tabInfoList = useMemo(() => groupedIngredients.map(group => ({name: group.name, id: group.type})),[groupedIngredients])
    // @ts-ignore
    const [activeTab,setActiveTab] = useState(tabInfoList[0].id)

    return (
        <section className={styles.BurgerIngredients}>
            <Title>Соберите бургер</Title>
            <Tabs className={'mt-5'} tabInfoList={tabInfoList} activeTab={activeTab} setActiveTab={setActiveTab}/>
            <Ingredients tabInfoList={tabInfoList} getIngredientCountFn={getIngredientCountFn} groupedIngredients={groupedIngredients} addIngredientsToCartFn={addIngredientsToCartFn}/>
        </section>
    );
};

BurgerIngredients.propTypes = {
    groupedIngredients: groupedIngredientsType,
    getIngredientCountFn: PropTypes.func,
    addIngredientsToCartFn: PropTypes.func,
}



export default BurgerIngredients;