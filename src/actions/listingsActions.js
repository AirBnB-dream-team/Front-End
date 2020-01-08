import axios from 'axios';

export const UPDATING = 'UPDATING';
export const SUCCESS = 'SUCCESS';
export const FAILURE = 'FAILURE';

export const getUserListings = (id) => dispatch => {
    dispatch({type: UPDATING})
    axios
        .get(`/api/${id}`)
        .then(res=>{
            dispatch({type: SUCCESS, payload: res.data})
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