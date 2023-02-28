import {createSelector} from "@reduxjs/toolkit";

export const baseIngredientsReducerSelector = state => state.ingredientsReducer
export const baseIngredientsSelector = state => state.ingredientsReducer.ingredients

export const superIngredientsReducerSelector = createSelector(baseIngredientsReducerSelector,state => (state))
export const superIngredientsSelector = createSelector(baseIngredientsSelector,state => state)