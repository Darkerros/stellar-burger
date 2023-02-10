import styles from "./BurgerIngredients.module.css"
import Tabs from "../Tabs/Tabs";
import Title from "../Title/Title";
import Ingredients from "../Ingredients/Ingredients";
import {useMemo, useState} from "react";
import {useSelector} from "react-redux";
import {superIngredientsReducerSelector} from "../../services/selectors/ingredientsSelectors";
import {superCartReducerSelector} from "../../services/selectors/cartSelectors";
import {useIngredientsCountData} from "../../hooks/useIngredientsCountData";

const BurgerIngredients = () => {
    const cart = useSelector(superCartReducerSelector)
    const ingredients = useSelector(superIngredientsReducerSelector)

    const ingredientsCountData = useIngredientsCountData([cart.bun,...cart.items,cart.bun])

    const groupedIngredients = useMemo(() => {
            const groupIngredients = [
                {type: 'bun', name: 'Булки', ingredientsList: []},
                {type: "sauce", name: 'Соусы', ingredientsList: []},
                {type: "main", name: 'Главное', ingredientsList: []}
            ]
            ingredients.ingredients.length &&
                ingredients.ingredients.forEach(ingredient => groupIngredients.forEach(group => {
                    if (ingredient.type === group.type) {
                        group.ingredientsList.push(ingredient)
                    }
                }))
            return groupIngredients
        }, [ingredients])
    const tabInfoList = useMemo(() => groupedIngredients.map(group => ({name: group.name, id: group.type})), [groupedIngredients])
    const [activeTab, setActiveTab] = useState(tabInfoList[0].id)



    return (<section className={styles.BurgerIngredients}>
        <Title>Соберите бургер</Title>
        <Tabs className={'mt-5'} tabInfoList={tabInfoList} activeTab={activeTab} setActiveTab={setActiveTab}/>
        <Ingredients tabInfoList={tabInfoList} activeTab={activeTab} handleSetActiveTab={setActiveTab} groupedIngredients={groupedIngredients} getIngredientCountFn={ingredientsCountData.getIngredientCount}/>
    </section>);
};

export default BurgerIngredients;
