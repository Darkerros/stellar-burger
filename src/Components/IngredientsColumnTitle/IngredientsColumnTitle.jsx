import React from 'react';
import PropTypes from "prop-types";

const IngredientsColumnTitle = ({children}) => {
    return (
        <p className={'text text_type_main-medium'}>
            {children}
        </p>
    );
};

IngredientsColumnTitle.propTypes = {children: PropTypes.string.isRequired}

export default IngredientsColumnTitle;