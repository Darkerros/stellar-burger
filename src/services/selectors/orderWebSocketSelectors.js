import {createSelector} from "@reduxjs/toolkit";

export const baseOrderWebSocketReducerSelector = (state) => state.orderWebSocketReducer
export const baseOrderWebSocketOrdersSelector = (state) => state.orderWebSocketReducer.orders

export const superOrderWebSocketReducerSelector = createSelector(baseOrderWebSocketReducerSelector,state => state)
export const superOrderWebSocketOrdersSelector = createSelector(baseOrderWebSocketOrdersSelector,state => state)