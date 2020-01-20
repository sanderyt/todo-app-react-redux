const isUserReducer = (state = {}, action) => {
  switch (action.type) {
    case "GET_USER":
      return {
        ...state,
        user: action.payload
      };
    case "REMOVE_USER":
      return {
        ...state,
        user: null
      };
    default:
      return state;
  }
};

export default isUserReducer;
