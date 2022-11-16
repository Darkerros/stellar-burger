import React, {useEffect, useMemo, useState} from 'react';
import appMainStyles from './AppMain.module.css'
import BurgerIngredients from "../BurgerIngredients/BurgerIngredients";

import api from "../../api/Api";
import BurgerConstructor from "../BurgerConstructor/BurgerConstructor";
import Loading from "../Loading/Loading";
import {keyboard} from "@testing-library/user-event/dist/keyboard";

// @ts-ignore
// @ts-ignore
// @ts-ignore
const AppMain = () => {
        const [allIngredients, setAllIngredients] = useState([])
        const [cart, setCart] = useState({})
        const [bun, setBun] = useState({
            "_id": "60666c42cc7b410027a1a9b1",
            "name": "Краторная булка N-200i",
            "type": "bun",
            "proteins": 80,
            "fat": 24,
            "carbohydrates": 53,
            "calories": 420,
            "price": 1255,
            "image": "https://code.s3.yandex.net/react/code/bun-02.png",
            "image_mobile": "https://code.s3.yandex.net/react/code/bun-02-mobile.png",
            "image_large": "https://code.s3.yandex.net/react/code/bun-02-large.png",
            "__v": 0
        })

        useEffect(() => {
            api.getrIngredients()
                .then(ingredientsList => {
                    setTimeout(() => setAllIngredients(ingredientsList.data), 1000)
                })
                .catch()
        }, [])

        const groupedIngredients = useMemo(() => {
            const groupIngredients = [
                {type: 'bun', name: 'Булки', ingredientsList: []},
                {type: "sauce", name: 'Соусы', ingredientsList: []},
                {type: "main", name: 'Главное', ingredientsList: []}
            ]
            // @ts-ignore
            allIngredients.forEach(ingredient => groupIngredients.forEach(group => {
                // @ts-ignore
                if (ingredient.type === group.type) {
                    // @ts-ignore
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
            return cartItemList.length ? cartItemList.map(cartItem => cartItem.price).reduce((a, b) => a + b, 0) + bun.price : bun.price
        }, [cartItemList, bun])

        const ingredientsCounts = useMemo(() => {
            const ingredientsCount = {}
            // @ts-ignore
            allIngredients.forEach((ingredient) => {
                // @ts-ignore
                ingredientsCount[ingredient._id] = cartItemList.filter(cartItem => cartItem._id === ingredient._id).length
            })
            // @ts-ignore
            ingredientsCount[bun._id] = 1
            return ingredientsCount
        }, [allIngredients, bun, cartItemList])

        const getRandomIngredient = () => allIngredients[getRandomIngredientIndex()]
        const getRandomIngredientIndex = () => Math.floor(Math.random() * allIngredients.length)

        // @ts-ignore
        const getIngredientCount = (ingredientId) => ingredientsCounts[ingredientId]

        // @ts-ignore
        function addIngredientToCart(ingredient) {
            if (ingredient.type === 'bun') {
                setBun(ingredient)
            } else {
                const key = Date.now()
                const cartNew = {}
                // @ts-ignore
                cartNew[key] = ingredient
                setCart({...cart, ...cartNew})
            }
        }

        // @ts-ignore
        function deleteIngridientFromCart(cartItemId) {
            const cartItems = {...cart}
            // @ts-ignore
            delete cartItems[cartItemId]
            setCart(cartItems)
        }

        useEffect(() => {
            if (allIngredients.length !== 0) {
                const randomCart = {}
                for (let i = 0; i < getRandomIngredientIndex(); i++) {
                    const key = Date.now() + 100 * i
                    // @ts-ignore
                    randomCart[key] = getRandomIngredient()
                }
                setCart(randomCart)
            }
        }, [allIngredients])

        return (
            allIngredients.length === 0
                ?
                <Loading/>
                :
                <main className={appMainStyles.AppMain}>
                    <BurgerIngredients getIngredientCountFn={getIngredientCount}
                                       groupedIngredients={groupedIngredients}/>

                    <BurgerConstructor cartItemsList={cartItemList}
                                       currentBun={bun}
                                       deleteIngridientFromCartFn={deleteIngridientFromCart}
                                       cartPrice={cartPrice}/>
                </main>
        );
    }
;


export default AppMain;