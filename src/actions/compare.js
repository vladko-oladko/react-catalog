import * as type from './../constants/compare'


export function addToCompare(id) {
    return {
        type: type.ADD_TO_COMPARE,
        payload: id
    }
}

export function deleteFromCompare(id) {
    return {
        type: type.DELETE_FROM_COMPARE,
        payload: id
    }
}


