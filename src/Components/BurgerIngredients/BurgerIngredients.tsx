import React, {useEffect, useState} from 'react';
// @ts-ignore
import styles from "./BurgerIngredients.module.css"
import Tabs from "../Tabs/Tabs";
import Title from "../Title/Title";
import Ingredients from "../Ingredients/Ingredients";

// @ts-ignore
const BurgerIngredients = ({ingredients}) => {
    const [ingredientsGroup,setIngredientsGroup] = useState([])

    useEffect(() => {
        const groupIngredients = [
            {type: "bun", name: "Булки",ingredientsList: []},
            {type: "main", name: "Начинки",ingredientsList: []},
            {type: "sauce", name: "Coусы",ingredientsList: []},
        ]

        ingredients.forEach((ingredient: { type: string; }) => {
            groupIngredients.forEach((group,index) => {
                if (group.type == ingredient.type){
                    // @ts-ignore
                    return groupIngredients[index].ingredientsList.push(ingredient)
                }
            })
        })
        // @ts-ignore
        setIngredientsGroup(groupIngredients)
    },[ingredients])

    return (
        <div className={styles.BurgerIngredients}>
            <Title>Соберите бургер</Title>
            <Tabs classname={'mt-5'}/>
            <Ingredients groupedIngredients={ingredientsGroup}/>
        </div>
    );
};

export default BurgerIngredients;