import React from 'react';
import ingredientDetailsStyles from './IngredientDetails.module.css'

const IngredientDetails = () => {
    return (
        <div className={ingredientDetailsStyles.ingredientDetails + ' mt-10 mb-15 mr-10 ml-10'}>
            <p className={ingredientDetailsStyles.title + " text text_type_main-large mt-2 mb-2"}>Детали ингредиента</p>
            <img className={ingredientDetailsStyles.image} src="https://code.s3.yandex.net/react/code/meat-01.png" alt=""/>
            <p className={ingredientDetailsStyles.name + " text text_type_main-medium mt-5"}>Биокотлета из марсианской Магнолии</p>
            <ul className={ingredientDetailsStyles.info + " text text_type_main-medium mt-8"}>
                <li className={ingredientDetailsStyles.infoItem}>
                    <p className={ingredientDetailsStyles.infoItemTitle + " text text_type_main-default text_color_inactive"}>Калории,ккал</p>
                    <p className={ingredientDetailsStyles.infoItemText + " text text_type_digits-default text_color_inactive mt-2"}>244,4</p>
                </li>
                <li className={ingredientDetailsStyles.infoItem + " ml-5"}>
                    <p className={ingredientDetailsStyles.infoItemTitle + " text text_type_main-default text_color_inactive"}>Белки, г</p>
                    <p className={ingredientDetailsStyles.infoItemText + " text text_type_digits-default text_color_inactive mt-2"}>12,2</p>
                </li>
                <li className={ingredientDetailsStyles.infoItem + " ml-5"}>
                    <p className={ingredientDetailsStyles.infoItemTitle + " text text_type_main-default text_color_inactive"}>Жиры, г</p>
                    <p className={ingredientDetailsStyles.infoItemText + " text text_type_digits-default text_color_inactive mt-2"}>17,2</p>
                </li>
                <li className={ingredientDetailsStyles.infoItem + " ml-5"}>
                    <p className={ingredientDetailsStyles.infoItemTitle + " text text_type_main-default text_color_inactive"}>Углеводы, г</p>
                    <p className={ingredientDetailsStyles.infoItemText + " text text_type_digits-default text_color_inactive mt-2"}>10,2</p>
                </li>
            </ul>
        </div>
    );
};

export default IngredientDetails;