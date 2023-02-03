import {useSelector} from "react-redux";
import {useCallback, useMemo} from "react";

export const useIngredientsData = () => {
    const ingredients = useSelector(state => state.ingredientsReducer.ingredients)

    const ingredientsDataDict = useMemo(() => {
        const ingredientsData = {}
        ingredients.forEach(ingredient => ingredientsData[ingredient._id] = ingredient)
        return ingredientsData
    }, [ingredients])

    const getIngredientImage = useCallback(ingredientId => ingredientsDataDict[ingredientId].image,[ingredientsDataDict])
    const getIngredientPrice = useCallback(ingredientId => ingredientsDataDict[ingredientId].price,[ingredientsDataDict])

    return {ingredientsDataDict,getIngredientPrice,getIngredientImage}
}