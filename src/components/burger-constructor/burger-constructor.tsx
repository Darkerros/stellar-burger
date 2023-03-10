import React, {useMemo} from 'react';
import burgerConstructorStyles from './burger-constructor.module.css'
import BurgerComponents from "../burger-components/burger-components";
import CartInfo from "../cart-info/cart-info";
import {useSelector} from "react-redux";
import {superCartReducerSelector} from "../../services/selectors/cart-selectors";


const BurgerConstructor = () => {
    const cart = useSelector(superCartReducerSelector)
    const cartPrice = useMemo(() => cart.items.reduce((prevPrice,cartItem) => prevPrice + cartItem.price,0) + (cart.bun ? cart.bun.price * 2 : 0), [cart])

    return (
        <section className={burgerConstructorStyles.BurgerConstructor + " pl-10"}>
            <div className={burgerConstructorStyles.BurgerConstructor_content + " pl-4"}>
                <BurgerComponents />
                <CartInfo cartPrice={cartPrice}/>
            </div>
        </section>
    );
};


export default BurgerConstructor;
