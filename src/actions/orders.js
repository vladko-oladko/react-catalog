import * as type from './../constants/orders'


export function addOrder(obj) {
    return {
        type: type.ADD_ORDER,
        payload: obj
    }
}
