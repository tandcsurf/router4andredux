import { createStore, applyMiddleware, compose } from 'redux';
import createHistory from 'history/createBrowserHistory';
import { routerMiddleware } from 'react-router-redux';
import rootReducer from './reducers/index';

export const history = createHistory();

const middleware = routerMiddleware(history);

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const defaultState = {
  posts: [],
  pages: {},
}

export const store = createStore(rootReducer, defaultState, composeEnhancers(
  applyMiddleware(...middleware)
));
