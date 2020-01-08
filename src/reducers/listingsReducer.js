import {
    UPDATING,
    GET_SUCCESS,
    SUCCESS,
    FAILURE
} from '../actions/listingsActions'

const initialState = {
    listings: [
        {
            "id": 0,
            "planner_id": 0,
            "bath_number": "3",
            "bed_number": "3",
            "zip": "56487",
            "address": "33/44/2312",
            "city": "boston",
            "state": "ma",
            "email": "email@gmail.com",
            "sqft": "4567",
            "date": "33/44/2312",
            "price": 800,
            "reserved": null
        }
    ],
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
        case GET_SUCCESS : 
            return {
                ...state,
                listings: action.payload,
                isUpdating: false
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