import React from 'react';



const MyListingsCards = props => {

    return (
        <div className="mylistings">
            <h1>{props.listing.address}</h1>
            <h3>{props.listing.city}, {props.listing.state} {props.listing.zip}</h3>
            <p>Price:</p> <h4>{props.listing.price}</h4>
            <p>Baths:</p> <h4>{props.listing.bath_number}</h4>
            <p>Beds:</p> <h4>{props.listing.bed_number}</h4>
            <p>Sq.Ft:</p> <h4>{props.listing.sqft}</h4>
            <p>Date:</p> <h4>{props.listing.date}</h4>
            <p>Email:</p> <h4>{props.listing.email}</h4>
            
        </div>
    );
};
export default MyListingsCards