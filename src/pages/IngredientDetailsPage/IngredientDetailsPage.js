import React, {useEffect, useState} from 'react';
import styles from './IngredientDetailsPage.module.css'
import IngredientDetails from "../../components/IngredientDetails/IngredientDetails";
import {useLocation, useParams} from "react-router-dom";
import Api from "../../api/Api";
import AppHeader from "../../components/AppHeader/AppHeader";
import MainPage from "../MainPage/MainPage";

const IngredientDetailsPage = () => {
    const location = useLocation()
    const {id} = useParams()
    const [ingredient,setIngredient] = useState(null)

    useEffect(() => {
        if (location.state?.from !== "/") {
            Api.getIngredients()
                .then(ingredients => {
                    const ingredient = ingredients.data.filter(ingredient => ingredient._id === id)[0]
                    setIngredient(ingredient)
                })
                .catch(err => console.log(err))
        }
    },[id, location.state])

    return (
        location.state?.from === "/"
            ?
            <MainPage/>
            :
            ingredient
                ?
                <>
                    <AppHeader/>
                    <div className={styles.container}>
                        <IngredientDetails ingredientDetails={ingredient} textAlignCentre={true}/>
                    </div>
                </>
                :
                <p className={"text text_color_primary text_type_main-large"}>Wait</p>
    );
};

export default IngredientDetailsPage;