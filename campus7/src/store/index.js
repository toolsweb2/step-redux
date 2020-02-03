

import reducer from "../reducers"
import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
//import { createLogger } from 'redux-logger';

//const loggerMiddleware = createLogger();

export const store = createStore(
    reducer,
    applyMiddleware(
        thunkMiddleware,
       // loggerMiddleware
    )
);
export default store;
