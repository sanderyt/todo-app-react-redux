import React, { useState } from 'react';

const TaskItem = (props) => {

    return (
        <div className="task-item" onClick={props.click}>
            {props.task}
        </div>
    );
};

export default TaskItem;