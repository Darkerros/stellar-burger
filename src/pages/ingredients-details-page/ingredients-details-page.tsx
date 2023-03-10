import React, {useEffect, useState} from 'react';
import styles from './ingredient-details-page.module.css'
import IngredientsDetails from "../../components/ingredient-details/ingredients-details";
import {useLocation, useParams} from "react-router-dom";
import Api from "../../api/api";
import Loading from "../../components/loading/loading";
import {IIngredient} from "../../types/data/ingredient-type";

const IngredientsDetailsPage = () => {
    const location = useLocation()
    const {id} = useParams()
    const [ingredient, setIngredient] = useState<IIngredient | null>(null)

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
                <IngredientsDetails ingredientDetails={ingredient} textAlignCentre={true}/>
            </div>
            :
            <Loading/>
    );
};

export default IngredientsDetailsPage;