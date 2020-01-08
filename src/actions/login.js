import axios from 'axios';
import history from '../history'

export const START_LOGIN = "START_LOGIN";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAILURE = "LOGIN_FAILURE";

export const login = (credentials) => {return dispatch => {
    dispatch ({type: START_LOGIN});
    axios
        .post(
            'https://airbnbclonedevin.herokuapp.com/auth/login',
            credentials
        )
        .then(res => {
            dispatch({type: LOGIN_SUCCESS, payload: res});
            localStorage.setItem('token', res.data.token)
            history.push(`/my-listings/${res.data.id}`)
        })
        .catch(err=> {
            dispatch({type: LOGIN_FAILURE, payload: err})
        })
        
}}