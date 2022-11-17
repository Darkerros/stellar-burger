import PropTypes from "prop-types";
import ingredientType from "./ingredientType";

const cartItemType = PropTypes.shape({
    ...ingredientType,
    cartItemId: PropTypes.string
})

export default cartItemType;