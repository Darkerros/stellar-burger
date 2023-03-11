import {IIngredient} from "../../types/data/ingredient-type";
import {IngredientsActionTypes, TIngredientsActions} from "../actions/ingredients-actions";

export interface IIngredientsReducerState {
    isLoading: boolean;
    isFail: boolean;
    isSuccess: boolean;
    ingredients: IIngredient[]
}

const defaultState:IIngredientsReducerState = {
    isLoading: false,
    isFail: false,
    isSuccess: false,
    ingredients: []
}

const ingredientsReducer = (state = defaultState, action:TIngredientsActions):IIngredientsReducerState => {
    switch (action.type) {
        case IngredientsActionTypes.INGREDIENTS_LOADING:
            return {...state, isLoading: true, isFail: false, isSuccess: false}
        case IngredientsActionTypes.INGREDIENTS_GET:
            return {isLoading: false, isFail: false, isSuccess: true, ingredients: action.payload}
        case IngredientsActionTypes.INGREDIENTS_GET_FAILED:
            return {...state, isLoading: false, isFail: true, isSuccess: false, }
        default:
            return state
    }
}

export default ingredientsReducer

