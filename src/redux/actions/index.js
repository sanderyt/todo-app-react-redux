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
export const getUser = () => {
    return {
        type: 'GET_USER'
    };
};