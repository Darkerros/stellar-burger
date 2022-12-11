import styles from "./BurgerIngredients.module.css"
import Tabs from "../Tabs/Tabs";
import Title from "../Title/Title";
import Ingredients from "../Ingredients/Ingredients";
import {useMemo, useState} from "react";
import {useSelector} from "react-redux";

const BurgerIngredients = () => {
    const ingredients = useSelector(state => state.ingredientsReducer)
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
    const cart = useSelector(state => state.cartReducer)
    const ingredientsCounts = useMemo(() => {
        const ingredientsCount = {}
        if (!ingredients.isSuccess) return ingredientsCount
        ingredients.ingredients.forEach((ingredient) => ingredientsCount[ingredient._id] = cart.items.filter(cartItem => cartItem._id === ingredient._id).length)
        // eslint-disable-next-line no-unused-expressions
        cart.bun ? ingredientsCount[cart.bun._id] = 1 : false
        return ingredientsCount
        }, [ingredients, cart])
    const getIngredientCount = (ingredientId) => ingredientsCounts[ingredientId]
    const tabInfoList = useMemo(() => groupedIngredients.map(group => ({
        name: group.name, id: group.type
    })), [groupedIngredients])
    const [activeTab, setActiveTab] = useState(tabInfoList[0].id)

    return (<section className={styles.BurgerIngredients}>
        <Title>Соберите бургер</Title>
        <Tabs className={'mt-5'} tabInfoList={tabInfoList} activeTab={activeTab} setActiveTab={setActiveTab}/>
        <Ingredients tabInfoList={tabInfoList} activeTab={activeTab} handleSetActiveTab={setActiveTab} groupedIngredients={groupedIngredients} getIngredientCountFn={getIngredientCount}/>
    </section>);
};

export default BurgerIngredients;
