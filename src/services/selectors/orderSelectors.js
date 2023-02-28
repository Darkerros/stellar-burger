import {createSelector} from "@reduxjs/toolkit";

export const baseOrderReducerSelector = state => state.orderReducer

export const superOrderReducerSelector = createSelector(baseOrderReducerSelector,state => state)