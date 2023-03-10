import {createSelector} from "@reduxjs/toolkit";
import {RootState} from "../store/store";

export const baseUserOrdersWebSocketReducerSelector = (state:RootState) => state.userOrderWebSocketReducer
export const baseUserOrdersWebSocketOrdersSelector = (state:RootState) => state.userOrderWebSocketReducer.orders

export const superUserOrdersWebSocketReducerSelector = createSelector(baseUserOrdersWebSocketReducerSelector,state => state)
export const superUserOrdersWebSocketOrdersSelector = createSelector(baseUserOrdersWebSocketOrdersSelector,state => state)