import React from 'react';
import styles from './orders-stat.module.css'

const OrdersStat = ({className, title, count}) => {
    return (
        <div className={className}>
            <p className={`text text_type_main-medium text_color_primary ${styles.shadow}`}>{title}</p>
            <p className={`text text_type_digits-large text_color_primary ${styles.shadow}`}>{count}</p>
        </div>
    );
};

export default OrdersStat;