import React, {useEffect, useMemo, useReducer, useState} from 'react';
import appMainStyles from './AppMain.module.css'
import BurgerIngredients from "../BurgerIngredients/BurgerIngredients";
import api from "../../api/api";
import BurgerConstructor from "../BurgerConstructor/BurgerConstructor";
import Loading from "../Loading/Loading";
import {getRandomItemIndex} from "../../utils/utils";
import cartReducer, {setBunAction, setCartAction} from "../../services/reducers/cartReducer";
import CartContext from "../../context/CartContext";
import IngredientsContext from "../../context/IngredientsContext";

const AppMain = () => {
    const [allIngredients, setAllIngredients] = useState([])
    const [cart, cartDispatch] = useReducer(cartReducer, {bun: undefined, items: []})
    const [orderId,setOrderId] = useState(undefined)

    useEffect(() => {
            api.getrIngredients()
                .then(ingredientsList => setAllIngredients(ingredientsList.data))
                .catch(error => alert(error.message))
        }, [])
    useEffect(() => {
            const ingredientList = allIngredients.filter(ingredient => ingredient.type !== 'bun')
            const cartItems = ingredientList.slice(0, getRandomItemIndex(ingredientList))
            const cartWithKey = cartItems.map((item, index) => ({cartId: Date.now() + 100 * index, ...item})) || []
            cartDispatch(setCartAction(cartWithKey))
        }, [allIngredients])

    const groupedIngredients = useMemo(() => {
            const groupIngredients = [
                {type: 'bun', name: 'Булки', ingredientsList: []},
                {type: "sauce", name: 'Соусы', ingredientsList: []},
                {type: "main", name: 'Главное', ingredientsList: []}
            ]
            if (allIngredients.length) {
                allIngredients.forEach(ingredient => groupIngredients.forEach(group => {
                    if (ingredient.type === group.type) {
                        group.ingredientsList.push(ingredient)
                    }
                }))
                if (groupIngredients[0].ingredientsList[0]) {
                    cartDispatch(setBunAction(groupIngredients[0].ingredientsList[0]))
                }
            }
            return groupIngredients
        }, [allIngredients])
    const ingredientsCounts = useMemo(() => {
            const ingredientsCount = {}
            allIngredients.forEach((ingredient) => ingredientsCount[ingredient._id] = cart.items.filter(cartItem => cartItem._id === ingredient._id).length)
            // eslint-disable-next-line no-unused-expressions
            cart.bun ? ingredientsCount[cart.bun._id] = 1 : false
            return ingredientsCount
        }, [allIngredients, cart])
    const getIngredientCount = (ingredientId) => ingredientsCounts[ingredientId]


return (
    allIngredients.length === 0
    ?
        <Loading/>
    :
        <main className={appMainStyles.AppMain} >
            <IngredientsContext.Provider value={{getIngredientCount, groupedIngredients}}>
                <BurgerIngredients/>
            </IngredientsContext.Provider>
            <CartContext.Provider value={{cart: cart, cartDispatch:cartDispatch,orderId:orderId,setOrderId:setOrderId}}>
                <BurgerConstructor/>
            </CartContext.Provider>
        </main>
        );
    }
;


export default AppMain;
