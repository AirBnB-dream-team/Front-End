import React, { useState }from 'react';
import ListingEdit from './ListingEdit'



const MyListingsCards = props => {
    const [showModal, setShowModal] = useState(false)
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
            <div>
            <button onClick={()=> setShowModal(true)}>Edit</button>
            <button>Delete</button>

                { showModal ? <ListingEdit listing ={props.listing} showModal={showModal} setShowModal={()=> setShowModal(false)}/> : null}
            </div>
            
        </div>)
        
};
export default MyListingsCards