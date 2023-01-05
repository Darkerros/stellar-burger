export const INGREDIENTS_LOADING = "INGREDIENTS_LOADING"
export const INGREDIENTS_GET = "INGREDIENTS_GET"
export const INGREDIENTS_GET_FAILED = "INGREDIENTS_GET_FAILED"

export const ingredientsLoadAction = () => ({type: INGREDIENTS_LOADING})
export const ingredientsLoadFailAction = () => ({type: INGREDIENTS_GET_FAILED})
export const ingredientsLoadCompleteAction = (ingredients) => ({type: INGREDIENTS_GET, payload: ingredients})
