import React, {useRef} from 'react';
import burgerComponentStyles from './BurgerComponent.module.css'
import {ConstructorElement, DragIcon} from "@ya.praktikum/react-developer-burger-ui-components";
import PropTypes from "prop-types";
import cartItemType from "../../types/cartItemType";
import ingredientType from "../../types/ingredientType";

import bunIcon from '../../images/icons/bun-icon.png'
import choseBunType from "../../types/choseBunType";
import {useDrag, useDrop} from "react-dnd";
import {useDispatch} from "react-redux";
import {sortCartAction} from "../../services/actions/cartActions";

const BurgerComponent = ({dragAndDropEnabled, cartIngredient, isLocked, type, handleClose,index}) => {
    const dispatch = useDispatch()
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
           if (index !== item.index) {
               dispatch(sortCartAction(item.index,index))
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

BurgerComponent.propTypes = {
    dragAndDropEnabled: PropTypes.bool.isRequired,
    cartIngredient: PropTypes.oneOfType([cartItemType, ingredientType,choseBunType]),
    isLocked: PropTypes.bool.isRequired,
    type: PropTypes.oneOf(['top', 'bottom', 'centre']).isRequired,
    handleClose: PropTypes.func.isRequired
}

export default BurgerComponent;

