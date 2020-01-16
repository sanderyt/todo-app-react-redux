const isProjectsReducer = (state = {}, action) => {
    switch(action.type) {
        case 'GET_PROJECTS':
            return {
                ...state,
                state : action.payload,
            }
        default:
            return state;
    }
};

export default isProjectsReducer;