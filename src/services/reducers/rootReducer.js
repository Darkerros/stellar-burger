import {combineReducers} from "redux";
import cartReducer from "./cartReducer";
import ingredientsReducer from "./ingredientsReducer";
import orderReducer from "./orderReducer";

const rootReducer = combineReducers({
    cartReducer,
    ingredientsReducer,
    orderReducer
})

export default rootReducer