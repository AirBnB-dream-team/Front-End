import axios from 'axios';
import { axiosWithAuth } from '../utils/axiosWithAuth';

export const UPDATING = 'UPDATING';
export const GET_SUCCESS = 'GET_SUCCESS';
export const ADD_SUCCESS = 'ADD_SUCCESS';
export const UPDATE_SUCCESS = 'UPDATE_SUCCESS'
export const DELETE_SUCCESS = 'DELETE_SUCCESS'
export const FAILURE = 'FAILURE';

export const getUserListings = (id) => dispatch => {
    dispatch({type: UPDATING})
    axiosWithAuth()
        .get(`/api/${id}`)
        .then(res=>{
            dispatch({type: GET_SUCCESS, payload: res.data})
        })
        .catch(err =>{
            dispatch({type: FAILURE, payload: err})
        })
}

export const addListing = (info) => dispatch => {
    dispatch({type: UPDATING})
    axios
        .post(`/api/${info.id}`, info)
        .then(res=>{
            dispatch({type: ADD_SUCCESS, payload: res.data})
            
        })
        .catch(err=>{
            dispatch({type: FAILURE, payload: err})
        })
}

export const deleteListing = listingId => dispatch => {
    dispatch({type: UPDATING})
    axios
        .delete(`/api/${listingId}`)
        .then(res=>{
            console.log('delete listing res', res)
            dispatch({type: SUCCESS, payload: res})
        })
        .catch(err=>{
            dispatch({type: FAILURE, payload: err})
        })
}

export const updateListing = (info) => dispatch => {
    dispatch({type: UPDATING})
    axios
        .put(`/api/${info.id}`, info)
        .then(res=>{
            console.log('update listing res', res)
            dispatch({type: SUCCESS, payload: res})
        })
        .catch(err=>{
            dispatch({type: FAILURE, payload: err})
        })
}