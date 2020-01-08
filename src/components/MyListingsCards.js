import React from 'react';
import Styled from 'styled-components';

// Form & Card styling

const CardDiv = Styled.div `
    width:  30%;
    display: flex;
    flex-wrap: wrap;
    border: #354356 1px solid;
    margin-bottom: 30px;
    padding: 15px;
    justify-content: space-evenly;
    align-items: start;
    opacity: 0.8;
    transition: opacity 0.5s;
    transition: scale();
    border-radius: 10px;
    line-height: 1;
    box-shadow: black 5px 5px 20px;
    color: black;
    `

const EditForm = Styled.form `
    display: flex;
    width: 100%;
    flex-direction: column;
    justify-content: start;
    align-items: center;
    color: black;
    `;

// End styling

const MyListingsCards = props => {
    // const [editing, setEditing] = useState(false);
    // const [input, setInput] = useState({
    //     address: "",
    //     city: "",
    //     state: "",
    //     zip: "",
    //     price: "",
    //     bath_number: "",
    //     bed_number: "",
    //     sqft: "",
    //     email: "",
    //     date: ""
    // });

    // const onSaveSubmit = e => {
    //     console.log("onSaveSubmit().");
    //     e.preventDefault();
    //     props.editItem(input);
    //     setEditing(!editing);
    // };

    // const handleChange = e => {
    //     console.log("handlechange");
    //     setInput({ ...input, [e.target.name]: e.target.value });
    // };

    return (
        
        <CardDiv className="mylistings">
            <div className="card-line"><h1>{props.listing.address}</h1></div>
            <div className="card-line"><h3>{props.listing.city}, {props.listing.state} {props.listing.zip}</h3></div>
            <div className="card-line"><p>Price:</p> <h4>{props.listing.price}</h4></div>
            <div className="card-line"><p>Baths:</p> <h4>{props.listing.bath_number}</h4></div>
            <div className="card-line"><p>Beds:</p> <h4>{props.listing.bed_number}</h4></div>
            <div className="card-line"><p>Sq.Ft:</p> <h4>{props.listing.sqft}</h4></div>
            <div className="card-line"><p>Date:</p> <h4>{props.listing.date}</h4></div>
            <div className="card-line"><p>Email:</p> <h4>{props.listing.email}</h4></div>
            
        </CardDiv>

    );
};
export default MyListingsCards