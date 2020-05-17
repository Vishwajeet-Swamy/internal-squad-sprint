import { squadReducer } from './squad/reducer';
import { combineReducers } from 'redux';

export const rootReducer = combineReducers({
    squad: squadReducer
})

export type RootState = ReturnType<typeof rootReducer>