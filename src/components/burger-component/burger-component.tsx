import React, {FC, useRef} from 'react';
import burgerComponentStyles from './burger-component.module.css'
import {ConstructorElement, DragIcon} from "@ya.praktikum/react-developer-burger-ui-components";

import bunIcon from '../../images/icons/bun-icon.png'
import {useDrag, useDrop} from "react-dnd";
import {sortCartAction} from "../../services/actions/cart-action-types";
import {ICartItem} from "../../types/data/cart-item-interface";
import {useAppDispatch} from "../../hooks/use-app-dispatch";


interface IProps {
    dragAndDropEnabled: boolean;
    cartIngredient: ICartItem;
    isLocked: boolean;
    handleClose: () => void;
    index?: number;
    type: "top" | "bottom" | undefined
}

const BurgerComponent:FC<IProps> = ({dragAndDropEnabled, cartIngredient, isLocked, type, handleClose,index}) => {
    const dispatch = useAppDispatch()
    const elemType = dragAndDropEnabled ? "cartItem" : 'unDragItem'

    const mainRef = useRef(null)

    const [{isDrag},dragRef] =  useDrag({
        type: elemType,
        item: {index:index},
        collect: monitor => ({isDrag: elemType === "cartItem" ? monitor.isDragging() : false})
    })

    const [,dropRef] = useDrop({
        accept: "cartItem",
        hover(item) {
           // @ts-ignore
            if (index !== item.index) {
               // @ts-ignore
                dispatch(sortCartAction(item.index,index))
               // @ts-ignore
                item.index = index
           }
        }
    })

    dragAndDropEnabled && dragRef(dropRef(mainRef))



    return (
        <li className={burgerComponentStyles.BurgerComponent + ` mb-4 ${isDrag && burgerComponentStyles.BurgerComponentHover}`} ref={mainRef} >
            {dragAndDropEnabled && <DragIcon type={'primary'}/>}
            <ConstructorElement text={cartIngredient.name}
                                thumbnail={cartIngredient.image ? cartIngredient.image : bunIcon}
                                price={cartIngredient.price}
                                isLocked={isLocked} type={type}
                                extraClass={dragAndDropEnabled ? 'ml-2' : 'ml-8'}
                                handleClose={handleClose}/>
        </li>
    );
};


export default BurgerComponent;

