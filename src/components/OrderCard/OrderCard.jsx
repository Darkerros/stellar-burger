import React from 'react';
import styles from './OrderCard.module.css'

import priceIcon from '../../images/icons/money-icon.png'

const OrderCard = ({id,date,title,ingredients,price,getIngredientImageFn,status}) => {
    const getStatus = (status) => {
        switch (status) {

            case "created":
                return 'Создан'

            case "pending":
                return 'Готовится'

            case "done":
                return 'Выполнен'

            default:
                return "done"
        }
    }


    return (
        <div className={`pt-6 pb-6 pl-6 pr-6 ${styles.card}`}>
            <div className={styles.info}>
                <p className={"text text_type_main-small text_color_primary"}>{id}</p>
                <p className={"text text_type_main-small text_color_inactive"}>{date}</p>
            </div>
            <p className={`text text_type_main-medium text_color_primary mt-6 ${styles.title}`}>{title}</p>
            {status && <p className={status === "done" ? "text text_type_main-small mt-2 text_color_success" : status === "created" ? "text text_type_main-small mt-2 text_color_primary" :  "text text_type_main-small mt-2 text_color_accent"}>{getStatus(status)}</p>}
            <div className={`${styles.info} mt-6`}>
                <div className={styles.ingredientsContainer}>
                    {ingredients.map((ingredientId,index) => ingredientId && <img key={`${id}-${index}-${ingredientId}`} src={getIngredientImageFn(ingredientId)} className={styles.ingredientImage} alt={"Картинка ингредиента"}/>)}
                </div>
                <div className={styles.price}>
                    <p className={"text text_type_main-small text_color_primary"}>{price}</p>
                    <img src={priceIcon} alt="Иконка денег" className={styles.priceIcon}/>
                </div>
            </div>
        </div>
    );
};

export default OrderCard;