import {createSelector} from "@reduxjs/toolkit";

export const baseUserOrdersWebSocketReducerSelector = (state) => state.userOrderWebSocketReducer
export const baseUserOrdersWebSocketOrdersSelector = (state) => state.userOrderWebSocketReducer.orders

export const superUserOrdersWebSocketReducerSelector = createSelector(baseUserOrdersWebSocketReducerSelector,state => state)
export const superUserOrdersWebSocketOrdersSelector = createSelector(baseUserOrdersWebSocketOrdersSelector,state => state)