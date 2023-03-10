import styles from "./burger-ingredients.module.css"
import Tabs from "../tabs/tabs";
import Title from "../title/title";
import Ingredients from "../Ingredients/ingredients";
import {useMemo, useState} from "react";
import {superIngredientsReducerSelector} from "../../services/selectors/ingredients-selectors";
import {superCartReducerSelector} from "../../services/selectors/cart-selectors";
import {useIngredientsCountData} from "../../hooks/use-ingredients-count-data";
import {IIngredientGroup} from "../../types/data/ingredient-group-interface";
import {useAppSelector} from "../../hooks/use-app-selector";

const BurgerIngredients = () => {
    const cart = useAppSelector(superCartReducerSelector)
    const ingredients = useAppSelector(superIngredientsReducerSelector)
    const ingredientsCountData = useIngredientsCountData(cart.bun ? [cart.bun,...cart.items,cart.bun] : cart.items)

    const groupedIngredients = useMemo(() => {
            const groupIngredients:IIngredientGroup[] = [
                {type: 'bun', name: 'Булки', ingredientsList: []},
                {type: "sauce", name: 'Соусы', ingredientsList: []},
                {type: "main", name: 'Главное', ingredientsList: []}
            ]
            ingredients.ingredients.length &&
                ingredients.ingredients.forEach((ingredient) => groupIngredients.forEach(group => {
                    if (ingredient.type === group.type) {
                        group.ingredientsList.push(ingredient)
                    }
                }))
            return groupIngredients
        }, [ingredients])
    const tabInfoList = useMemo(() => groupedIngredients.map(group => ({name: group.name, id: group.type})), [groupedIngredients])
    const [activeTab, setActiveTab] = useState<string>(tabInfoList[0].id)



    return (<section className={styles.BurgerIngredients}>
        <Title>Соберите бургер</Title>
        <Tabs className={'mt-5'} tabInfoList={tabInfoList} activeTab={activeTab} setActiveTab={setActiveTab}/>
        <Ingredients tabInfoList={tabInfoList} activeTab={activeTab} handleSetActiveTab={setActiveTab} groupedIngredients={groupedIngredients} getIngredientCountFn={ingredientsCountData.getIngredientCount}/>
    </section>);
};

export default BurgerIngredients;
