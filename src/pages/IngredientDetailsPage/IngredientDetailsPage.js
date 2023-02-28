import React, {useEffect, useState} from 'react';
import styles from './IngredientDetailsPage.module.css'
import IngredientDetails from "../../components/IngredientDetails/IngredientDetails";
import {useLocation, useParams} from "react-router-dom";
import Api from "../../api/Api";
import Loading from "../../components/Loading/Loading";

const IngredientDetailsPage = () => {
    const location = useLocation()
    const {id} = useParams()
    const [ingredient, setIngredient] = useState(null)

    useEffect(() => {
        if (location.state?.from !== "/") {
            Api.getIngredients()
                .then(ingredients => {
                    const ingredient = ingredients.data.filter(ingredient => ingredient._id === id)[0]
                    setIngredient(ingredient)
                })
                .catch(err => console.log(err))

        }
    }, [id, location.state])

    return (
        ingredient
            ?
            <div className={styles.container}>
                <IngredientDetails ingredientDetails={ingredient} textAlignCentre={true}/>
            </div>
            :
            <Loading/>
    );
};

export default IngredientDetailsPage;