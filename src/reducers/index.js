import {combineReducers} from 'redux';
import commentReducers from 'reducers/comments';
import authReducer from 'reducers/auth';

export default combineReducers({
    comments : commentReducers,
    auth : authReducer
})