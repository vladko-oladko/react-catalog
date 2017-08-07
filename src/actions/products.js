import * as constants from './../constants/products';
import axios from 'axios';

export function inputSearch(data){
    return (dispatch) => {
        axios.get(`http://localhost:8080/products/search/${data}`)
            .then((response) => {
                dispatch({ type: constants.INPUT_SEARCH, searchProducts: response.data, searchData: data});
            })
    }
}

export function addToBasket(name) {
    return {
        type: constants.ADD_TO_BASKET,
        payload: name
    }
}

export function deleteFromBasket(name) {
    return {
        type: constants.DELETE_FROM_BASKET,
        payload: name
    }
}

export function getListProducts(){
    return (dispatch) => {
        axios.get('http://localhost:8080/products')
            .then((response) => {
                dispatch({ type: constants.GET_LIST_PRODUCTS, payload: response.data });
            })
    }
}

export function getItemProducts(_id){
    return (dispatch) => {
        axios.get(`http://localhost:8080/products/${_id}`)
            .then((response) => {

                dispatch({ type: constants.GET_ITEM_PRODUCTS, payload: response.data });
            })
    }
}

