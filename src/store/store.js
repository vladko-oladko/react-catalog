import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import createSocketExampleMiddleware from './../middlewares/socketMiddleware'
import appReducer from './../Reducers';


const store = createStore(
    appReducer,
    applyMiddleware(thunkMiddleware,createSocketExampleMiddleware)
);

export default store;
