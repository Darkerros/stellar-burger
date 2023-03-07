import {Counter} from "@ya.praktikum/react-developer-burger-ui-components";
import ingredientStyles from './ingredient.module.css'
import Price from "../price/price";
import PropTypes from "prop-types";
import ingredientType from "../../types/ingredientType";
import {useDrag} from "react-dnd";
import {Link} from "react-router-dom";

const Ingredient = ({ingredient, counter}) => {
    const [,dragRef] = useDrag({
        type: 'ingredient',
        item: ingredient,
    })

    return (
        <li className={ingredientStyles.Ingredient} ref={dragRef}>
            <Link to={`/ingredients/${ingredient._id}`} state={{ingredient: ingredient, from: "/", modalState: true}} className={"text_color_primary " + ingredientStyles.link}>
                {counter !== 0 && <Counter count={counter} extraClass={ingredientStyles.Ingredient__count}/>}
                <img className={ingredientStyles.Ingredient__image + ' ml-4 mr-4'} src={ingredient.image}
                     alt={ingredient.name ? ingredient.name : 'Картинка ингредиента'}/>
                <Price>{ingredient.price}</Price>
                <p className={ingredientStyles.Ingredient__name + " text text_type_main-default mt-1"}>{ingredient.name}</p>
            </Link>
        </li>
    );
};

Ingredient.propTypes = {
    ingredient: ingredientType.isRequired,
    counter: PropTypes.number.isRequired
}

export default Ingredient;
