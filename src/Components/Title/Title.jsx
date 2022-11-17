import React from 'react';
import PropTypes from "prop-types";

const Title = ({children}) => {
    return (
        <p className={'text text_type_main-large mt-10'}>
            {children}
        </p>
    );
};

Title.propTypes = {children: PropTypes.string.isRequired}

export default Title;
