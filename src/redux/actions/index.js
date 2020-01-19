import Fire from '../../config/Firebase';

//Login-out actions
export const logIn = () => {
    return {
        type: 'IS_LOGGED_IN'
    };
};

export const logOut = () => {
    return {
        type: 'IS_LOGGED_OUT'
    };
};

//Get user actions
export const getUser = (user) => {
    return {
        type: 'GET_USER',
        payload: user,
    };
};

export const removeUser = () => {
    return {
        type: 'REMOVE_USER',
    };
};

//Get project actions
export const fetchProjectsRequest = () => {
    return {
        type: 'FETCH_PROJECTS_REQUEST'
    }
}

export const fetchProjectsSuccess = (projects) => {
    return {
        type: 'FETCH_PROJECTS_SUCCESS',
        payload: projects,
    }
}

export const fetchProjectsFailure = (error) => {
    return {
        type: 'FETCH_PROJECTS_FAILURE',
        payload: error,
    }
}

export const fetchProjects = (userid) => {
    return async dispatch => {
        dispatch(fetchProjectsRequest())
        
        let projects = []
        Fire.firestore().collection('projects').where("userId", "==", userid).get()
        .then((snapshot) => {
            snapshot.docs.forEach(doc => {
                projects.push({ ...doc.data(), docId: doc.id })
            })
        dispatch(fetchProjectsSuccess(projects))
        })
        .catch((error) => {
            dispatch(fetchProjectsFailure(error));
        })
    }
}

//Get tasks actions
//Get project actions
export const fetchTasksRequest = () => {
    return {
        type: 'FETCH_TASKS_REQUEST'
    }
}

export const fetchTasksSuccess = (tasks) => {
    return {
        type: 'FETCH_TASKS_SUCCESS',
        payload: tasks,
    }
}

export const fetchTasksFailure = (error) => {
    return {
        type: 'FETCH_TASKS_FAILURE',
        payload: error,
    }
}

export const fetchTasks = (userid) => {
    return async dispatch => {
        dispatch(fetchTasksRequest())
        
        let tasks = []
        Fire.firestore().collection('tasks').where("userId", "==", userid).get()
        .then((snapshot) => {
            snapshot.docs.forEach(doc => {
                tasks.push({ ...doc.data(), docId: doc.id })
            })
        dispatch(fetchTasksSuccess(tasks))
        })
        .catch((error) => {
            dispatch(fetchTasksFailure(error));
        })
    }
}