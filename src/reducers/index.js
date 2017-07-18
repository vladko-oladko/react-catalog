import {combineReducers} from 'redux';
import products from './products';
import categories from './categories';
import orders from './orders';

const appReducer = combineReducers({
    products,
    categories,
    orders
});

export default appReducer;
