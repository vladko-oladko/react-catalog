import * as type from './../constants/categories'


export function productSort(data) {
    return {
        type: type.PRODUCT_SORT,
        payload: data
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
export function productSortWeightFrom(data) {
    return {
        type: type.PRODUCT_SORT_WEIGHT_FROM,
        payload: data
    }
}

export function productSortWeightTo(data) {
    return {
        type: type.PRODUCT_SORT_WEIGHT_TO,
        payload: data
    }
}

export function productAddSortCpu(data) {
    return {
        type: type.PRODUCT_ADD_SORT_CPU,
        payload: data
    }
}

export function productDeleteSortCpu(data) {
    return {
        type: type.PRODUCT_DELETE_SORT_CPU,
        payload: data
    }
}

export function productSortCpuCountFrom(data) {
    return {
        type: type.PRODUCT_SORT_CPU_COUNT_FROM,
        payload: data
    }
}

export function productSortCpuCountTo(data) {
    return {
        type: type.PRODUCT_SORT_CPU_COUNT_TO,
        payload: data
    }
}

export function productAddSortRes(data) {
    return {
        type: type.PRODUCT_ADD_SORT_RES,
        payload: data
    }
}

export function productDeleteSortRes(data) {
    return {
        type: type.PRODUCT_DELETE_SORT_RES,
        payload: data
    }
}

export function defaultState() {
    return {
        type: type.DEFAULT_STATE
    }
}
