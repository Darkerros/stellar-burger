import {applyMiddleware, createStore} from "redux";
import {composeWithDevTools} from "redux-devtools-extension";
import rootReducer from "../reducers/root-reducer";
import thunk, {ThunkDispatch} from "redux-thunk";
import {IWsActions, socketMidleware} from "../midleware/socket-midleware";
import {
    userOrdersWebSocketConnectionCloseAction, userOrdersWebSocketConnectionErrorAction,
    userOrdersWebSocketConnectionStartAction,
    userOrdersWebSocketGetMessageAction,
    UserWebsocketOrdersActionTypes
} from "../actions/userOrdersWebSocketActions";
import {
    feedOrdersWebSocketConnectionCloseAction,
    feedOrdersWebSocketConnectionErrorAction,
    feedOrdersWebSocketConnectionStartAction,
    feedOrdersWebSocketGetMessageAction,
    FeedWebsocketOrderActionTypes
} from "../actions/feed-orders-websocket-actions";
import {AppActions} from "../actions";


const userWsActions: IWsActions = {
    startConnectType: UserWebsocketOrdersActionTypes.USER_ORDERS_WEBSOCKET_START_CONNECT,
    closeConnectType: UserWebsocketOrdersActionTypes.USER_ORDERS_WEBSOCKET_CLOSE_CONNECT,
    onMessage: userOrdersWebSocketGetMessageAction,
    onStart: userOrdersWebSocketConnectionStartAction,
    onClose: userOrdersWebSocketConnectionCloseAction,
    onError: userOrdersWebSocketConnectionErrorAction,
}

const feedWsActions: IWsActions = {
    startConnectType: FeedWebsocketOrderActionTypes.FEED_ORDERS_WEBSOCKET_START_CONNECT,
    closeConnectType: FeedWebsocketOrderActionTypes.FEED_ORDERS_WEBSOCKET_CLOSE_CONNECT,
    onMessage: feedOrdersWebSocketGetMessageAction,
    onStart: feedOrdersWebSocketConnectionStartAction,
    onClose: feedOrdersWebSocketConnectionCloseAction,
    onError: feedOrdersWebSocketConnectionErrorAction,
}

const store = createStore(rootReducer,
   composeWithDevTools(applyMiddleware(thunk, socketMidleware(userWsActions), socketMidleware(feedWsActions))))

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch & ThunkDispatch<RootState, any, AppActions>

export default store;