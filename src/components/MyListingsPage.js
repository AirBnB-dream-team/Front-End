import React from 'react';
import { Link } from 'react-router-dom';
import MyListingsCards from './MyListingsCards';
import { connect } from "react-redux";

import {
    getUserListings,
    addListing,
    deleteListing,
    updateListing
} from '../actions/listingsActions'

const MyListings = props => {
    props.getUserListings();
    return (
        <div className="mylistings-page">
            <div className="mylistings-header">
                <h2>User's Listings</h2>
                <div className="new-listing-btn">
                    <Link to="/new-listing">
                        New Listing
                    </Link>
                </div>
            </div>
            <div className="mylistings-cards">
                <p>listing cards</p>
                {/* {props.listings.map(val=>(
                    <div>
                        <MyListingsCards key={val.id} listing={val}/>
                    </div>
                ))} */}
                
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
)(MyListings);