import React, {FC} from 'react';
import modalOverlayStyle from './modal-overlay.module.css'

interface IProps {
    onClick: () => void
}

const ModalOverlay:FC<IProps> = ({onClick}) => {
    return (
        <div className={modalOverlayStyle.ModalOverlay} onClick={onClick}/>
    );
};

export default ModalOverlay;
