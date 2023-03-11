import React, {FC} from 'react';

interface IProps {
    children: string
}

const IngredientsColumnTitle:FC<IProps> = ({children}) => {
    return (
        <p className={'text text_type_main-medium'}>
            {children}
        </p>
    );
};

export default IngredientsColumnTitle;
