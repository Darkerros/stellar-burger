import React from 'react';
import modalStyles from './Modal.module.css'
import {createPortal} from "react-dom";
import ModalOverlay from "../ModalOverlay/ModalOverlay";
import { CloseIcon } from '@ya.praktikum/react-developer-burger-ui-components';

// @ts-ignore
const Modal = ({children}) => {
    const modalContainer = document.querySelector('#modal')
    return createPortal(
            <div className={modalStyles.modal}>
                <div className={modalStyles.content}>
                    <div className={modalStyles.closeBtn}>
                        <CloseIcon type="primary" />
                    </div>
                    {children}
                </div>
                <ModalOverlay/>
            </div>,
        // @ts-ignore
        modalContainer
    );
};

export default Modal;