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
                projects.push(doc.data())
            })
        dispatch(fetchProjectsSuccess(projects))
        })
        .catch((error) => {
            dispatch(fetchProjectsFailure(error));
        })
    }
}


