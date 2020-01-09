import React, { useState }from 'react';
import ListingEdit from './ListingEdit';


const MyListingsCards = props => {
    const [showModal, setShowModal] = useState(false)
    {console.log(props)}
    return (
        <div className="individual-card">
            <h1>$<span className="card-price">{props.listing.price}</span></h1>
            <h3>{props.listing.address}</h3>
            <h3 className="card-city-state">{props.listing.city}, {props.listing.state} {props.listing.zip}</h3>
            <p>Baths: <span>{props.listing.bath_number}</span></p>
            <p>Beds: <span>{props.listing.bed_number}</span></p>
            <p>Sq.Ft: <span>{props.listing.sqft}</span></p>
            <p>Date: <span>{props.listing.date}</span></p>
            <p>Email: <span>{props.listing.email}</span></p>
            <div className="card-btn-container">
                <button className="card-btn" onClick={()=> setShowModal(true)}>Edit</button>
                <button className="card-btn">Delete</button>
            </div>
            { showModal ? <ListingEdit listing ={props.listing} showModal={showModal} setShowModal={()=> setShowModal(false)}/> : null}
        </div>
    );

};
export default MyListingsCards