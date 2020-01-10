import axios from 'axios'
import history from '../history'

export const START_REGISTER = "START_REGISTER"
export const REGISTER_SUCCESS = "REGISTER_SUCCESS"
export const REGISTER_FAILURE = "REGISTER_FAILURE"

export const register = values => dispatch => {
    dispatch({type: START_REGISTER});
    axios
        .post(
            '/auth/register',
            values
        )
        .then(res => {
            
            dispatch({type: REGISTER_SUCCESS, payload: res})
            history.push('/login')
        })
        .catch(err => {
            dispatch({type: REGISTER_FAILURE, payload: err})
        })
}

