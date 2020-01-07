import axios from 'axios';

export const START_LOGIN = "START_LOGIN";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAILURE = "LOGIN_FAILURE";

export const login = (credentials) => dispatch => {
    dispatch ({type: START_LOGIN});
    axios
        .post(
            'https://airbnbclonedevin.herokuapp.com/auth/login',
            credentials
        )
        .then(res => {
            dispatch({type: LOGIN_SUCCESS, payload: res});
        })
        .catch(err=> {
            dispatch({type: LOGIN_FAILURE, payload: err})
        })
}