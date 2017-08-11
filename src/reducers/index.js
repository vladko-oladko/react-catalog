import {combineReducers} from 'redux';
import products from './products';
import categories from './categories';
import orders from './orders';
import compare from './compare';
import auth from './auth';
import chat from './chat';


const appReducer = combineReducers({
    products,
    categories,
    orders,
    compare,
    auth,
    chat
});

export default appReducer;
