import { combineReducers } from "redux";
import postReducer from './post.reducer';
import userReducer from './post.reducer';

export default combineReducers({
    postReducer,
    userReducer
})