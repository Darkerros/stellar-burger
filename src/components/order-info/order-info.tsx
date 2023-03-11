import React, {FC, useMemo} from 'react';
import styles from './order-info.module.css'
import priceIcon from "../../images/icons/money-icon.png";
import OrderDetailsItem from "../order-details-item/order-details-item";
import {createUniqueArray, getDate, getStatus} from "../../utils/utils";
import {useIngredientsCountData} from "../../hooks/use-ingredients-count-data";
import {useIngredientsData} from "../../hooks/use-ingredients-data";
import {IOrderInfo} from "../../types/data/order-info-iterface";
import {IIngredient} from "../../types/data/ingredient-type";

interface IProps {
    orderInfo: IOrderInfo;
}

const OrderInfo:FC<IProps> = ({orderInfo}) => {
    const {getIngredientPrice,getIngredientData} = useIngredientsData()
    const orderIngredients:IIngredient[] = useMemo(() => orderInfo.ingredients.map(ingredientId => getIngredientData(ingredientId)),[getIngredientData, orderInfo])
    const {getIngredientCount} = useIngredientsCountData(orderIngredients)
    const orderPrice = useMemo(() => orderInfo.ingredients.reduce((prev,ingredientId) => prev + getIngredientPrice(ingredientId),0),[getIngredientPrice,orderInfo])


    return (
        <div className={`${styles.container} pt-15 pb-15`}>
            <p className={`text text_type_main-default text_color_primary ${styles.id}`}>#{orderInfo.number}</p>
            <p className={`text text_type_main-medium text_color_primary mt-10 ${styles.title}`}>{orderInfo.name}</p>
            <p className={orderInfo.status === "done" ? "text text_type_main-small mt-3 text_color_success" : orderInfo.status === "created" ? "text text_type_main-small mt-3 text_color_primary" : "text text_type_main-small mt-3 text_color_accent"}>{getStatus(orderInfo.status)}</p>
            <p className={"text text_type_main-medium text_color_primary mt-15"}>Состав:</p>
            <div className={`${styles.ingredientsContainer} mt-6 pr-4`}>
                {createUniqueArray(orderIngredients).map(ingredient => <OrderDetailsItem key={ingredient._id} ingredient={ingredient} count={getIngredientCount(ingredient._id)}/>)}
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
export default OrderInfo;