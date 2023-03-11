import React, {FC} from 'react';
import styles from './orders-stat.module.css'

interface IProps {
    className: string;
    title: string;
    count: number;
}

const OrdersStat:FC<IProps> = ({className, title, count}) => {
    return (
        <div className={className}>
            <p className={`text text_type_main-medium text_color_primary ${styles.shadow}`}>{title}</p>
            <p className={`text text_type_digits-large text_color_primary ${styles.shadow}`}>{count}</p>
        </div>
    );
};

export default OrdersStat;