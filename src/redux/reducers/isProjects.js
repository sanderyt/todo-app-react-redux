const initialState = {
    isLoading: false,
    projects: [],
    error: '',
}


const isProjectsReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'FETCH_PROJECTS_REQUEST':
            return {
                ...state,
                isLoading: true,
            }
        case 'FETCH_PROJECTS_SUCCESS':
            return {
                ...state,
                isLoading: false,
                projects: action.payload,
                error: '',
            }
        case 'FETCH_PROJECTS_FAILURE':
            return {
                isLoading: false,
                projects: [],
                error: action.payload,
            }
        default:
            return state;
    }
};

export default isProjectsReducer;