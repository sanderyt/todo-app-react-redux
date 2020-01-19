import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

const Modal = (props) => {
    return (
        <div className="modal">
            <div className="modal__container">
                <div className="modal__header">
                    <div className="modal__header__title">
                        <h2>{props.title}</h2>
                    </div>
                    <div className="modal__header__close" onClick={props.close}>
                        <FontAwesomeIcon icon={faTimes} />
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