
const defaultState = {isLoading: false, isFail: false, isSucess: false, order: null}

const ORDER_LOADING = "ORDER_LOADING"
const ORDER_GET = "ORDER_GET"
const ORDER_FAIL = "ORDER_FAIL"

const orderReducer = (state = defaultState,action) => {
    switch (action.type){
        case ORDER_LOADING:
            return {isLoading: true, isFail: false, isSucess: false, order: null}
        case ORDER_GET:
            return {isLoading: false, isFail: false, isSucess: true, order: action.payload}
        case ORDER_FAIL:
            return {isLoading: false, isFail: true, isSucess: false, order: null}
        default:
            return state
    }
}

export default orderReducer;

export const orderLoadingAction = () => ({type: ORDER_LOADING})
export const orderLoadingFailAction = () => ({type: ORDER_FAIL})
export const orderGetAction = (order) => ({type: ORDER_GET,payload: order})