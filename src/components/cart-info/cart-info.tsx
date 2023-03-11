import React, {FC, useState} from 'react';
import {Button} from "@ya.praktikum/react-developer-burger-ui-components";
import moneyIcon from '../../images/icons/money-icon.png'
import cartInfoStyles from './cart-info.module.css'
import PropTypes from "prop-types";
import Modal from "../modal/modal";
import OrderDetails from "../order-details/order-details";
import {createOrderThunk} from "../../services/thunks/create-order-thunk";
import useAuth from "../../hooks/use-auth";
import {useNavigate} from "react-router-dom";
import {superCartReducerSelector} from "../../services/selectors/cart-selectors";
import {superOrderReducerSelector} from "../../services/selectors/order-selectors";
import {useAppDispatch} from "../../hooks/use-app-dispatch";
import {useAppSelector} from "../../hooks/use-app-selector";
import {tokenStorage} from "../../utils/utils";

interface IProps {
    cartPrice: number;
}

const CartInfo:FC<IProps> = ({cartPrice}) => {
    const user = useAuth()
    const navigate = useNavigate()
    const dispatch = useAppDispatch()

    const cart = useAppSelector(superCartReducerSelector)
    const order = useAppSelector(superOrderReducerSelector)

    const [orderModalState, setOrderModalState] = useState(false)


    const handleCloseOrderModal = () => {
        setOrderModalState(false)
    }
    const handleOpenOrderModal = () => {
        setOrderModalState(true)
    }


    const handleCreateOrder = () => {
        if (user.isAuth) {
            dispatch(createOrderThunk(cart, handleOpenOrderModal,tokenStorage.getToken()))
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
                disabled={!(cart.items.length && cart.bun)}
            >
                Оформить заказ
            </Button>
            {orderModalState && order.order &&
                <Modal handleClose={handleCloseOrderModal}>
                    <OrderDetails orderId={order.order.number}/>
                </Modal>
            }
        </div>
    );
};

CartInfo.propTypes = {cartPrice: PropTypes.number.isRequired}

export default CartInfo;
