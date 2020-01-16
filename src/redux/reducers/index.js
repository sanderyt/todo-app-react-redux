import isUserReducer from './isUser';
import isLoggedReducer from './isLogged';
import isProjectsReducer from './isProjects';
import {combineReducers} from 'redux';

const allReducers = combineReducers({
    isUser: isUserReducer,
    isLogged: isLoggedReducer,
    isProjects: isProjectsReducer,
});

export default allReducers;