import {createSelector} from "@reduxjs/toolkit";
import {RootState} from "../store/store";

export const baseOrderReducerSelector = (state:RootState) => state.orderReducer

export const superOrderReducerSelector = createSelector(baseOrderReducerSelector,state => state)