import React, {useState} from 'react';
import {Button} from "@ya.praktikum/react-developer-burger-ui-components";
import moneyIcon from '../../images/icons/money-icon.png'
import cartInfoStyles from './CartInfo.module.css'
import PropTypes from "prop-types";
import Modal from "../Modal/Modal";
import OrderDetails from "../OrderDetails/OrderDetails";
import api from "../../api/api";
import {orderGetAction, orderLoadingAction, orderLoadingFailAction} from "../../services/reducers/orderReducer";
import {useDispatch, useSelector} from "react-redux";

const CartInfo = ({cartPrice}) => {
    const [orderModalState, setOrderModalState] = useState(false)
    const order = useSelector(state => state.orderReducer)
    const dispatch = useDispatch()
    const cart = useSelector(state => state.cartReducer)
    const handleCloseOrderModal = () => {
        setOrderModalState(false)
    }

    const handleOpenOrderModal = () => {
        setOrderModalState(true)
    }

    const createOrder = () => (dispatch) => {
        const cartItemId = cart.bun ? [cart.bun._id,...cart.items.map(item => item._id)] : []
        dispatch(orderLoadingAction())
        api.createOrder(cartItemId)
            .then(data => dispatch(orderGetAction(data.order)))
            .then(() => handleOpenOrderModal())
            .catch((error) => dispatch(orderLoadingFailAction(error)))
    }

    const handleCreateOrder = ()  => {
        dispatch(createOrder())
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
                onClick={handleCreateOrder}
            >
                Оформить заказ
            </Button>
            {orderModalState &&
                <Modal handleClose={handleCloseOrderModal}>
                    <OrderDetails orderId={order.order.orderId}/>
                </Modal>
            }
        </div>
    );
};

CartInfo.propTypes = {cartPrice: PropTypes.number.isRequired}

export default CartInfo;
