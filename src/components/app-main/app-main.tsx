import React, {useEffect} from 'react';
import appMainStyles from './app-main.module.css'
import BurgerIngredients from "../burger-ingredients/burger-ingredients";
import BurgerConstructor from "../burger-constructor/burger-constructor";
import Loading from "../loading/loading";
import {DndProvider} from "react-dnd";
import {HTML5Backend} from "react-dnd-html5-backend";
import {getIngredientsThunk} from "../../services/thunks/get-ingredients-thunk";
import {Outlet} from "react-router-dom";
import {superIngredientsReducerSelector} from "../../services/selectors/ingredients-selectors";
import {useAppDispatch} from "../../hooks/use-app-dispatch";
import {useAppSelector} from "../../hooks/use-app-selector";

const AppMain = () => {
    const dispatch = useAppDispatch()
    const ingredients = useAppSelector(superIngredientsReducerSelector)

    // eslint-disable-next-line
    useEffect(() => dispatch(getIngredientsThunk()), [])

    return (!ingredients.isSuccess
        ?
        <Loading/>
        :
        <main className={appMainStyles.AppMain}>
            <DndProvider backend={HTML5Backend}>
                <BurgerIngredients/>
                <BurgerConstructor/>
            </DndProvider>
            <Outlet/>
        </main>);
};


export default AppMain;
