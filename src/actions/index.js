import {PRODUCT_SORT,DEFAULT_STATE} from './../constants'

export function productSort(data) {
    return {
        type: PRODUCT_SORT,
        payload: data
    }
}

export function defaultState() {
    return {
        type: DEFAULT_STATE
    }
}
