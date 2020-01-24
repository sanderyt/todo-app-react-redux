const initialState = {
    isLoading: false,
    tasks: [],
    error: '',
}


const isTasksReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'FETCH_TASKS_REQUEST':
            return {
                ...state,
                isLoading: true,
            }
        case 'FETCH_TASKS_SUCCESS':
            return {
                ...state,
                isLoading: false,
                tasks: action.payload,
                error: '',
            }
        case 'FETCH_TASKS_FAILURE':
            return {
                isLoading: false,
                tasks: [],
                error: action.payload,
            }
        default:
            return state;
    }
};

export default isTasksReducer;