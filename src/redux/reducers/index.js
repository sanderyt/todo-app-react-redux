import isUserReducer from './isUser';
import isLoggedReducer from './isLogged';
import {combineReducers} from 'redux';

const allReducers = combineReducers({
    isUser: isUserReducer,
    isLogged: isLoggedReducer,
});

export default allReducers;