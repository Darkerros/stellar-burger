import React from 'react';
import burgerComponentStyles from './BurgerComponents.module.css'
import BurgerComponent from "../BurgerComponent/BurgerComponent";
import {deleteCartItemAction} from "../../services/reducers/cartReducer";
import {useDispatch, useSelector} from "react-redux";


const BurgerComponents = () => {
    const cart = useSelector(state => state.cartReducer)
    const dispatch = useDispatch()
    const deleteCartItem = (cartId) => dispatch(deleteCartItemAction(cartId))

    const setNamePos = (position,ingredient) => {
        const pos = position === "top" ? " (верх)" : " (низ)"
        return {...ingredient,name: ingredient.name + pos}
    }

    return (
        <div className={burgerComponentStyles.BurgerComponents + " mt-25"}>
            <div className={burgerComponentStyles.BurgerComponents__locked}>
                <BurgerComponent cartIngredient={cart.bun ? setNamePos("top",cart.bun) : ({name: "Выберите булку",price: 0})}
                                 isLocked={true}
                                 dragAndDropEnabled={false}
                                 type={'top'}
                                 handleClose={() => 1}/>
            </div>
            <ul className={burgerComponentStyles.BurgerComponents__unlocked + " pr-2"}>
                {cart.items &&
                    cart.items.map((ingredient) =>
                        <BurgerComponent cartIngredient={ingredient}
                                         key={ingredient.cartId}
                                         isLocked={false}
                                         dragAndDropEnabled={true}
                                         type={"centre"}
                                         handleClose={() => deleteCartItem(ingredient.cartId)}/>)}
            </ul>
            <div className={burgerComponentStyles.BurgerComponents__locked}>
                <BurgerComponent cartIngredient={cart.bun ? setNamePos("bottom",cart.bun) : ({name: "Выберите булку",price: 0})}
                                 isLocked={true}
                                 dragAndDropEnabled={false}
                                 type={'bottom'}
                                 handleClose={() => 1}/>
            </div>
        </div>
    );
};

export default BurgerComponents;
