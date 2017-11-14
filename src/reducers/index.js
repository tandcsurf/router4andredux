import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import posts from './posts';
import pages from './pages';

const rootReducer = combineReducers({posts, pages, routing: routerReducer});

export default rootReducer;
