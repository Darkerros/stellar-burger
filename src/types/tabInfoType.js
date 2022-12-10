import PropTypes from "prop-types";

const tabInfoType = PropTypes.shape({
    name: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
})

export default tabInfoType;