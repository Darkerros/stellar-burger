import {createSelector} from "@reduxjs/toolkit";
import {RootState} from "../store/store";

export const baseFeedOrdersWebSocketReducerSelector = (state:RootState) => state.feedOrderWebSocketReducer
export const baseFeedOrdersWebSocketOrdersSelector = (state:RootState) => state.feedOrderWebSocketReducer.orders

export const superFeedOrdersWebSocketReducerSelector = createSelector(baseFeedOrdersWebSocketReducerSelector,state => state)
export const superFeedOrdersWebSocketOrdersSelector = createSelector(baseFeedOrdersWebSocketOrdersSelector,state => state)