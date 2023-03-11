import React, {FC} from 'react';
import styles from './orders-work-info.module.css'

interface IProps {
    completeOrdersId: number[];
    inWorkOrdersId: number[];
}

const OrdersWorkInfo:FC<IProps> = ({completeOrdersId,inWorkOrdersId}) => {
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

export default OrdersWorkInfo;