import React, {useEffect, useState} from 'react';
import loadingStyles from './loading.module.css'

const Loading = () => {
    const [pointCount,setPointCount] = useState(['.'])
    const [isLoadTimeMoreLimit,setIsLoadTimeMoreLimit] = useState(false)

    // eslint-disable-line no-use-before-define
    useEffect(() => {
        setTimeout(() => {
            if (pointCount.length > 5){
                setPointCount((['.']))
            }
            else {
                setPointCount([...pointCount,'.'])
            }
            if (!isLoadTimeMoreLimit) {
                setIsLoadTimeMoreLimit(true)
            }
        },500)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[pointCount])

    return (
        <div className={loadingStyles.Loading}>
            {isLoadTimeMoreLimit && <p className='text text_type_main-medium'>Loading{pointCount.join('')}</p>}
        </div>
    )
};

export default Loading;
