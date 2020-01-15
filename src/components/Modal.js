import React from 'react';
import CloseIcon from './CloseIcon';

const Modal = (props, close) => {
    return (
        <div className="modal">
            <div className="modal__container">
                <div className="modal__header">
                    <div className="modal__header__title">
                        <h2>{props.title}</h2>
                    </div>
                    <div className="modal__header_close" onClick={props.close}>
                        <CloseIcon />
                    </div>
                </div>
                <div className="modal__content">
                <p>{props.children}</p>
                </div>
            </div>
        </div>
    );
};

export default Modal;