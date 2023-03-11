import {useCallback, useMemo} from "react";
import {superIngredientsReducerSelector} from "../services/selectors/ingredients-selectors";
import {useAppSelector} from "./use-app-selector";
import {IIngredient} from "../types/data/ingredient-type";
import {ICartItem} from "../types/data/cart-item-interface";


interface ICountData {
    [key: string]: number
}

export const useIngredientsCountData = (arrayToCalculateCount: (IIngredient| ICartItem)[]) => {
    const ingredients = useAppSelector(superIngredientsReducerSelector)

    const ingredientsCountData = useMemo(() => {
        const ingredientsCount: ICountData = {}
        if (!ingredients.isSuccess) return ingredientsCount
        ingredients.ingredients.forEach((ingredient) => ingredientsCount[ingredient._id] = arrayToCalculateCount.filter(arrayItem => arrayItem._id === ingredient._id).length)
        return ingredientsCount
    }, [ingredients, arrayToCalculateCount])

    const getIngredientCount = useCallback ((ingredientId: string) => ingredientsCountData[ingredientId],[ingredientsCountData])

    return useMemo(() => ({ingredientsCountData,getIngredientCount}),[getIngredientCount, ingredientsCountData])
}