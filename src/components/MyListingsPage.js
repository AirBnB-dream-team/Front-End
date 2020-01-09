import React, {useEffect} from 'react';
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
    useEffect(()=>{
        props.getUserListings(props.match.params.id);
    },[])

    
    return (
        <div className="mylistings-page">
            <div className="mylistings-header">
                <h2>User's Listings</h2>
                <div className="new-listing-btn">
                    <Link to={`/new-listing/${props.match.params.id}`} className="new-listing-link">
                        New Listing
                    </Link>
                </div>
            </div>
            <div className="mylistings-cards">
                {props.listings.map(val=>{
                    return (
                        <>
                            <MyListingsCards key={val.id} listing={val} deleteListing={props.deleteListing}/>
                        </>

                    )
                })}
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