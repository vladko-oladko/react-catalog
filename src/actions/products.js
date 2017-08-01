import * as type from './../constants/products'


export function inputSearch(data) {
    return {
        type: type.INPUT_SEARCH,
        payload: data
    }
}

export function addToBasket(name) {
    return {
        type: type.ADD_TO_BASKET,
        payload: name
    }
}

export function deleteFromBasket(name) {
    return {
        type: type.DELETE_FROM_BASKET,
        payload: name
    }
}
