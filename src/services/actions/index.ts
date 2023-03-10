import {TCartActions} from "./cart-action-types";
import {TFeedWebsocketOrderActions} from "./feed-orders-websocket-actions";
import {TIngredientsActions} from "./ingredients-actions";
import {TOrderActions} from "./order-actions";
import {TUserActions} from "./user-actions";
import {TUserWebsocketOrdersActions} from "./userOrdersWebSocketActions";

export type AppActions =
    TCartActions
    | TFeedWebsocketOrderActions
    | TIngredientsActions
    | TOrderActions
    | TUserActions
    | TUserWebsocketOrdersActions