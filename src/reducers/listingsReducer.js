import {
    UPDATING,
    SUCCESS,
    FAILURE
} from '../actions/listingsActions'

const initialState = {
    listings: [],
    isUpdating: false,
    error: ''
};

const listingsReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATING :
            return {
                ...state,
                isUpdating: true
            }
        case SUCCESS : 
            return {
                ...state,
                listings: action.payload,
                isUpdating: false
            }
        case FAILURE: 
            return {
                ...state,
                isUpdating: false,
                error: action.payload
            }
        default: 
            return state;
    }
}

export default listingsReducer