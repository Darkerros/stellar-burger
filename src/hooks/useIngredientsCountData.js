import {useCallback, useMemo} from "react";
import {useSelector} from "react-redux";
import {superIngredientsReducerSelector} from "../services/selectors/ingredientsSelectors";

export const useIngredientsCountData = (arrayToCalculateCount) => {
    const ingredients = useSelector(superIngredientsReducerSelector)

    const ingredientsCountData = useMemo(() => {
        const ingredientsCount = {}
        if (!ingredients.isSuccess) return ingredientsCount
        ingredients.ingredients.forEach((ingredient) => ingredientsCount[ingredient._id] = arrayToCalculateCount.filter(arrayItem => arrayItem._id === ingredient._id).length)
        return ingredientsCount
    }, [ingredients, arrayToCalculateCount])

    const getIngredientCount = useCallback ((ingredientId) => ingredientsCountData[ingredientId],[ingredientsCountData])

    return useMemo(() => ({ingredientsCountData,getIngredientCount}),[getIngredientCount, ingredientsCountData])
}