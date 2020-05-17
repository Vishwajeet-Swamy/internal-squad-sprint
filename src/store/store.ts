import { createStore, applyMiddleware } from 'redux';
import { RootState, rootReducer } from './index';
import logger from 'redux-logger'

const store = createStore<RootState, any, any, any>(rootReducer, applyMiddleware(logger));

export default store;