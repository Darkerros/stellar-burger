import React from 'react';
import modalOverlayStyle from './ModalOverlay.module.css'
import PropTypes from "prop-types";
// @ts-ignore
const ModalOverlay = ({onClick}) => {
    return (
        <div className={modalOverlayStyle.ModalOverlay} onClick={onClick}/>
    );
};

ModalOverlay.propTypes = {
    onClick: PropTypes.func
}

export default ModalOverlay;