import React, { useState } from 'react';
import Modal from '../components/Modal';
import Fire from '../config/Firebase';

const Home = () => {

    const [newProject, setNewProject] = useState(false);
    const [newTask, setNewTask] = useState(false);

    const newProjectHandler = () => {

    }

    return (
        <div className="content">
            <div className="content__sidebar">
                <h2>Projects</h2>
                <p>No projects to show...</p>
                <button className="btn" onClick={() => setNewProject(!newProject)}>Add new project</button>
                <h2>Tasks</h2>
                <p>No tasks to show</p>
                <button className="btn" onClick={() => setNewTask(!newTask)}>Add new task</button>
            </div>
            <div className="content__todos">
                <h2>To-do list</h2>
            </div>
            {newProject&&
            <Modal title="Create new project" close={() => setNewProject(!newProject)}>
                <b>Project name: </b><input type="text" /><br />
                <button className="btn">Create project</button>
            </Modal>}
            {newTask&&
            <Modal title="Create new task" close={() => setNewTask(!newTask)}>
                <b>Task: </b><input type="text" /><br />
                <b>Description: </b><input type="text" /><br />
                <b>For project: </b><input type="text" /><br />
                <button className="btn">Create task</button>
            </Modal>}
        </div>
    );
};

export default Home;