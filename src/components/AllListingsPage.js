import React from 'react';
import AllListingsCards from './AllListingsCards';
import { connect } from "react-redux";

import {
    getUserListings,
    addListing,
    deleteListing,
    updateListing
} from '../actions/listingsActions'

const AllListings = props => {
    props.getUserListings();
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
        addListing,
        deleteListing,
        updateListing
    }
)(AllListings);