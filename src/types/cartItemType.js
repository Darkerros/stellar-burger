import PropTypes from "prop-types";

const cartItemType = PropTypes.shape({
    image: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    cartItemId: PropTypes.string.isRequired
})

export default cartItemType;