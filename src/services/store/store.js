import {applyMiddleware, createStore} from "redux";
import {composeWithDevTools} from "redux-devtools-extension";
import rootReducer from "../reducers/rootReducer";
import thunk from "redux-thunk";
import {userOrdersWebSocketMidleware} from "../midleware/userOrdersWebSocketMidleware";
import {feedOrdersWebSocketMidleware} from "../midleware/feedOrdersWebSocketMidleware";


const store = createStore(rootReducer,composeWithDevTools(applyMiddleware(thunk,userOrdersWebSocketMidleware(),feedOrdersWebSocketMidleware())))

export default store;