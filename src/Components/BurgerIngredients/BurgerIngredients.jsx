import styles from "./BurgerIngredients.module.css"
import Tabs from "../Tabs/Tabs";
import Title from "../Title/Title";
import Ingredients from "../Ingredients/Ingredients";
import {useContext, useMemo, useState} from "react";
import IngredientsContext from "../../context/IngredientsContext";

const BurgerIngredients = () => {
    const {groupedIngredients} = useContext(IngredientsContext)
    const tabInfoList = useMemo(() => groupedIngredients.map(group => ({
        name: group.name, id: group.type
    })), [groupedIngredients])
    const [activeTab, setActiveTab] = useState(tabInfoList[0].id)

    return (<section className={styles.BurgerIngredients}>
        <Title>Соберите бургер</Title>
        <Tabs className={'mt-5'} tabInfoList={tabInfoList} activeTab={activeTab} setActiveTab={setActiveTab}/>
        <Ingredients tabInfoList={tabInfoList}
                     activeTab={activeTab}
                     handleSetActiveTab={setActiveTab}/>
    </section>);
};

export default BurgerIngredients;
