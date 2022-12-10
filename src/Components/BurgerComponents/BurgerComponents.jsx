import React, {useContext} from 'react';
import burgerComponentStyles from './BurgerComponents.module.css'
import BurgerComponent from "../BurgerComponent/BurgerComponent";
import CartContext from "../../context/CartContext";
import {deleteCartItemAction} from "../../services/reducers/cartReducer";


const BurgerComponents = () => {
    const {cart,cartDispatch} = useContext(CartContext)
    const deleteCartItem = (cartId) => cartDispatch(deleteCartItemAction(cartId))

    const setNamePos = (position,ingredient) => {
        const pos = position === "top" ? " (верх)" : " (низ)"
        return {...ingredient,name: ingredient.name + pos}
    }

    return (
        <div className={burgerComponentStyles.BurgerComponents + " mt-25"}>
            <div className={burgerComponentStyles.BurgerComponents__locked}>
                {cart.bun &&
                    <BurgerComponent cartIngredient={setNamePos("top",cart.bun)}
                                     isLocked={true}
                                     dragAndDropEnabled={false}
                                     type={'top'}
                                     handleClose={() => 1}/>}
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
                {cart.bun && <BurgerComponent cartIngredient={setNamePos("bottom",cart.bun)}
                                              isLocked={true}
                                              dragAndDropEnabled={false}
                                              type={'bottom'}
                                              handleClose={() => 1}/>}
            </div>
        </div>
    );
};

export default BurgerComponents;
