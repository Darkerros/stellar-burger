import React from 'react';
import burgerConstructorStyles from './BurgerConstructor.module.css'
import BurgerComponents from "../BurgerComponents/BurgerComponents";
import CartInfo from "../CartInfo/CartInfo";
import cartItemType from "../../types/cartItemType";
import PropTypes from "prop-types";
import bunType from "../../types/bunType";

const BurgerConstructor = ({currentBun, cartItemsList, deleteIngridientFromCartFn, cartPrice}) => {
    return (
        <section className={burgerConstructorStyles.BurgerConstructor + " pl-10"}>
            <div className={burgerConstructorStyles.BurgerConstructor_content + " pl-4"}>
                <BurgerComponents currentBun={currentBun} cartItemsList={cartItemsList}
                                  deleteIngridientFromCartFn={deleteIngridientFromCartFn}/>
                <CartInfo cartPrice={cartPrice}/>
            </div>
        </section>
    );
};

BurgerConstructor.propTypes = {
    currentBun: bunType.isRequired,
    cartItemsList: PropTypes.arrayOf(cartItemType),
    deleteIngridientFromCartFn: PropTypes.func.isRequired,
    cartPrice: PropTypes.number,
}

export default BurgerConstructor;