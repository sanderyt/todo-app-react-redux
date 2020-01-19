import React from 'react';

const ConfirmBox = (props) => {
    return (
        <div className="confirm-box">
            {props.children}
            <button className="btn btn--delete" onClick={props.delete}>Yes</button>
            <button className="btn btn--keep" onClick={props.keep}>No</button>
        </div>
    );
};

export default ConfirmBox;