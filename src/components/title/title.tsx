import React, {FC} from 'react';

interface IProps {
    children: string
}

const Title:FC<IProps> = ({children}) => {
    return (
        <p className={'text text_type_main-large mt-10'}>
            {children}
        </p>
    );
};


export default Title;
