import React, {useState} from 'react';
import {Button} from "@ya.praktikum/react-developer-burger-ui-components";
import moneyIcon from '../../images/icons/money-icon.png'
import cartInfoStyles from './CartInfo.module.css'
import PropTypes from "prop-types";
import Modal from "../Modal/Modal";
import OrderDetails from "../OrderDetails/OrderDetails";
const CartInfo = ({cartPrice}) => {
    const [orderModalState, setOrderModalState] = useState(false)

    const handleCloseOrderModal = () => {
        setOrderModalState(false)
    }

    const handleOpenOrderModal = () => {
        setOrderModalState(true)
    }


    return (
        <div className={cartInfoStyles.CartInfo + ' mt-10 mr-4'}>
            <div className={cartInfoStyles.CartInfo__price}>
                <p className={'text text_type_digits-medium mr-2'}>{cartPrice}</p>
                <img className={cartInfoStyles.CartInfo__priceIcon} src={moneyIcon} alt="Иконка денег"/>
            </div>
            <Button
                type="primary"
                size="large"
                htmlType={'button'}
                onClick={handleOpenOrderModal}
            >
                Оформить заказ
            </Button>
            {orderModalState &&
                <Modal handleClose={handleCloseOrderModal}>
                    <OrderDetails orderId="034536"/>
                </Modal>
            }
        </div>
    );
};

CartInfo.propTypes = {cartPrice: PropTypes.number}

export default CartInfo;