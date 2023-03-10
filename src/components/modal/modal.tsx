import React, {FC, ReactNode, useEffect, useState} from 'react';
import modalStyles from './modal.module.css'
import {createPortal} from "react-dom";
import ModalOverlay from "../modal-overlay/modal-overlay";
import { CloseIcon } from '@ya.praktikum/react-developer-burger-ui-components';

const modalContainer = document.querySelector('#modal')

interface IProps {
    children: ReactNode;
    handleClose: () => void
}

const Modal:FC<IProps> = ({children,handleClose}) => {
    const [modalState,setModalState] = useState(true)

    function closeModal () {
        setModalState(false)
        setTimeout(() => handleClose(),300)
    }



    useEffect(() => {
        function closeByEsc (evt:KeyboardEvent) {
            if (evt.key === "Escape") {
                closeModal()
            }
        }

        document.addEventListener('keydown',closeByEsc)
        return () => {document.removeEventListener('keydown',closeByEsc)}
        // eslint-disable-next-line
    },[])

    return createPortal(
            <div className={modalState ? modalStyles.modal : modalStyles.modal + " " + modalStyles.hidden}>
                <div className={modalStyles.content}>
                    <div className={modalStyles.closeBtn} onClick={closeModal}>
                        <CloseIcon type="primary" />
                    </div>
                    {children}
                </div>
                <ModalOverlay onClick={closeModal}/>
            </div>,
        modalContainer as Element
    );
};

export default Modal;
