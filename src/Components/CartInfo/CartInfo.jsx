import React, {useContext, useState} from 'react';
import {Button} from "@ya.praktikum/react-developer-burger-ui-components";
import moneyIcon from '../../images/icons/money-icon.png'
import cartInfoStyles from './CartInfo.module.css'
import PropTypes from "prop-types";
import Modal from "../Modal/Modal";
import OrderDetails from "../OrderDetails/OrderDetails";
import CartContext from "../../context/CartContext";
import api from "../../api/api";

const CartInfo = ({cartPrice}) => {
    const [orderModalState, setOrderModalState] = useState(false)
    const {orderId,setOrderId} = useContext(CartContext)
    const {cart} = useContext(CartContext)
    const handleCloseOrderModal = () => {
        setOrderModalState(false)
    }

    const handleOpenOrderModal = () => {
        setOrderModalState(true)
    }

    const createOrder = () => {
        const cartItemId = [cart.bun._id,...cart.items.map(item => item._id)]
        api.createOrder(cartItemId).then(data => setOrderId(data.order.number)).then(() => handleOpenOrderModal())
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
                onClick={createOrder}
            >
                Оформить заказ
            </Button>
            {orderModalState &&
                <Modal handleClose={handleCloseOrderModal}>
                    <OrderDetails orderId={orderId}/>
                </Modal>
            }
        </div>
    );
};

CartInfo.propTypes = {cartPrice: PropTypes.number.isRequired}

export default CartInfo;
