import * as actions from './../constants/categories'

export const initialState = {
    currentCategory: '',
    priceFrom: '',
    priceTo: '',
    weightFrom: '',
    weightTo: '',
    cpu: [],
    cpuCountFrom: '',
    cpuCountTo: '',
    resolution: []
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
        case actions.PRODUCT_SORT_WEIGHT_FROM:
            return {
                ...state,
                weightFrom: action.payload
            }

        case actions.PRODUCT_SORT_WEIGHT_TO:
            return {
                ...state,
                weightTo: action.payload
            }

        case actions.PRODUCT_ADD_SORT_CPU:
            return {
                ...state,
                cpu:[
                    ...state.cpu,
                    action.payload
                ]
            }

        case actions.PRODUCT_DELETE_SORT_CPU:
            let newCpu = [...state.cpu]
            newCpu = newCpu.filter(item => item !== action.payload )
            return {
                ...state,
                cpu: newCpu
            }

        case actions.PRODUCT_SORT_CPU_COUNT_FROM:
            return {
                ...state,
                cpuCountFrom: action.payload
            }

        case actions.PRODUCT_SORT_CPU_COUNT_TO:
            return {
                ...state,
                cpuCountTo: action.payload
            }


        case actions.PRODUCT_ADD_SORT_RES:
            return {
                ...state,
                resolution:[
                    ...state.resolution,
                    action.payload
                ]
            }

        case actions.PRODUCT_DELETE_SORT_RES:
            let newRes = [...state.resolution]
            newRes = newRes.filter(item => item !== action.payload )
            return {
                ...state,
                resolution: newRes
            }

        case actions.DEFAULT_STATE:
            return {
                ...initialState
            }

        default:
            return state;
    }
}
