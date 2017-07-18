import * as actions from './../constants'

export const initialState = {
    orders: []
};
export default function orders(state = initialState, action) {
    switch (action.type) {
        case actions.ADD_ORDER:
            return {
                ...state,
                orders: [
                    ...state.orders,
                    action.payload
                ]
            }
        default:
            return state;
    }
}