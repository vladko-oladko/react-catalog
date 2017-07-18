import * as type from './../constants'

export function productSort(data) {
    return {
        type: type.PRODUCT_SORT,
        payload: data
    }
}

export function defaultState() {
    return {
        type: type.DEFAULT_STATE
    }
}

export function productSortPriceFrom(data) {
    return {
        type: type.PRODUCT_SORT_PRICE_FROM,
        payload: data
    }
}

export function productSortPriceTo(data) {
    return {
        type: type.PRODUCT_SORT_PRICE_TO,
        payload: data
    }
}

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

export function addOrder(obj) {
    return {
        type: type.ADD_ORDER,
        payload: obj
    }
}
