import axios from 'axios';

export const UPDATING = 'UPDATING';
export const SUCCESS = 'SUCCESS';
export const FAILURE = 'FAILURE';

export const getUserListings = (id) => dispatch => {
    dispatch({type: UPDATING})
    axios
        .get(`https://airbnbclonedevin.herokuapp.com/api/${id}`)
        .then(res=>{
            console.log('user listings res', res)
            dispatch({type: SUCCESS, payload: res})
        })
        .catch(err =>{
            dispatch({type: FAILURE, payload: err})
        })
}

export const addListing = (info) => dispatch => {
    dispatch({type: UPDATING})
    axios
        .post(`https://airbnbclonedevin.herokuapp.com/api/${info.id}`, info)
        .then(res=>{
            console.log('add listing res', res)
            dispatch({type: SUCCESS, payload: res})
        })
        .catch(err=>{
            dispatch({type: FAILURE, payload: err})
        })
}

export const deleteListing = listingId => dispatch => {
    dispatch({type: UPDATING})
    axios
        .delete(`https://airbnbclonedevin.herokuapp.com/api/${listingId}`)
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
        .put(`https://airbnbclonedevin.herokuapp.com/api/${info.id}`, info)
        .then(res=>{
            console.log('update listing res', res)
            dispatch({type: SUCCESS, payload: res})
        })
        .catch(err=>{
            dispatch({type: FAILURE, payload: err})
        })
}