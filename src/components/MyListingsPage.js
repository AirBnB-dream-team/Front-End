import React from 'react';
import { Link } from 'react-router-dom';
import MyListingsCards from './MyListingsCards';
import { connect } from "react-redux";

const MyListings = props => {

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
                <MyListingsCards index={index} />
            </div>
        </div>
    );
};

const mapStateToProps = state => {
    return {
        user: state.user,
        events: state.events,
        isLoading: state.isLoading,
        error: state.error
    };
};

export default connect(
    mapStateToProps,
    null
)(MyListings);