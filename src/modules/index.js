import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import user from '../reducers/user';
import posted from '../reducers/posted';
import readPosts from '../reducers/read-posts';


export default combineReducers({
  routing: routerReducer,
  user,
  posted,
  readPosts,
});