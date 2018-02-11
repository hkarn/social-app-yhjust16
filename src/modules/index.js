import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import user from '../reducers/user';
import posted from '../reducers/posted';
import readPosts from '../reducers/read-posts';
import unlocked from '../reducers/unlocked';


export default combineReducers({
  routing: routerReducer,
  user: user,
  posted,
  readPosts,
  unlocked
});