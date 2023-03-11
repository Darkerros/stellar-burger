import {IIngredient} from "../../types/data/ingredient-type";

export enum IngredientsActionTypes {
    INGREDIENTS_LOADING = "INGREDIENTS_LOADING",
    INGREDIENTS_GET = "INGREDIENTS_GET",
    INGREDIENTS_GET_FAILED = "INGREDIENTS_GET_FAILED"
}

export type TIngredientsActions = IIngredientsGetAction | IIngredientsLoadingAction | IIngredientsLoadingFailAction

interface IIngredientsLoadingAction {
    type: IngredientsActionTypes.INGREDIENTS_LOADING;
}

interface IIngredientsLoadingFailAction {
    type: IngredientsActionTypes.INGREDIENTS_GET_FAILED;
}

interface IIngredientsGetAction {
    type: IngredientsActionTypes.INGREDIENTS_GET;
    payload: IIngredient[];
}


export const ingredientsLoadAction = ():TIngredientsActions => ({type: IngredientsActionTypes.INGREDIENTS_LOADING})
export const ingredientsLoadFailAction = ():TIngredientsActions => ({type: IngredientsActionTypes.INGREDIENTS_GET_FAILED})
export const ingredientsLoadCompleteAction = (ingredients:IIngredient[]):TIngredientsActions => ({type: IngredientsActionTypes.INGREDIENTS_GET, payload: ingredients})
