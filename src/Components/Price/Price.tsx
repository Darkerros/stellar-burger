import {CurrencyIcon} from '@ya.praktikum/react-developer-burger-ui-components';
import React from 'react';
import priceStyles from './Price.module.css'
// @ts-ignore
const Price = ({children}) => {
    return (
        <span className={priceStyles.Price}>
            <p className={'text text_type_main-medium mr-2 mt-1'}>{children}</p>
            <CurrencyIcon type='primary'/>
        </span>
    );
};

export default Price;