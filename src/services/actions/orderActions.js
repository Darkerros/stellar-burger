export const ORDER_LOADING = "ORDER_LOADING"
export const ORDER_GET = "ORDER_GET"
export const ORDER_FAIL = "ORDER_FAIL"

export const orderLoadingAction = () => ({type: ORDER_LOADING})
export const orderLoadingFailAction = (errorMessage) => ({type: ORDER_FAIL, payload: errorMessage})
export const orderGetAction = (order) => ({type: ORDER_GET, payload: order})
