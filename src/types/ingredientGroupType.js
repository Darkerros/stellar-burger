import PropTypes from "prop-types";

const ingredientGroupType = PropTypes.shape({
            type: PropTypes.oneOf(['bun', "main", "sauce"]).isRequired,
            name: PropTypes.oneOf(['Булки', "Главное", "Соусы"]).isRequired,
            ingredientsList: PropTypes.array.isRequired
        })

export default ingredientGroupType;