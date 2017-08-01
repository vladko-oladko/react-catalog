import {combineReducers} from 'redux';
import products from './products';
import categories from './categories';
import orders from './orders';
import compare from './compare';

const appReducer = combineReducers({
    products,
    categories,
    orders,
    compare
});

export default appReducer;
