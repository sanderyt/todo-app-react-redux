import isUserReducer from "./isUser";
import isLoggedReducer from "./isLogged";
import isProjectsReducer from "./isProjects";
import isTasksReducer from "./isTasks";
import { combineReducers } from "redux";

const allReducers = combineReducers({
  isUser: isUserReducer,
  isLogged: isLoggedReducer,
  isProjects: isProjectsReducer,
  isTasks: isTasksReducer
});

export default allReducers;
