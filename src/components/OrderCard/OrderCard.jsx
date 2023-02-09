import React, {useCallback, useEffect, useMemo} from 'react';
import styles from './OrderCard.module.css'

import priceIcon from '../../images/icons/money-icon.png'
import {Link} from "react-router-dom";
import {useIngredientsData} from "../../hooks/useIngredientsData";
import {getDate, getStatus} from "../../utils/utils";

const OrderCard = ({elementPosition,orderInfo}) => {
    const ingredientsData = useIngredientsData()
    const price = useMemo(() => orderInfo.ingredients.reduce((a,ingredientId) => ingredientId ? a + ingredientsData.getIngredientPrice(ingredientId) : a,0),[ingredientsData, orderInfo.ingredients])

    const getLink = useCallback((linkPos) => linkPos === "feed" ? `/feed/${orderInfo._id}` : `/profile/orders/${orderInfo._id}`,[orderInfo])

    useEffect(() => console.log("card"+orderInfo._id),[])

    return (
        <Link to={getLink(elementPosition)} className={styles.link}>
            <div className={`pt-6 pb-6 pl-6 pr-6 ${styles.card}`}>
                <div className={styles.info}>
                    <p className={"text text_type_main-small text_color_primary"}>#{orderInfo.number}</p>
                    <p className={"text text_type_main-small text_color_inactive"}>{getDate(orderInfo.createdAt)}</p>
                </div>
                <p className={`text text_type_main-medium text_color_primary mt-6 ${styles.title}`}>{orderInfo.name}</p>
                {orderInfo.status && <p className={orderInfo.status === "done" ? "text text_type_main-small mt-2 text_color_success" : orderInfo.status === "created" ? "text text_type_main-small mt-2 text_color_primary" :  "text text_type_main-small mt-2 text_color_accent"}>{getStatus(orderInfo.status)}</p>}
                <div className={`${styles.info} mt-6`}>
                    <div className={styles.ingredientsContainer}>
                        {orderInfo.ingredients.map((ingredientId,index) => ingredientId && <img key={`${orderInfo._id}-${index}-${ingredientId}`} src={ingredientsData.getIngredientImage(ingredientId)} className={styles.ingredientImage} alt={"Картинка ингредиента"}/>)}
                    </div>
                    <div className={styles.price}>
                        <p className={"text text_type_main-small text_color_primary"}>{price}</p>
                        <img src={priceIcon} alt="Иконка денег" className={styles.priceIcon}/>
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default OrderCard;