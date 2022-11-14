import PropTypes from "prop-types";

const groupedIngredientsType = PropTypes.arrayOf(
    PropTypes.shape(
        {
            type: PropTypes.oneOf(['bun', "main", "sauce"]).isRequired,
            name: PropTypes.oneOf(['Булки', "Главное", "Соусы"]),
            ingredientsList: PropTypes.array
        }))

export default groupedIngredientsType;