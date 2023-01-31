import React from 'react';
import AppHeader from "../../components/AppHeader/AppHeader";
import styles from './FeedPage.module.css'
import OrderCard from "../../components/OrderCard/OrderCard";

import fakeIngredient from '../../images/icons/bun-icon.png'
import OrdersWorkInfo from "../../components/OrdersWorkInfo/OrdersWorkInfo";
import OrdersStat from "../../components/OrdersStat/OrdersStat";

const FeedPage = () => {
    return (
        <>
            <AppHeader/>
            <div className={styles.content}>
                <h2 className={"text text_type_main-large text_color_primary mt-10 mb-5"}>Лента заказов</h2>
                <div className={styles.feedContainer}>
                    <div className={`${styles.feeds} pr-4`}>
                        <OrderCard id={"#1241"} date={"Сегодня, 16:20 i-GMT+3"} title={"Death Star Starship Main бургер"} ingredients={[fakeIngredient,fakeIngredient,fakeIngredient,fakeIngredient,fakeIngredient,fakeIngredient,fakeIngredient]} price={370}/>
                        <OrderCard id={"#1241"} date={"Сегодня, 16:20 i-GMT+3"} title={"Death Star Starship Main бургер"} ingredients={[fakeIngredient,fakeIngredient,fakeIngredient,fakeIngredient,fakeIngredient,fakeIngredient,fakeIngredient]} price={370}/>
                        <OrderCard id={"#1241"} date={"Сегодня, 16:20 i-GMT+3"} title={"Death Star Starship Main бургер"} ingredients={[fakeIngredient,fakeIngredient,fakeIngredient,fakeIngredient,fakeIngredient,fakeIngredient,fakeIngredient]} price={370}/>
                        <OrderCard id={"#1241"} date={"Сегодня, 16:20 i-GMT+3"} title={"Death Star Starship Main бургер"} ingredients={[fakeIngredient,fakeIngredient,fakeIngredient,fakeIngredient,fakeIngredient,fakeIngredient,fakeIngredient]} price={370}/>
                    </div>
                    <div className={"ml-15"}>
                        <OrdersWorkInfo completeOrdersId={[123,131,131]} inWorkOrdersId={[1,2,3]}/>
                        <OrdersStat title={"Выполнено за все время:"} count={21414} className={"mt-15"}/>
                        <OrdersStat title={"Выполнено за сегодня:"} count={2141} className={"mt-15"}/>
                    </div>
                </div>
            </div>
        </>
    );
};

export default FeedPage;