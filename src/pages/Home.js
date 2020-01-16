import React, { useState } from 'react';
import Fire from '../config/Firebase';
import Modal from '../components/Modal';

const Home = () => {

    const [newProject, setNewProject] = useState(false);
    const [newTask, setNewTask] = useState(false);
    const [projectName, setProjectName] = useState("");
    const [addedProject, setAddedProject] = useState(false);

    const inputHandler = (event) => {
        setProjectName(event.target.value);
    }

    const closeHandler = (type) => {
        setNewProject(!newProject)
        setAddedProject(false)
    }

    const postNewProject = () => {
        Fire
        .firestore()
        .collection("projects")
        .add({
            projectName: projectName,
            userId: "sander"
        })
        .then(() => console.log('succes'))
        .catch(error => console.error("Error adding document: ", error))

        setAddedProject(true)
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
            <Modal title={addedProject ? "Added a new project" : "Create new project"} close={closeHandler}>
                {addedProject ?
                <div>
                <p className="success">You just added "{projectName}" as a new project.</p>
                <p className="success">Start adding tasks for this project.</p>
                </div>
                :
                <div>
                <b>Project name: </b><input type="text" onChange={inputHandler}/><br />
                <button className="btn" onClick={postNewProject}>Create project</button>
                </div>}
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