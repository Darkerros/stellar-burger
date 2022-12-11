import React from 'react';
import IngredientsColumn from "../IngredientsColumn/IngredientsColumn";
import ingredientsStyles from './Ingredients.module.css'
import PropTypes from "prop-types";
import tabInfoType from "../../types/tabInfoType";
import ingredientGroupType from "../../types/ingredientGroupType";


const Ingredients = ({tabInfoList,activeTab,handleSetActiveTab,getIngredientCountFn,groupedIngredients}) => {
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
                <IngredientsColumn id={tabInfoList[index].id} key={tabInfoList[index].id} ingredients={group.ingredientsList} title={group.name} getIngredientCountFn={getIngredientCountFn}/>)}
        </ul>
    );
};

Ingredients.propTypes = {
    tabInfoList: PropTypes.arrayOf(tabInfoType.isRequired).isRequired,
    activeTab: PropTypes.string.isRequired,
    handleSetActiveTab: PropTypes.func.isRequired,
    groupedIngredients: PropTypes.arrayOf(ingredientGroupType).isRequired,
    getIngredientCountFn: PropTypes.func.isRequired
}

export default Ingredients;
