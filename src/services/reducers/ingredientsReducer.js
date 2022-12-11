import {INGREDIENTS_GET, INGREDIENTS_GET_FAILED, INGREDIENTS_LOADING} from "../actions/ingredientsActions";

const defaultState = {isLoading: false, isFail: false, isSuccess: false, ingredients: []}

const ingredientsReducer = (state = defaultState, action) => {
    switch (action.type) {
        case INGREDIENTS_LOADING:
            return {isLoading: true, isFail: false, isSuccess: false, ...state}
        case INGREDIENTS_GET:
            return {isLoading: false, isFail: false, isSuccess: true, ingredients: action.payload}
        case INGREDIENTS_GET_FAILED:
            return {isLoading: false, isFail: true, isSuccess: false, ...state}
        default:
            return state
    }
}

export default ingredientsReducer

