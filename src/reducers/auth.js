import * as types from './../constants/auth';

const initialState = {
    isAuth: false,
    error: {},
};

export default function auth(state = initialState, action) {
    switch (action.type) {
    case types.SIGN_UP_SUCCESS:
        return {
            ...state,
            signup: true,
            error: {}
        };
    case types.SIGN_UP_FAILURE:
        return {
            ...state,
            signup: false,
            error: { signup: action.payload }
        };
    default:
        return state;
    }
}
