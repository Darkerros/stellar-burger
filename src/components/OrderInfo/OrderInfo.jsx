import React, {useMemo} from 'react';
import styles from './OrderInfo.module.css'
import priceIcon from "../../images/icons/money-icon.png";
import OrderDetailsItem from "../OrderDetailsItem/OrderDetailsItem";
import {getDate, getStatus} from "../../utils/utils";
import {useIngredientsCountData} from "../../hooks/useIngredientsCountData";
import {useIngredientsData} from "../../hooks/useIngredientsData";
import {orderInfoType} from "../../types/orderInfoType";

const OrderInfo = ({orderInfo}) => {
    const {getIngredientPrice,getIngredientData} = useIngredientsData()
    const orderIngredients = useMemo(() => orderInfo.ingredients.map(ingredientId => getIngredientData(ingredientId)),[getIngredientData, orderInfo])
    const {getIngredientCount} = useIngredientsCountData(orderIngredients)
    const orderPrice = useMemo(() => orderInfo.ingredients.reduce((prev,ingredientId) => prev + getIngredientPrice(ingredientId),0),[getIngredientPrice,orderInfo])

    return (
        <div className={`${styles.container}`}>
            <p className={`text text_type_main-default text_color_primary ${styles.id}`}>#{orderInfo.number}</p>
            <p className={`text text_type_main-medium text_color_primary mt-10 ${styles.title}`}>{orderInfo.name}</p>
            <p className={orderInfo.status === "done" ? "text text_type_main-small mt-3 text_color_success" : orderInfo.status === "created" ? "text text_type_main-small mt-3 text_color_primary" : "text text_type_main-small mt-3 text_color_accent"}>{getStatus(orderInfo.status)}</p>
            <p className={"text text_type_main-medium text_color_primary mt-15"}>Состав:</p>
            <div className={`${styles.ingredientsContainer} mt-6 pr-4`}>
                {[...new Set(orderIngredients)].map(ingredient => <OrderDetailsItem key={ingredient._id} ingredient={ingredient} count={getIngredientCount(ingredient._id)}/>)}
            </div>
            <div className={`${styles.infoContainer} mt-10`}>
                <p className={"text text_type_main-small text_color_inactive"}>{getDate(orderInfo.createdAt)}</p>
                <div className={styles.price}>
                    <p className={"text text_type_digits-default text_color_primary"}>{orderPrice}</p>
                    <img src={priceIcon} alt="Иконка денег" className={styles.priceIcon}/>
                </div>
            </div>
        </div>
    );
};

OrderInfo.propTypes = {
    orderInfo: orderInfoType.isRequired
}

export default OrderInfo;