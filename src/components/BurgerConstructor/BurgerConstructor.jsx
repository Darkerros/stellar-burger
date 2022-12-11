import React, {useMemo} from 'react';
import burgerConstructorStyles from './BurgerConstructor.module.css'
import BurgerComponents from "../BurgerComponents/BurgerComponents";
import CartInfo from "../CartInfo/CartInfo";
import {useSelector} from "react-redux";


const BurgerConstructor = () => {
    const cart = useSelector(state => state.cartReducer)
    const cartPrice = useMemo(() => {
        const bunPrice = cart.bun ? cart.bun.price * 2 : 0
        const ingredientPrice = cart.items.reduce((a,b) => a + b.price,0)
        return bunPrice + ingredientPrice
    }, [cart])

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
