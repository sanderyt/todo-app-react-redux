import React, { useState, useEffect } from "react";
import Fire from "../config/Firebase";
import Modal from "../components/Modal";
import LoadingSpinner from "../components/LoadingSpinner";
import TaskItem from "../components/TaskItem";
import ProjectName from "../components/ProjectName";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlus,
  faFolderPlus,
  faTasks
} from "@fortawesome/free-solid-svg-icons";
import { useDispatch, useSelector } from "react-redux";
import { fetchProjects, fetchTasks } from "../redux/actions";

const Home = () => {
  const [newProject, setNewProject] = useState(false);
  const [addTask, setAddTask] = useState(false);
  const [addedProject, setAddedProject] = useState(false);
  const [projectName, setProjectName] = useState("");
  const [selectedProject, setSelectedProject] = useState(null);

  //task
  const [newTask, setNewTask] = useState({});

  const dispatch = useDispatch();
  const user = useSelector(store => store.isUser.user);
  const projects = useSelector(store => store.isProjects);
  const tasks = useSelector(store => store.isTasks);

  useEffect(() => {
    dispatch(fetchProjects(user.uid));
    dispatch(fetchTasks(user.uid));
  }, [dispatch, user.uid]);

  //Project-related functions
  const inputHandler = event => {
    setProjectName(event.target.value);
  };

  const closeHandler = type => {
    setNewProject(!newProject);
    setAddedProject(false);
  };

  const postProject = () => {
    Fire.firestore()
      .collection("projects")
      .add({
        projectName: projectName,
        userId: user.uid
      })
      .then()
      .catch(error => console.error("Error adding document: ", error));
    setAddedProject(true);
    dispatch(fetchProjects(user.uid));
  };

  const deleteProject = projectId => {
    Fire.firestore()
      .collection("projects")
      .doc(projectId)
      .delete()
      .then(() => {
        dispatch(fetchProjects(user.uid));
      })
      .catch(error => {
        console.error("Error removing document: ", error);
      });

    //also have to delete all tasks related to this project
  };

  const selectProject = selected => {
    setSelectedProject(selected);
  };

  //Task-related functions
  const newTaskHandler = event => {
    setNewTask({
      ...newTask,
      [event.target.name]: event.target.value
    });
  };

  const postTask = () => {
    Fire.firestore()
      .collection("tasks")
      .add({
        projectId: newTask.projectId,
        date: newTask.due,
        task: newTask.taskName,
        archived: false,
        userId: user.uid,
        priority: newTask.priority
      })
      .then()
      .catch(error => console.error("Error adding document: ", error));
    setAddTask(false);
    dispatch(fetchTasks(user.uid));
  };

  const completeTask = () => {
    console.log("completed");
  };

  const deleteTask = taskId => {
    Fire.firestore()
      .collection("tasks")
      .doc(taskId)
      .delete()
      .then(() => {
        dispatch(fetchTasks(user.uid));
      })
      .catch(error => {
        console.error("Error removing document: ", error);
      });
  };

  return (
    <div className="content">
      <div className="content__sidebar">
        <p>
          Welcome, <b>{user && user.email}</b>
        </p>
        <button className="btn btn--green" onClick={() => setAddTask(!addTask)}>
          <FontAwesomeIcon icon={faPlus} /> Add new task
        </button>
        <h3>Projects</h3>
        <div className="content__sidebar__projects">
          <div>
            {projects.isLoading ? (
              <LoadingSpinner />
            ) : (
              projects.projects.map(el => {
                return (
                  <ProjectName
                    name={el.projectName}
                    docId={el.docId}
                    delete={deleteProject}
                    select={selectProject}
                  />
                );
              })
            )}
          </div>
        </div>
        <button
          className="btn btn--green"
          onClick={() => setNewProject(!newProject)}
        >
          <FontAwesomeIcon icon={faFolderPlus} /> Add new project
        </button>
      </div>
      <div className="content__todos">
        <h3>
          <FontAwesomeIcon icon={faTasks} /> All your tasks for{" "}
          {selectedProject ? `"${selectedProject}"` : "all projects"}{" "}
          <span>{tasks.tasks.length}</span>
        </h3>
        {tasks.isLoading ? (
          <LoadingSpinner />
        ) : (
          tasks.tasks.map(el => {
            return (
              <TaskItem
                task={el.task}
                taskId={el.docId}
                date={el.date}
                priority={el.priority}
                project={el.projectId}
                archived={el.archived}
                delete={deleteTask}
                complete={completeTask}
              />
            );
          })
        )}
      </div>

      {newProject && (
        <Modal
          title={addedProject ? "Added a new project" : "Create new project"}
          close={closeHandler}
        >
          {addedProject ? (
            <div>
              <p className="success">
                You just added "{projectName}" as a new project.
              </p>
              <p className="success">Start adding tasks for this project.</p>
            </div>
          ) : (
            <div>
              <b>Project name: </b>
              <input type="text" onChange={inputHandler} />
              <br />
              <button className="btn" onClick={postProject}>
                Create project
              </button>
            </div>
          )}
        </Modal>
      )}

      {addTask && (
        <Modal title="Create new task" close={() => setAddTask(!addTask)}>
          <b>Task: </b>
          <input type="text" name="taskName" onChange={newTaskHandler} />
          <br />
          <b>For project:</b>
          <select onChange={newTaskHandler} name="projectId">
            {projects.projects.map(project => {
              return (
                <option value={project.projectName}>
                  {project.projectName}
                </option>
              );
            })}
          </select>
          <br />
          <b>Priority:</b>
          <select onChange={newTaskHandler} name="priority">
            <option value="Low">Low</option>
            <option value="Medium">Medium</option>
            <option value="High">High</option>
          </select>
          <br />
          <b>
            Due by: <input type="date" name="due" onChange={newTaskHandler} />
            <br />
          </b>
          <b>Description: </b>
          <input type="text" name="description" onChange={newTaskHandler} />
          <br />
          <button className="btn" onClick={postTask}>
            Create task
          </button>
        </Modal>
      )}
    </div>
  );
};

export default Home;
