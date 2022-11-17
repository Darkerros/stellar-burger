// @ts-ignore
import styles from "./BurgerIngredients.module.css"
import Tabs from "../Tabs/Tabs";
import Title from "../Title/Title";
import Ingredients from "../Ingredients/Ingredients";
import PropTypes from "prop-types";
import {useMemo, useState} from "react";
import ingredientGroupType from "../../types/ingredientGroupType";

const BurgerIngredients = ({groupedIngredients, getIngredientCountFn}) => {
    const tabInfoList = useMemo(() => groupedIngredients.map(group => ({
        name: group.name, id: group.type
    })), [groupedIngredients])
    const [activeTab, setActiveTab] = useState(tabInfoList[0].id)

    return (<section className={styles.BurgerIngredients}>
        <Title>Соберите бургер</Title>
        <Tabs className={'mt-5'} tabInfoList={tabInfoList} activeTab={activeTab} setActiveTab={setActiveTab}/>
        <Ingredients tabInfoList={tabInfoList} getIngredientCountFn={getIngredientCountFn}
                     groupedIngredients={groupedIngredients} activeTab={activeTab}
                     handleSetActiveTab={setActiveTab}/>
    </section>);
};

BurgerIngredients.propTypes = {
    groupedIngredients: PropTypes.arrayOf(ingredientGroupType.isRequired).isRequired,
    getIngredientCountFn: PropTypes.func.isRequired
}

export default BurgerIngredients;
