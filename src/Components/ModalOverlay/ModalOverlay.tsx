import React from 'react';
import modalOverlayStyle from './ModalOverlay.module.css'
// @ts-ignore
const ModalOverlay = (onClick) => {
    return (
        <div className={modalOverlayStyle.ModalOverlay} onClick={onClick}/>
    );
};

export default ModalOverlay;