import axios from 'axios';

export const START_REGISTER = "START_REGISTER"
export const REGISTER_SUCCESS = "REGISTER_SUCCESS"
export const REGISTER_FAILURE = "REGISTER_FAILURE"

export const register = values => dispatch => {
    dispatch({type: START_REGISTER});
    axios
        .post(
            '',
            values
        )
        .then(res => {
            dispatch({type: REGISTER_SUCCESS, payload: res})
        })
        .catch(err => {
            dispatch({type: REGISTER_FAILURE, payload: err})
        })
}
