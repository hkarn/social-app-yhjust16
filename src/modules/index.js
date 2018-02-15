import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import user from '../reducers/user';
import posted from '../reducers/posted';
import readPosts from '../reducers/read-posts';
import unlocked from '../reducers/unlocked';
import liked from '../reducers/liked';
import commentStream from '../reducers/read-comments';
import postedComment from '../reducers/posted-comment';


export default combineReducers({
  routing: routerReducer,
  user: user,
  posted,
  postedComment,
  readPosts,
  unlocked,
  liked,
  commentStream,
});