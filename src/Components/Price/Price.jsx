import {CurrencyIcon} from '@ya.praktikum/react-developer-burger-ui-components';
import React from 'react';
import priceStyles from './Price.module.css'
import PropTypes from "prop-types";
// @ts-ignore
const Price = ({children}) => {
    return (
        <span className={priceStyles.Price + ' mt-1'}>
            <p className={'text text_type_digits-default mr-2'}>{children}</p>
            <CurrencyIcon type='primary'/>
        </span>
    );
};

Price.propTypes = {children: PropTypes.number.isRequired}

export default Price;
