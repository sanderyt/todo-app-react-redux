import React from 'react';

const TaskItem = (props) => {
    return (
        <div className="task-item">
            {props.task}
        </div>
    );
};

export default TaskItem;