import React, {useMemo} from 'react';
import burgerConstructorStyles from './burger-constructor.module.css'
import BurgerComponents from "../burger-components/burger-components";
import CartInfo from "../cart-info/cart-info";
import {superCartReducerSelector} from "../../services/selectors/cart-selectors";
import {useAppSelector} from "../../hooks/use-app-selector";


const BurgerConstructor = () => {
    const cart = useAppSelector(superCartReducerSelector)
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
