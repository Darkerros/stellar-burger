const INGREDIENTS_LOADING = "INGREDIENTS_LOADING"
const INGREDIENTS_GET = "INGREDIENTS_GET"
const INGREDIENTS_GET_FAILED = "INGREDIENTS_GET_FAILED"

const defaultState = {isLoading: false, isFail: false, isSucess: false, ingredients: []}

const ingredientsReducer = (state = defaultState, action) => {
    switch (action.type) {
        case INGREDIENTS_LOADING:
            return {isLoading: true, isFail: false, isSucess: false, ...state}
        case INGREDIENTS_GET:
            return {isLoading: false, isFail: false, isSucess: false, ingredients: action.payload}
        case INGREDIENTS_GET_FAILED:
            return {isLoading: false, isFail: true, isSucess: false, ...state}
        default:
            return state
    }
}

export default ingredientsReducer

export const ingredientsLoadAction = () => ({type: INGREDIENTS_LOADING})
export const ingredientsLoadFailAction = () => ({type: INGREDIENTS_GET_FAILED})
export const ingredientsGetAction = (ingredients) => ({type: ingredientsGetAction, payload: ingredients})