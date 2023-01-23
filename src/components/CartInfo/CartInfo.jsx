import React, {useState} from 'react';
import {Button} from "@ya.praktikum/react-developer-burger-ui-components";
import moneyIcon from '../../images/icons/money-icon.png'
import cartInfoStyles from './CartInfo.module.css'
import PropTypes from "prop-types";
import Modal from "../Modal/Modal";
import OrderDetails from "../OrderDetails/OrderDetails";
import {useDispatch, useSelector} from "react-redux";
import {createOrderThunk} from "../../services/actions/createOrderThunk";
import useAuth from "../../hooks/useAuth";
import {useNavigate} from "react-router-dom";

const CartInfo = ({cartPrice}) => {
    const [orderModalState, setOrderModalState] = useState(false)
    const order = useSelector(state => state.orderReducer)
    const dispatch = useDispatch()
    const cart = useSelector(state => state.cartReducer)

    const user = useAuth()

    const handleCloseOrderModal = () => {
        setOrderModalState(false)
    }
    const handleOpenOrderModal = () => {
        setOrderModalState(true)
    }

    const navigate = useNavigate()

    const handleCreateOrder = () => {
        if (user.isAuth) {
            dispatch(createOrderThunk(cart, handleOpenOrderModal))
        }
        else {
            navigate('/login')
        }
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
                    <OrderDetails orderId={order.order.number}/>
                </Modal>
            }
        </div>
    );
};

CartInfo.propTypes = {cartPrice: PropTypes.number.isRequired}

export default CartInfo;
