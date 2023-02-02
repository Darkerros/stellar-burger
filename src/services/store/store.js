import {applyMiddleware, createStore} from "redux";
import {composeWithDevTools} from "redux-devtools-extension";
import rootReducer from "../reducers/rootReducer";
import thunk from "redux-thunk";
import {orderWebSocketMidleware} from "../midleware/orderWebSocketMidleware";


const store = createStore(rootReducer,composeWithDevTools(applyMiddleware(thunk,orderWebSocketMidleware())))

export default store;