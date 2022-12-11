import React, {useEffect} from 'react';
import appMainStyles from './AppMain.module.css'
import BurgerIngredients from "../BurgerIngredients/BurgerIngredients";
import BurgerConstructor from "../BurgerConstructor/BurgerConstructor";
import Loading from "../Loading/Loading";
import {DndProvider} from "react-dnd";
import {HTML5Backend} from "react-dnd-html5-backend";
import {useDispatch, useSelector} from "react-redux";
import {getIngredientsThunk} from "../../services/actions/getIngredientsThunk";

const AppMain = () => {
    const ingredients = useSelector(state => state.ingredientsReducer)
    const dispatch = useDispatch()

    // eslint-disable-next-line
    useEffect(() => dispatch(getIngredientsThunk()), [])

    return (!ingredients.isSuccess ? <Loading/> : <main className={appMainStyles.AppMain}>
            <DndProvider backend={HTML5Backend}>
                <BurgerIngredients/>
                <BurgerConstructor/>
            </DndProvider>
        </main>);
};


export default AppMain;
