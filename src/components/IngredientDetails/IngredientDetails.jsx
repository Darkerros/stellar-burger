import React from 'react';
import ingredientDetailsStyles from './IngredientDetails.module.css'
import ingredientType from "../../types/ingredientType";
import PropTypes from "prop-types";

const IngredientDetails = ({ingredientDetails,textAlignCentre}) => {
    return (<div className={ingredientDetailsStyles.ingredientDetails + ' mt-10 mb-15 mr-10 ml-10 '}>
            <p className={` text text_type_main-large mt-2 mb-2 ${ingredientDetailsStyles.title} ${textAlignCentre === true ? ingredientDetailsStyles.textCentre : " "}`}>Детали ингредиента</p>
            <img className={ingredientDetailsStyles.image} src={ingredientDetails.image_large}
                 alt={ingredientDetails.name ? ingredientDetails.name : 'Картинка ингредиента'}/>
            <p className={ingredientDetailsStyles.name + " text text_type_main-medium mt-5"}>{ingredientDetails.name}</p>
            <ul className={ingredientDetailsStyles.info + " text text_type_main-medium mt-8"}>
                <li className={ingredientDetailsStyles.infoItem}>
                    <p className={ingredientDetailsStyles.infoItemTitle + " text text_type_main-default text_color_inactive"}>Калории,ккал</p>
                    <p className={ingredientDetailsStyles.infoItemText + " text text_type_digits-default text_color_inactive mt-2"}>{ingredientDetails.calories}</p>
                </li>
                <li className={ingredientDetailsStyles.infoItem + " ml-5"}>
                    <p className={ingredientDetailsStyles.infoItemTitle + " text text_type_main-default text_color_inactive"}>Белки,г</p>
                    <p className={ingredientDetailsStyles.infoItemText + " text text_type_digits-default text_color_inactive mt-2"}>{ingredientDetails.proteins}</p>
                </li>
                <li className={ingredientDetailsStyles.infoItem + " ml-5"}>
                    <p className={ingredientDetailsStyles.infoItemTitle + " text text_type_main-default text_color_inactive"}>Жиры,г</p>
                    <p className={ingredientDetailsStyles.infoItemText + " text text_type_digits-default text_color_inactive mt-2"}>{ingredientDetails.fat}</p>
                </li>
                <li className={ingredientDetailsStyles.infoItem + " ml-5"}>
                    <p className={ingredientDetailsStyles.infoItemTitle + " text text_type_main-default text_color_inactive"}>Углеводы,г</p>
                    <p className={ingredientDetailsStyles.infoItemText + " text text_type_digits-default text_color_inactive mt-2"}>{ingredientDetails.carbohydrates}2</p>
                </li>
            </ul>
        </div>);
};

IngredientDetails.propTypes = {
    ingredientDetails: ingredientType.isRequired,
    textAlignCentre: PropTypes.bool
}

export default IngredientDetails;
