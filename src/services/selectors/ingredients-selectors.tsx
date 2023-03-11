import {createSelector} from "@reduxjs/toolkit";
import {RootState} from "../store/store";
import {IIngredientsReducerState} from "../reducers/ingredients-reducer";

export const baseIngredientsReducerSelector = (state:RootState) => state.ingredientsReducer
export const baseIngredientsSelector = (state:RootState):IIngredientsReducerState["ingredients"] => state.ingredientsReducer.ingredients

export const superIngredientsReducerSelector = createSelector(baseIngredientsReducerSelector,state => (state))
export const superIngredientsSelector = createSelector(baseIngredientsSelector,state => state)