import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

const ProjectName = (props) => {

    const [deleteClicked, setDeleteClicked] = useState(false);

    const deleteHandler = () => {
        setDeleteClicked(true);
        props.delete();
    }
    return (
        <div className="project-name">
            <div className="project-name__title">
            {props.name}
            </div>
            <div className="project-name__delete">
                <FontAwesomeIcon icon={faTrash} onClick={deleteHandler} />
                {deleteClicked&&
                <div className="project-name__delete--box">
                    <p>Are you sure?</p>
                    <button className="btn btn--delete">Yes</button>
                    <button className="btn btn--keep" onClick={() => setDeleteClicked(false)}>No</button>
                </div>}
            </div>
        </div>
    );
};

export default ProjectName;