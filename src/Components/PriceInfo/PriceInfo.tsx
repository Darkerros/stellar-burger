import React from 'react';
import Price from "../Price/Price";
import {Button} from "@ya.praktikum/react-developer-burger-ui-components";
import priceInfoStyles from './PriceInfo.module.css'
// @ts-ignore
const PriceInfo = ({cartPrice}) => {
    return (
        <div className={priceInfoStyles.PriceInfo + ' mt-10'}>
            <Price>{cartPrice}</Price>
            <Button type="primary" size="large" htmlType={'button'}>Оформить заказ</Button>
        </div>
    );
};

export default PriceInfo;