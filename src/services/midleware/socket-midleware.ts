import {Middleware} from "redux";
import {
    FeedWebsocketOrderActionTypes, TFeedOrdersWebSocketConnectionCloseAction, TFeedOrdersWebSocketConnectionErrorAction,
    TFeedOrdersWebSocketConnectionStartAction, TFeedOrdersWebSocketGetMessageAction,
} from "../actions/feed-orders-websocket-actions";
import {
    TUserOrdersWebSocketConnectionCloseAction, TUserOrdersWebSocketConnectionErrorAction,
    TUserOrdersWebSocketConnectionStartAction, TUserOrdersWebSocketGetMessageAction,
    UserWebsocketOrdersActionTypes
} from "../actions/userOrdersWebSocketActions";

export interface IWsActions {
    startConnectType: FeedWebsocketOrderActionTypes.FEED_ORDERS_WEBSOCKET_START_CONNECT | UserWebsocketOrdersActionTypes.USER_ORDERS_WEBSOCKET_START_CONNECT
    closeConnectType: FeedWebsocketOrderActionTypes.FEED_ORDERS_WEBSOCKET_CLOSE_CONNECT | UserWebsocketOrdersActionTypes.USER_ORDERS_WEBSOCKET_CLOSE_CONNECT
    onStart: TUserOrdersWebSocketConnectionStartAction | TFeedOrdersWebSocketConnectionStartAction
    onClose: TUserOrdersWebSocketConnectionCloseAction | TFeedOrdersWebSocketConnectionCloseAction
    onError: TUserOrdersWebSocketConnectionErrorAction | TFeedOrdersWebSocketConnectionErrorAction
    onMessage: TUserOrdersWebSocketGetMessageAction | TFeedOrdersWebSocketGetMessageAction
}

export const socketMidleware = (wsActions:IWsActions):Middleware => store => {
    let socket: WebSocket | null = null;
    return next => action => {
        const {dispatch} = store
        const {type, payload} = action

        if (type === wsActions.startConnectType) {
            socket = new WebSocket(payload)
        }

        if (socket) {
            socket.onopen = event => dispatch(wsActions.onStart(event))
            socket.onclose = event => dispatch(wsActions.onClose(event))
            socket.onerror = event => dispatch(wsActions.onError(event))
            socket.onmessage = event => dispatch(wsActions.onMessage(JSON.parse(event.data)))

            if (type === wsActions.closeConnectType && socket.readyState === 1) {
                socket.close(1000, "default")
                socket = null
            }
        }

        next(action)
    }
}