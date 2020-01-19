import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle, faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';
import ConfirmBox from './ConfirmBox';

const TaskItem = (props) => {

    const [deleteTask, setDeleteTask] = useState(false);

    const priorityColor = () => {
        if (props.priority === "Low") return {color: "lightgreen"}
        if (props.priority === "Medium") return {color: "orange"}
        if (props.priority === "High") return {color: "red"}
    }

    return (
        <div className={props.archived ? "task-item--done" : "task-item"} onClick={props.click}>
            <div className="task-item__check">
                <input type="checkbox" id="horns" name="horns" defaultChecked={props.archived} onChange={props.complete} />
            </div>
            <div className="task-item__name">
                {props.task}
            </div>
            <div className="task-item__details">
                <p>{props.project}</p>
                <p>{props.date}</p>
                <p>{props.priority} <FontAwesomeIcon icon={faCircle} style={priorityColor()}/></p>
                <FontAwesomeIcon icon={faEdit} />
                <div>
                    <FontAwesomeIcon icon={faTrash} onClick={() => setDeleteTask(true)}/>
                    {deleteTask&&
                    <ConfirmBox keep={() => setDeleteTask(false)} delete={() => props.delete(props.taskId)}>
                        <p>Are you sure?</p>
                    </ConfirmBox>}
                </div>
            </div>
        </div>
    );
};

export default TaskItem;