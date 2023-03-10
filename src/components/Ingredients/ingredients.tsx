import React, {FC} from 'react';
import IngredientsColumn from "../ingredients-column/ingredients-column";
import ingredientsStyles from './ingredients.module.css'
import {IIngredientGroup} from "../../types/data/ingredient-group-interface";
import {ITabInfo} from "../../types/data/tab-info-interface";

interface IProps {
    tabInfoList: ITabInfo[]
    activeTab: string;
    handleSetActiveTab: (activeTab: string) => void;
    groupedIngredients: IIngredientGroup[];
    getIngredientCountFn: (ingredientId: string) => number;
}

const Ingredients:FC<IProps> = ({tabInfoList,activeTab,handleSetActiveTab,getIngredientCountFn,groupedIngredients}) => {
    const handleScroll = (evt: any) => {
        const startPos = evt.target.offsetTop
        const activeTabs:string[] = []
        tabInfoList.forEach(tab => {
            if (tab) {
                // @ts-ignore
                const currentPos = document.querySelector('#'+tab.id).getBoundingClientRect().top
                if (startPos >= currentPos) {
                    activeTabs.push( tab.id)
                }
            }
        })
        if (!activeTabs.length) {
            return
        }
        if (activeTabs[activeTabs.length-1] !== activeTab) {
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



export default Ingredients;
