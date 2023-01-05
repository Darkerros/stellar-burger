import {ORDER_FAIL, ORDER_GET, ORDER_LOADING} from "../actions/orderActions";

const defaultState = {isLoading: false, isFail: false, isSucess: false, failMessage: null, order: null}

const orderReducer = (state = defaultState, action) => {
    switch (action.type) {
        case ORDER_LOADING:
            return {isLoading: true, isFail: false, isSuccess: false, failMessage: null, order: null,}
        case ORDER_GET:
            return {isLoading: false, isFail: false, isSuccess: true, failMessage: null, order: action.payload}
        case ORDER_FAIL:
            return {isLoading: false, isFail: true, isSuccess: false, order: null, failMessage: action.payload}
        default:
            return state
    }
}

export default orderReducer;

