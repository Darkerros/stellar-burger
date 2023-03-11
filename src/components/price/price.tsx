import {CurrencyIcon} from '@ya.praktikum/react-developer-burger-ui-components';
import React, {FC} from 'react';
import priceStyles from './price.module.css'

interface IProps {
    children: number;
}

const Price:FC<IProps> = ({children}) => {
    return (
        <span className={priceStyles.Price + ' mt-1'}>
            <p className={'text text_type_digits-default mr-2'}>{children}</p>
            <CurrencyIcon type='primary'/>
        </span>
    );
};

export default Price;
