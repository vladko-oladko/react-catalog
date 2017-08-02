import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import appReducer from './../Reducers';


const store = createStore(
    appReducer,
    applyMiddleware(thunkMiddleware)
);

export default store;
