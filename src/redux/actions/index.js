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
    return {
        type: 'GET_PROJECTS',
    };
};