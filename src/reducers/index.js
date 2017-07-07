import {combineReducers} from 'redux';
import products from './products';
import categories from './categories'

const appReducer = combineReducers({
    products,
    categories
});

export default appReducer;
