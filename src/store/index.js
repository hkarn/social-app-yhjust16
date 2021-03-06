import { createStore, applyMiddleware, compose } from 'redux';
import { routerMiddleware } from 'react-router-redux';
import thunk from 'redux-thunk';
import createHistory from 'history/createBrowserHistory';
import rootReducer from '../modules';

export const history = createHistory();

const initialState = {
  postedComment: {postkey: 'none'},
  posted: {postkey: 'none'},
};
const enhancers = [];
const middleware = [
  thunk,
  routerMiddleware(history)
];

//eslint-disable-next-line
if (process.env.NODE_ENV === 'development') {
  const devToolsExtension = window.window.__REDUX_DEVTOOLS_EXTENSION__;

  if (typeof devToolsExtension === 'function') {
    enhancers.push(devToolsExtension());
  }
}

const composedEnhancers = compose(
  applyMiddleware(...middleware),
  ...enhancers
);

const store = createStore(
  rootReducer,
  initialState,
  composedEnhancers
);

export default store;