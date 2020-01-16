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
export const getProjects = () => {
    let projects = [];
    Fire.firestore().collection('projects').get().then((snapshot) => {
        snapshot.docs.forEach(doc => {
        projects.push(doc.data());
        })
    })
    return {
        type: 'GET_PROJECTS',
        payload: projects,
    };
};