import {createSelector} from "@reduxjs/toolkit";


export const baseUserSelector = state => state.userReducer

export const superUserSelector = createSelector(baseUserSelector,state => {
    return {name: state.name,email: state.email, isAuth: !!state.email, isSuccess: state.isSuccess, isLoading: state.isLoading}
})