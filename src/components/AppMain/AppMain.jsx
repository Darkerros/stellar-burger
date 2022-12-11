import React, {useEffect} from 'react';
import appMainStyles from './AppMain.module.css'
import BurgerIngredients from "../BurgerIngredients/BurgerIngredients";
import api from "../../api/api";
import BurgerConstructor from "../BurgerConstructor/BurgerConstructor";
import Loading from "../Loading/Loading";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

import {
    ingredientsLoadAction,
    ingredientsLoadCompleteAction,
    ingredientsLoadFailAction
} from "../../services/reducers/ingredientsReducer";
import {useDispatch, useSelector} from "react-redux";

const AppMain = () => {
    const ingredients = useSelector(state => state.ingredientsReducer)
    const dispatch = useDispatch()

    const getIngredients = () => (dispatch) => {
        dispatch(ingredientsLoadAction())
        api.getrIngredients()
            .then(data => dispatch(ingredientsLoadCompleteAction(data.data)))
            .catch(() => dispatch(ingredientsLoadFailAction()))
        }
    // eslint-disable-next-line
    useEffect(() => dispatch(getIngredients()), [])

    return (
        !ingredients.isSuccess
        ?
            <Loading/>
        :
            <main className={appMainStyles.AppMain} >
                <DndProvider backend={HTML5Backend}>
                    <BurgerIngredients/>
                    <BurgerConstructor/>
                </DndProvider>
            </main>
    );
    }
;


export default AppMain;
