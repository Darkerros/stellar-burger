import PropTypes from "prop-types";
const choseBunType = PropTypes.shape({
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired
})

export default choseBunType;