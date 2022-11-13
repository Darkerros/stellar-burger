import React, {useEffect, useState} from 'react';
import appMainStyles from './AppMain.module.css'
import BurgerIngredients from "../BurgerIngredients/BurgerIngredients";

import api from "../../api/Api";

const AppMain = () => {
    const [ingredients, setIngredients] = useState([])

    useEffect(() => {
        api.getrIngredients()
            .then(data => {
                setIngredients(data.data)
            })
            .catch(error => console.log(error))
    }, [])

    return (
        <main className={appMainStyles.AppMain}>
            <BurgerIngredients ingredients={ingredients}/>
        </main>
    );
};

export default AppMain;