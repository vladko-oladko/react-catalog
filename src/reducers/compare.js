import * as actions from './../constants/compare'

export const initialState = {
    compareProducts: [],

};
export default function compare(state = initialState, action) {
    switch (action.type) {
        case actions.ADD_TO_COMPARE:
            return {
                ...state,
                compareProducts: [
                    ...state.compareProducts,
                    action.payload
                ]
            }

        case actions.DELETE_FROM_COMPARE:
            let newProd = state.compareProducts.filter(item => (item !== action.payload))
            return {
                ...state,
                compareProducts: newProd
            }
        default:
            return state;
    }
}
