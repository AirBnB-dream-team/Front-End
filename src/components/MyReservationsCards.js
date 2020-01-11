import React from 'react';

const MyReservationsCards = props => {
    return (
        <div className="individual-card alllistings-card">
            <h1>$<span className="card-price">{props.listing.price}</span></h1>
            <h3>{props.listing.address}</h3>
            <h3 className="card-city-state">{props.listing.city}, {props.listing.state} {props.listing.zip}</h3>
            <p>Baths: <span>{props.listing.bath_number}</span></p>
            <p>Beds: <span>{props.listing.bed_number}</span></p>
            <p>Sq.Ft: <span>{props.listing.sqft}</span></p>
            <p>Date: <span>{props.listing.date}</span></p>
            <p>Email: <span>{props.listing.email}</span></p>
            <div className="card-btn-container">
                <button className="card-btn">Unreserve</button>
            </div>
        </div>
    );

};
export default MyReservationsCards;