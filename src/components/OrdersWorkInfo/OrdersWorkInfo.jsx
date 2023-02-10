import React from 'react';
import styles from './OrdersWorkInfo.module.css'
import PropTypes from "prop-types";


const OrdersWorkInfo = ({completeOrdersId,inWorkOrdersId}) => {
    return (
        <div className={`${styles.ordersWorkInfo}`}>
            <div className={styles.completeContainer}>
                <p className={'text text_type_main-medium text_color_primary'}>Готовы:</p>
                <ul className={styles.flexContainer}>
                    {completeOrdersId.map(orderId => <li className={"text text_type_main-medium text_color_success"} key={orderId}>{orderId}</li>)}
                </ul>
            </div>
            <div className={styles.workContainer}>
                <p className={'text text_type_main-medium text_color_primary'}>В работе:</p>
                <ul className={`${styles.flexContainer}`}>
                    {inWorkOrdersId.map(orderId => <li className={"text text_type_main-medium text_color_primary"} key={orderId}>{orderId}</li>)}
                </ul>
            </div>
        </div>
    );
};

OrdersWorkInfo.propTypes = {
    completeOrdersId: PropTypes.arrayOf(PropTypes.number.isRequired),
    inWorkOrdersId: PropTypes.arrayOf(PropTypes.number.isRequired)
}

export default OrdersWorkInfo;