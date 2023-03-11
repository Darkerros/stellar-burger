import {ThunkAction} from "redux-thunk";
import {RootState} from "../store/store";
import {Action} from "redux";
export type TAppThunk<actions extends Action,args = any> = ThunkAction<void, RootState, args, actions>