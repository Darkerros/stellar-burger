import React from 'react';

// @ts-ignore
const Title = ({children}) => {
    return (
        <p className={'text text_type_main-large mt-10'}>
            {children}
        </p>
    );
};

export default Title;