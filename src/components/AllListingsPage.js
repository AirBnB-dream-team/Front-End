import React, {useEffect} from 'react';
import { Link } from 'react-router-dom';
import AllListingsCards from './AllListingsCards';
import { connect } from "react-redux";

import {
    getUserListings,
    getAllListings,
    addListing,
    deleteListing,
    updateListing
} from '../actions/listingsActions'

const AllListings = props => {

    useEffect(()=>{
        props.getAllListings(props.match.params.id);
    },[])

    return (
        <div className="mylistings-page">
            <div className="mylistings-header">
                <h2>All Listings</h2>
                
            </div>
            <div className="mylistings-cards">
                
                {props.listings.map(val=>(
                    <div>
                        <AllListingsCards key={val.id} listing={val}/>
                    </div>
                ))}
                
            </div>
        </div>
    );
};

const mapStateToProps = state => {
    return {
        listings: state.listings,
        isUpdating: state.isUpdating,
        error: state.error
    };
};

export default connect(
    mapStateToProps,
    {
        getUserListings,
        getAllListings,
        addListing,
        deleteListing,
        updateListing
    }
)(AllListings);