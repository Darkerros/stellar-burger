import React from 'react';
import IngredientsColumn from "../IngredientsColumn/IngredientsColumn";
import ingredientsStyles from './Ingredients.module.css'


const Ingredients = ({groupedIngredients,getIngredientCountFn,tabInfoList,activeTab,handleSetActiveTab}) => {
    const handleScroll = (evt) => {
        const startPos = evt.target.offsetTop
        const activeTabs = tabInfoList.map(tab => {
            const currentPos = document.querySelector('#'+tab.id).getBoundingClientRect().top
            if (startPos >= currentPos) {
                return tab.id
            }
            return undefined
        }).filter(tabId => tabId !== undefined)
        if (activeTabs.length !== 0 && activeTabs[activeTabs.length-1] !== activeTab){
            handleSetActiveTab(activeTabs[activeTabs.length-1])
        }
    }
    return (
        <ul className={ingredientsStyles.Ingredients + ' mt-10 mb-10'} onScroll={handleScroll}>
            {groupedIngredients.map((group,index) =>
                <IngredientsColumn getIngredientCountFn={getIngredientCountFn} id={tabInfoList[index].id} key={tabInfoList[index].id} ingredients={group.ingredientsList} title={group.name}/>)}
        </ul>
    );
};

export default Ingredients;