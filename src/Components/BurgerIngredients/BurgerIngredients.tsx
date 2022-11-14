// @ts-ignore
import styles from "./BurgerIngredients.module.css"
import Tabs from "../Tabs/Tabs";
import Title from "../Title/Title";
import Ingredients from "../Ingredients/Ingredients";
import groupedIngredientsType from "../../types/groupedIngredientsType";
import PropTypes from "prop-types";

// @ts-ignore
const BurgerIngredients = ({groupedIngredients,getIngredientCountFn,addIngredientsToCartFn}) => {
    // @ts-ignore
    return (
        <section className={styles.BurgerIngredients}>
            <Title>Соберите бургер</Title>
            <Tabs className={'mt-5'} tabNamingList={groupedIngredients.map((group: { name: string; }) => group.name)}/>
            <Ingredients getIngredientCountFn={getIngredientCountFn} groupedIngredients={groupedIngredients} addIngredientsToCartFn={addIngredientsToCartFn}/>
        </section>
    );
};

BurgerIngredients.propTypes = {
    groupedIngredients: groupedIngredientsType,
    getIngredientCountFn: PropTypes.func,
    addIngredientsToCartFn: PropTypes.func,
}



export default BurgerIngredients;