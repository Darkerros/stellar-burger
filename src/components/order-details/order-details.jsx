import React from 'react';
import orderDetailsStyles from './order-details.module.css'
import orderIcon from '../../images/icons/order-icon.png'
import PropTypes from "prop-types";

const OrderDetails = ({orderId}) => {
    return (
        <div className={orderDetailsStyles.orderDetails + " pt-30 pb-30 pl-25 pr-25"}>
            <p className={orderDetailsStyles.orderId + " text text_type_digits-large"}>{orderId}</p>
            <p className={orderDetailsStyles.text + " text text_type_main-medium mt-8"}>идентификатор заказа</p>
            <img className={orderDetailsStyles.orderIcon + " mt-15"} src={orderIcon} alt="Иконка ордера"/>
            <p className={orderDetailsStyles.orderStatus + " text text_type_main-default mt-15"}>Ваш заказ начали готовить</p>
            <p className={orderDetailsStyles.orderStatus + " text text_type_main-default text_color_inactive mt-2"}>Дождитесь готовности на орбитальной станции</p>
        </div>
    );
};

OrderDetails.propTypes = {orderId: PropTypes.number.isRequired}

export default OrderDetails;
