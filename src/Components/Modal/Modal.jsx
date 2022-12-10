import React, {useEffect, useState} from 'react';
import modalStyles from './Modal.module.css'
import {createPortal} from "react-dom";
import ModalOverlay from "../ModalOverlay/ModalOverlay";
import { CloseIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import PropTypes from "prop-types";

const modalContainer = document.querySelector('#modal')

const Modal = ({children,handleClose}) => {
    const [modalState,setModalState] = useState(true)

    function closeModal () {
        setModalState(false)
        setTimeout(() => handleClose(),300)
    }



    useEffect(() => {
        function closeByEsc (evt) {
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
        modalContainer
    );
};

Modal.propTypes = {
    children: PropTypes.element.isRequired,
    handleClose: PropTypes.func.isRequired
}

export default Modal;
