import axios from 'axios';
import * as types from '../constants/auth';
import { saveToStorage, removeFromStorage } from '../helpers/storage';

export function signUp(props, redirect) {
    return (dispatch) => {
        axios.post('http://localhost:8080/signup', props)
            .then(() => {
                dispatch({ type: types.SIGN_UP_SUCCESS });
                redirect(`/`);
            })
            .catch(({ response }) => dispatch({type: types.SIGN_UP_FAILURE, payload: response.data.error}));
    };
}

export function logIn(props) {

    return (dispatch) => {
        axios.post('http://localhost:8080/login', props)
            .then((response) => {
                saveToStorage('user', JSON.stringify(response.data));
                dispatch({ type: types.LOG_IN_SUCCESS, payload: response.data.role });
            })
            .catch(response => dispatch({type: types.LOG_IN_FAILURE, payload: 'Email или пароль не подходят'}));
    };
}

export function logOut() {
    removeFromStorage('user');
    return (dispatch) => {
        dispatch({ type: types.LOG_OUT });
    };
}

export function authUser(role) {
    return {
        type: types.AUTH_USER,
        payload: role
    };
}
