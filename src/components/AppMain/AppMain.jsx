import React, {useEffect, useState} from 'react';
import appMainStyles from './AppMain.module.css'
import BurgerIngredients from "../BurgerIngredients/BurgerIngredients";
import BurgerConstructor from "../BurgerConstructor/BurgerConstructor";
import Loading from "../Loading/Loading";
import {DndProvider} from "react-dnd";
import {HTML5Backend} from "react-dnd-html5-backend";
import {useDispatch, useSelector} from "react-redux";
import {getIngredientsThunk} from "../../services/actions/getIngredientsThunk";
import Modal from "../Modal/Modal";
import IngredientDetails from "../IngredientDetails/IngredientDetails";
import {useLocation, useNavigate} from "react-router-dom";
import {superIngredientsReducerSelector} from "../../services/selectors/ingredientsSelectors";

const AppMain = () => {
    const dispatch = useDispatch()
    const location = useLocation()
    const navigate = useNavigate()
    const ingredients = useSelector(superIngredientsReducerSelector)
    const [ingredientModalState, setIngredientModalState] = useState(!!location.state?.modalState)
    const closeIngredientModal = () => {
        setIngredientModalState(false)
        location.state.modalState = false
        navigate("/")
    }

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
            {ingredientModalState &&
                <Modal handleClose={closeIngredientModal}>
                    <IngredientDetails ingredientDetails={location.state.ingredient}/>
                </Modal>
            }
        </main>);
};


export default AppMain;
