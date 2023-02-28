import {useSelector} from "react-redux";
import {useCallback, useMemo} from "react";
import {superIngredientsSelector} from "../services/selectors/ingredientsSelectors";

export const useIngredientsData = () => {
    const ingredients = useSelector(superIngredientsSelector)

    const ingredientsDataDict = useMemo(() => {
        const ingredientsData = {}
        ingredients.forEach(ingredient => ingredientsData[ingredient._id] = ingredient)
        return ingredientsData
    }, [ingredients])

    const getIngredientImage = useCallback(ingredientId => ingredientsDataDict[ingredientId].image,[ingredientsDataDict])
    const getIngredientPrice = useCallback(ingredientId => ingredientsDataDict[ingredientId].price,[ingredientsDataDict])
    const getIngredientData = useCallback(ingredientId => ingredientsDataDict[ingredientId],[ingredientsDataDict])
    const calculateIngredientsPriceFromIdList = useCallback((ingredientsIdList) => ingredientsIdList.reduce((prev,ingredientId) => prev + getIngredientPrice(ingredientId),0),[getIngredientPrice])

    return useMemo(() => ({ingredientsDataDict,getIngredientPrice,getIngredientImage,getIngredientData,calculateIngredientsPriceFromIdList}),[calculateIngredientsPriceFromIdList, getIngredientData, getIngredientImage, getIngredientPrice, ingredientsDataDict])
}