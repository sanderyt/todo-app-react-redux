const isUserReducer = (state = {}, action) => {
    switch(action.type) {
        case 'GET_USER':
            return state.hoi = "sander";
        default:
            return state;
    }
};

export default isUserReducer;