import * as types from './../constants/auth';

const initialState = {
    isAuth: false,
    error: {},
};

export default function auth(state = initialState, action) {
    switch (action.type) {
    case types.AUTH_USER:
        return {
            ...state,
            isAuth: true,
            role: action.payload,
            error: {},
        };
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
    case types.LOG_IN_SUCCESS:
        return {
            ...state,
            isAuth: true,
            role: action.payload,
            error: {},
        };
    case types.LOG_IN_FAILURE:
        return {
            ...state,
            isAuth: false,
            error: { login: action.payload },
        };
    case types.LOG_OUT:
        return {
            ...state,
            isAuth: false,
            error: {}
        };
    default:
        return state;
    }
}
