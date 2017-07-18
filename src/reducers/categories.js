import * as actions from './../constants'

export const initialState = {
    categories: ['phones','laptops'],
    currentCategory: '',
    priceFrom: '',
    priceTo: ''
};
export default function categories(state = initialState, action) {
    switch (action.type) {
        case actions.PRODUCT_SORT:
            return {
                ...state,
                currentCategory: action.payload
            }

        case actions.PRODUCT_SORT_PRICE_FROM:
            return {
                ...state,
                priceFrom: action.payload
            }

        case actions.PRODUCT_SORT_PRICE_TO:
            return {
                ...state,
                priceTo: action.payload
            }

        case actions.DEFAULT_STATE:
            return {
                ...state,
                currentCategory: ''
            }

        default:
            return state;
    }
}
