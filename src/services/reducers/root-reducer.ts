import {combineReducers} from "redux";
import cartReducer from "./cart-reducer";
import ingredientsReducer from "./ingredients-reducer";
import orderReducer from "./order-reducer";
import userReducer from "./user-reducer";
import {userOrderWebsocketReducer} from "./user-order-websocket-reducer";
import {feedOrderWebsocketReducer} from "./feed-order-websocket-reducer";

const rootReducer = combineReducers({
    cartReducer,
    ingredientsReducer,
    orderReducer,
    userReducer,
    feedOrderWebSocketReducer: feedOrderWebsocketReducer,
    userOrderWebSocketReducer: userOrderWebsocketReducer,
})

export default rootReducer