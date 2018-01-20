import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';
import { Route } from 'react-router-dom';
import store, { history } from './store';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';


import './index.css';

const target = document.querySelector('#root');

render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <div>

        <Route component={App} />
      </div>
    </ConnectedRouter>
  </Provider>,
  target
);
registerServiceWorker();
