import {createSelector} from "@reduxjs/toolkit";

export const baseFeedOrdersWebSocketReducerSelector = (state) => state.feedOrderWebSocketReducer
export const baseFeedOrdersWebSocketOrdersSelector = (state) => state.feedOrderWebSocketReducer.orders

export const superFeedOrdersWebSocketReducerSelector = createSelector(baseFeedOrdersWebSocketReducerSelector,state => state)
export const superFeedOrdersWebSocketOrdersSelector = createSelector(baseFeedOrdersWebSocketOrdersSelector,state => state)