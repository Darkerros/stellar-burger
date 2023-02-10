import {combineReducers} from "redux";
import cartReducer from "./cartReducer";
import ingredientsReducer from "./ingredientsReducer";
import orderReducer from "./orderReducer";
import userReducer from "./userReducer";
import userOrderWebSocketReducer from "./userOrderWebSocketReducer";
import feedOrderWebSocketReducer from "./feedOrderWebSocketReducer";

const rootReducer = combineReducers({
    cartReducer,
    ingredientsReducer,
    orderReducer,
    userReducer,
    userOrderWebSocketReducer,
    feedOrderWebSocketReducer
})

export default rootReducer