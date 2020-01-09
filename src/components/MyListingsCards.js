import React, { useState }from 'react';
import ListingEdit from './ListingEdit'


const MyListingsCards = props => {
    const [showModal, setShowModal] = useState(false)
    return (
        <div className="mylistings">
            <h1>{props.listing.address}</h1>

            <span><h3>{props.listing.city}, {props.listing.state} {props.listing.zip}</h3></span>
            <span><p>Price:</p> <h4>{props.listing.price}</h4></span>
            <span><p>Baths:</p> <h4>{props.listing.bath_number}</h4></span>
            <span><p>Beds:</p> <h4>{props.listing.bed_number}</h4></span>
            <span><p>Sq.Ft:</p> <h4>{props.listing.sqft}</h4></span>
            <span><p>Date:</p> <h4>{props.listing.date}</h4></span>
            <span><p>Email:</p> <h4>{props.listing.email}</h4></span>
            <div>
              <button onClick={()=> setShowModal(!showModal)}>Edit</button>
              <button onClick={()=>{
                  console.log('click', props.deleteListing(props.listing.id, props.listing.planner_id))
              }}>Delete</button>

                { showModal ? <ListingEdit listing ={props.listing} listingId={props.listing.id} setShowModal={setShowModal}/> : null}
            </div>
        </div>
    );

};
export default MyListingsCards