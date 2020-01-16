const isProjectsReducer = (state = {}, action) => {
    switch(action.type) {
        case 'GET_PROJECTS':
            return {
                ...state,
                projects : action.payload,
            }
        default:
            return state;
    }
};

export default isProjectsReducer;