import {createSelector} from "@reduxjs/toolkit";
import {RootState} from "../store/store";


export const baseUserSelector = (state:RootState) => state.userReducer

export const superUserSelector = createSelector(baseUserSelector,state => {
    return {...state, name: state.name,email: state.email, isAuth: !!state.email, isSuccess: state.isSuccess, isLoading: state.isLoading}
})