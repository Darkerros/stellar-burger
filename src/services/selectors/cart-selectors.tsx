import {createSelector} from "@reduxjs/toolkit";
import {RootState} from "../store/store";

export const baseCartReducerSelector = (state:RootState) => state.cartReducer

export const superCartReducerSelector = createSelector(baseCartReducerSelector,state => state)
