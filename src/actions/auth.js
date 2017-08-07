import axios from 'axios';
import * as types from '../constants/auth';

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
