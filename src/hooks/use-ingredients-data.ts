import {useCallback, useMemo} from "react";
import {superIngredientsSelector} from "../services/selectors/ingredients-selectors";
import {useAppSelector} from "./use-app-selector";
import {IIngredient} from "../types/data/ingredient-type";

interface IIngredientsData {
    [key:string]: IIngredient
}

export const useIngredientsData = () => {
    const ingredients = useAppSelector(superIngredientsSelector)

    const ingredientsDataDict = useMemo(() => {
        const ingredientsData:IIngredientsData = {}
        ingredients.forEach(ingredient => ingredientsData[ingredient._id] = ingredient)
        return ingredientsData
    }, [ingredients])

    const getIngredientImage = useCallback((ingredientId:string) => ingredientsDataDict[ingredientId].image,[ingredientsDataDict])
    const getIngredientPrice = useCallback((ingredientId:string) => ingredientsDataDict[ingredientId].price,[ingredientsDataDict])
    const getIngredientData = useCallback((ingredientId:string) => ingredientsDataDict[ingredientId],[ingredientsDataDict])
    const calculateIngredientsPriceFromIdList = useCallback((ingredientsIdList: string[]) => ingredientsIdList.reduce((prev,ingredientId) => prev + getIngredientPrice(ingredientId),0),[getIngredientPrice])

    return useMemo(() => ({ingredientsDataDict,getIngredientPrice,getIngredientImage,getIngredientData,calculateIngredientsPriceFromIdList}),[calculateIngredientsPriceFromIdList, getIngredientData, getIngredientImage, getIngredientPrice, ingredientsDataDict])
}