import React, { useState, useEffect } from 'react';
import Fire from '../config/Firebase';
import Modal from '../components/Modal';
import LoadingSpinner from '../components/LoadingSpinner';
import TaskItem from '../components/TaskItem';
import ProjectName from '../components/ProjectName';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProjects } from '../redux/actions';

const Home = () => {

    const [newProject, setNewProject] = useState(false);
    const [newTask, setNewTask] = useState(false);
    const [addedProject, setAddedProject] = useState(false);
    const [projectName, setProjectName] = useState("");
    const [selectedProject, setSelectedProject] = useState("");

    const dispatch = useDispatch();
    const user = useSelector(store => store.isUser.user);
    const projects = useSelector(store => store.isProjects);

    useEffect(() => {
        dispatch(fetchProjects(user.uid));
    },[]);

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
            projectId: "1",
            projectName: projectName,
            userId: user.uid,
        })
        .then(() => console.log('succes'))
        .catch(error => console.error("Error adding document: ", error))
        setAddedProject(true)
        dispatch(fetchProjects(user.uid));
    }

    const deleteProject = () => {
        //delete project vanuit firebase met projectid
        console.log("project verwijderd");

        //dispatch fetch projects
    }

    return (
        <div className="content">
            <div className="content__sidebar">
                <p>Welcome, <b>{user&& user.email}</b></p>
                <h3>Filter tasks</h3>
                <p>By priority:</p>
                <p>By status:</p>
                <p>By project:</p>
                <button className="btn" onClick={() => setNewTask(!newTask)}>Add new task</button>
                <h3>Projects</h3>
                <div className="content__sidebar__projects">
                    <div>
                    {projects.isLoading ? 
                        <LoadingSpinner />
                         : 
                         projects.projects.map((el) => {
                             return <ProjectName name={el.projectName} delete={deleteProject}/>
                         })}
                    </div>
                </div> 
                <button className="btn" onClick={() => setNewProject(!newProject)}>Add new project</button>
            </div>
            <div className="content__todos">
                <h3>All your tasks</h3>
                <TaskItem task="Borden afwassen" />
                <TaskItem task="Kleren wassen" />
                <TaskItem task="Schoonmaken" />
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
                <b>For project: </b><input type="text" /><br />
                <b>Priority:</b> <input type="text" /><br />
                <b>Due by: <input type="text" /><br /></b>
                <b>Description: </b><input type="text" /><br />
                <button className="btn">Create task</button>
            </Modal>}
        </div>
    );
};

export default Home;