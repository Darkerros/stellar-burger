export enum FeedWebsocketOrderActionTypes {
    FEED_ORDERS_WEBSOCKET_START_CONNECT = "FEED_ORDERS_WEBSOCKET_START_CONNECT",
    FEED_ORDERS_WEBSOCKET_CLOSE_CONNECT = "FEED_ORDERS_WEBSOCKET_CLOSE_CONNECT",
    FEED_ORDERS_WEBSOCKET_CONNECTION_START = "FEED_ORDERS_WEBSOCKET_CONNECTION_START",
    FEED_ORDERS_WEBSOCKET_CONNECTION_ERROR = "FEED_ORDERS_WEBSOCKET_CONNECTION_ERROR",
    FEED_ORDERS_WEBSOCKET_CONNECTION_CLOSE = "FEED_ORDERS_WEBSOCKET_CONNECTION_CLOSE",
    FEED_ORDERS_WEBSOCKET_GET_MESSAGE = "FEED_ORDERS_WEBSOCKET_GET_MESSAGE"
}

export type TFeedWebsocketOrderActions =
    IFeedOrderWebsocketStartConnectAction
    | IFeedOrderWebsocketCloseConnectAction
    | IFeedOrderWebsocketConnectionStartAction
    | IFeedOrderWebsocketConnectionErrorAction
    | IFeedOrderWebsocketConnectionCloseAction
    | IFeedOrderWebsocketGetMessageAction

interface IFeedOrderWebsocketStartConnectAction {
    type: FeedWebsocketOrderActionTypes.FEED_ORDERS_WEBSOCKET_START_CONNECT
    payload: string
}
interface IFeedOrderWebsocketCloseConnectAction {
    type: FeedWebsocketOrderActionTypes.FEED_ORDERS_WEBSOCKET_CLOSE_CONNECT
}
interface IFeedOrderWebsocketConnectionStartAction {
    type: FeedWebsocketOrderActionTypes.FEED_ORDERS_WEBSOCKET_CONNECTION_START
    payload: any
}
interface IFeedOrderWebsocketConnectionErrorAction {
    type: FeedWebsocketOrderActionTypes.FEED_ORDERS_WEBSOCKET_CONNECTION_ERROR
    payload: any
}
interface IFeedOrderWebsocketConnectionCloseAction {
    type: FeedWebsocketOrderActionTypes.FEED_ORDERS_WEBSOCKET_CONNECTION_CLOSE
    payload: any
}
interface IFeedOrderWebsocketGetMessageAction {
    type: FeedWebsocketOrderActionTypes.FEED_ORDERS_WEBSOCKET_GET_MESSAGE
    payload: any
}

export type TFeedOrdersWebSocketStartConnectActionCreator = (url: string) => IFeedOrderWebsocketStartConnectAction
export type TFeedOrdersWebSocketCloseConnectAction = () => IFeedOrderWebsocketCloseConnectAction
export type TFeedOrdersWebSocketConnectionStartAction = (event: Event) => IFeedOrderWebsocketConnectionStartAction
export type TFeedOrdersWebSocketConnectionErrorAction = (event: Event) => IFeedOrderWebsocketConnectionErrorAction
export type TFeedOrdersWebSocketConnectionCloseAction = (event: Event) => IFeedOrderWebsocketConnectionCloseAction
export type TFeedOrdersWebSocketGetMessageAction = (data: object) => IFeedOrderWebsocketGetMessageAction


export const feedOrdersWebSocketStartConnectAction: TFeedOrdersWebSocketStartConnectActionCreator = (url) => ({
    type: FeedWebsocketOrderActionTypes.FEED_ORDERS_WEBSOCKET_START_CONNECT,
    payload: url
})
export const feedOrdersWebSocketCloseConnectAction: TFeedOrdersWebSocketCloseConnectAction = () => ({ type: FeedWebsocketOrderActionTypes.FEED_ORDERS_WEBSOCKET_CLOSE_CONNECT})
export const feedOrdersWebSocketConnectionStartAction: TFeedOrdersWebSocketConnectionStartAction = (event) => ({
    type: FeedWebsocketOrderActionTypes.FEED_ORDERS_WEBSOCKET_CONNECTION_START,
    payload: event
})
export const feedOrdersWebSocketConnectionErrorAction: TFeedOrdersWebSocketConnectionErrorAction = (event) => ({
    type: FeedWebsocketOrderActionTypes.FEED_ORDERS_WEBSOCKET_CONNECTION_ERROR,
    payload: event
})
export const feedOrdersWebSocketConnectionCloseAction: TFeedOrdersWebSocketConnectionCloseAction = (event) => ({
    type: FeedWebsocketOrderActionTypes.FEED_ORDERS_WEBSOCKET_CONNECTION_CLOSE,
    payload: event
})
export const feedOrdersWebSocketGetMessageAction: TFeedOrdersWebSocketGetMessageAction = (data) => ({
    type: FeedWebsocketOrderActionTypes.FEED_ORDERS_WEBSOCKET_GET_MESSAGE,
    payload: data
})