import {createSelector} from "@reduxjs/toolkit";

export const baseCartReducerSelector = (state) => state.cartReducer

export const superCartReducerSelector = createSelector(baseCartReducerSelector,state => state)
