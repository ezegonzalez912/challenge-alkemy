import React from 'react'

export const Modal = ({isOpenModal, isChangeModal, children}) => {

    return (
        <div className={`modal__main ${isOpenModal && "modal__main-open"}`} onClick={isChangeModal}>
            {children}
        </div>
    )
}