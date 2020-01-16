const isUserReducer = (state = {}, action) => {
    switch(action.type) {
        case 'GET_USER':
            return {
                ...state,
                state : action.payload,
            }
        case "REMOVE_USER":
            return {
                ...state,
                state: null
            }
        default:
            return state;
    }
};

export default isUserReducer;