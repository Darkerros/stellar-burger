import PropTypes from "prop-types";

export const orderInfoType = PropTypes.shape({
    createdAt: PropTypes.string.isRequired,
    ingredients: PropTypes.arrayOf(PropTypes.string.isRequired),
    name: PropTypes.string.isRequired,
    number: PropTypes.number.isRequired,
    status: PropTypes.string.isRequired,
    _id: PropTypes.string.isRequired
})