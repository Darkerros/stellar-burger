import React, {useEffect, useMemo, useState} from 'react';
import appMainStyles from './AppMain.module.css'
import BurgerIngredients from "../BurgerIngredients/BurgerIngredients";

import api from "../../api/Api";
import BurgerConstructor from "../BurgerConstructor/BurgerConstructor";

// @ts-ignore
const AppMain = () => {
        const [allIngredients, setAllIngredients] = useState([])
        const [cart, setCart] = useState({})
        const [bun, setBun] = useState({})
        //ingredientId: count

        useEffect(() => {
            api.getrIngredients()
                .then(ingredientsList => {
                    setAllIngredients(ingredientsList.data)
                })
                .catch()
        }, [])

        const groupedIngredients = useMemo(() => {
            const groupIngredients = [{type: 'bun', name: 'Булки', ingredientsList: []}, {
                type: 'main',
                name: 'Главное',
                ingredientsList: []
            }, {type: 'sauce', name: 'Соусы', ingredientsList: []}]
            allIngredients.forEach(ingredient => groupIngredients.forEach(group => {
                // @ts-ignore
                if (ingredient.type === group.type) {
                    group.ingredientsList.push(ingredient)
                }
            }))
            if (groupIngredients[0].ingredientsList[0]) {
                setBun(groupIngredients[0].ingredientsList[0])
            }
            return groupIngredients
        }, [allIngredients])

        const cartItemList = useMemo(() => {
            const cartItems = []
            for (const key in cart) {
                // @ts-ignore
                cartItems.push({...cart[key], cartItemId: key})
            }
            return cartItems
        }, [cart])

        const cartPrice = useMemo(() => {
            // @ts-ignore
            return  cartItemList.length ?  cartItemList.map(cartItem => cartItem.price).reduce((a,b)=>a+b, 0) + bun.price : bun.price
        },[cartItemList,bun])

        const ingredientsCounts = useMemo(() => {
            const ingredientsCount = {}
            allIngredients.forEach(ingredient => {
                // @ts-ignore
                ingredientsCount[ingredient._id] = cartItemList.filter(cartItem => cartItem._id === ingredient._id).length
            })
            // @ts-ignore
            ingredientsCount[bun._id] = 1
            return ingredientsCount
        }, [allIngredients, bun, cartItemList])
        // @ts-ignore
        const getIngredientCount = (ingredientId) => ingredientsCounts[ingredientId]
        // @ts-ignore
        const addIngredientToCart = (ingredient) => {
            if (ingredient.type === 'bun'){
                setBun(ingredient)
            }
            else {
                const currentCart = {...cart}
                // @ts-ignore
                currentCart[Date.now()] = ingredient
                setCart(currentCart)
            }
        }

        // @ts-ignore
        const deleteIngridientFromCart = (cartItemId) => {
                const cartItems = {...cart}
                // @ts-ignore
                delete cartItems[cartItemId]
                setCart(cartItems)
        }

        return (
            <main className={appMainStyles.AppMain}>
                <BurgerIngredients getIngredientCountFn={getIngredientCount} groupedIngredients={groupedIngredients} addIngredientsToCartFn={addIngredientToCart}/>
                <BurgerConstructor cartItemsList={cartItemList} currentBun={bun} deleteIngridientFromCartFn={deleteIngridientFromCart} cartPrice={cartPrice}/>
            </main>
        );
    }
;

export default AppMain;