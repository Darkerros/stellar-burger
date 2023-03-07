import React, {useEffect} from 'react';
import appMainStyles from './app-main.module.css'
import BurgerIngredients from "../burger-ingredients/burger-ingredients";
import BurgerContructor from "../burger-constructor/burger-contructor";
import Loading from "../loading/loading";
import {DndProvider} from "react-dnd";
import {HTML5Backend} from "react-dnd-html5-backend";
import {useDispatch, useSelector} from "react-redux";
import {getIngredientsThunk} from "../../services/actions/getIngredientsThunk";
import {Outlet} from "react-router-dom";
import {superIngredientsReducerSelector} from "../../services/selectors/ingredientsSelectors";

const AppMain = () => {
    const dispatch = useDispatch()
    const ingredients = useSelector(superIngredientsReducerSelector)

    // eslint-disable-next-line
    useEffect(() => dispatch(getIngredientsThunk()), [])

    return (!ingredients.isSuccess
        ?
        <Loading/>
        :
        <main className={appMainStyles.AppMain}>
            <DndProvider backend={HTML5Backend}>
                <BurgerIngredients/>
                <BurgerContructor/>
            </DndProvider>
            <Outlet/>
        </main>);
};


export default AppMain;
