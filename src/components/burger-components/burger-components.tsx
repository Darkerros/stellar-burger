import React from 'react';
import burgerComponentStyles from './burger-components.module.css'
import BurgerComponent from "../burger-component/burger-component";
import {useDrop} from "react-dnd";
import {addCartItemAction, deleteCartItemAction, setBunAction} from "../../services/actions/cart-action-types";
import {superCartReducerSelector} from "../../services/selectors/cart-selectors";
import {ICartItem} from "../../types/data/cart-item-interface";
import {IIngredient} from "../../types/data/ingredient-type";
import {IChoseBun} from "../../types/data/chose-bun-interface";
import {useAppSelector} from "../../hooks/use-app-selector";
import {useAppDispatch} from "../../hooks/use-app-dispatch";
import BunBurgerComponent from "../bun-burger-component/bun-burger-component";


const BurgerComponents = () => {
    const dispatch = useAppDispatch()
    const cart = useAppSelector(superCartReducerSelector)

    const deleteCartItem = (cartId:ICartItem["cartId"]) => dispatch(deleteCartItemAction(cartId))
    const [,dropContainerRef] = useDrop({
        accept: "ingredient",
        drop(item:IIngredient) {
            dropHandler(item)
        }
    })

    const dropHandler = (ingredient: IIngredient) => ingredient.type === "bun" ? dispatch(setBunAction(ingredient)) : dispatch(addCartItemAction(ingredient))

    const setNamePos = (position: ("top" | "bottom"),ingredient: IChoseBun) => {
        const pos = position === "top" ? " (верх)" : " (низ)"
        return {...ingredient,name: ingredient.name + pos}
    }

    return (
        <div className={burgerComponentStyles.BurgerComponents + " mt-25"} ref={dropContainerRef}>
            <div className={burgerComponentStyles.BurgerComponents__locked}>
                <BunBurgerComponent cartIngredient={cart.bun ? setNamePos("top",cart.bun) : ({name: "Выберите булку",price: 0, image: null})} type={"top"}/>
            </div>
            <ul className={burgerComponentStyles.BurgerComponents__unlocked + " pr-2"}>
                {cart.items &&
                    cart.items.map((ingredient,index) =>
                        <BurgerComponent cartIngredient={ingredient}
                                         key={ingredient.cartId}
                                         isLocked={false}
                                         dragAndDropEnabled={true}
                                         type={undefined}
                                         handleClose={() => deleteCartItem(ingredient.cartId)} index={index}/>)}
            </ul>
            <div className={burgerComponentStyles.BurgerComponents__locked}>
                <BunBurgerComponent cartIngredient={cart.bun ? setNamePos("bottom",cart.bun) : ({name: "Выберите булку",price: 0, image: null})} type={"bottom"}/>
            </div>
        </div>
    );
};

export default BurgerComponents;
