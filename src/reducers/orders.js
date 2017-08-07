import * as actions from './../constants/orders'

export const initialState = {
    orders: {}
};
export default function orders(state = initialState, action) {
    switch (action.type) {
        case actions.ADD_ORDER:
            return {
                ...state,
                orders: action.payload
            }
        default:
            return state;
    }
}
