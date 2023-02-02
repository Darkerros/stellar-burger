import {combineReducers} from "redux";
import cartReducer from "./cartReducer";
import ingredientsReducer from "./ingredientsReducer";
import orderReducer from "./orderReducer";
import userReducer from "./userReducer";
import orderWebSocketReducer from "./orderWebSocketReducer";

const rootReducer = combineReducers({
    cartReducer,
    ingredientsReducer,
    orderReducer,
    userReducer,
    orderWebSocketReducer
})

export default rootReducer