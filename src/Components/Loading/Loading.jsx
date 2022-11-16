import React, {useEffect, useState} from 'react';
import loadingStyles from './Loading.module.css'

const Loading = () => {
    const [pointCount,setPointCount] = useState(['.'])
    useEffect(() => {
        setTimeout(() => {
            if (pointCount.length > 5){
                setPointCount((['.']))
            }
            else {
                setPointCount([...pointCount,'.'])
            }
        },500)
    },[pointCount])

    return (
        <div className={loadingStyles.Loading}>
            <p className='text text_type_main-medium'>Loading{pointCount.join('')}</p>
        </div>
    );
};

export default Loading;