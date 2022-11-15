import React from 'react';
import orderDetailsStyles from './OrderDetails.module.css'
import orderIcon from '../../images/icons/order-icon.png'

const OrderDetails = () => {
    return (
        <div className={orderDetailsStyles.orderDetails + " pt-30 pb-30 pl-25 pr-25"}>
            <p className={orderDetailsStyles.orderId + " text text_type_digits-large"}>034536</p>
            <p className={orderDetailsStyles.text + " text text_type_main-medium mt-8"}>идентификатор заказа</p>
            <img className={orderDetailsStyles.orderIcon + " mt-8"} src={orderIcon} alt="Иконка ордера"/>
            <p className={orderDetailsStyles.orderStatus + " text text_type_main-default mt-8"}>Ваш заказ начали готовить</p>
            <p className={orderDetailsStyles.orderStatus + " text text_type_main-default text_color_inactive"}>Дождитесь готовности на орбитальной станции</p>
        </div>
    );
};

export default OrderDetails;