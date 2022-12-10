import PropTypes from "prop-types";

const cartItemType = PropTypes.shape({
    image: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    cartId: PropTypes.number.isRequired
})

export default cartItemType;