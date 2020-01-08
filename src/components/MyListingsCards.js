import React, { useState } from 'react';
import Styled from 'styled-components';
import { deleteItem, editItem } from "../actions";
import { connect } from "react-redux";

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
    const [editing, setEditing] = useState(false);
    const [input, setInput] = useState({
        address: "",
        city: "",
        state: "",
        zip: "",
        price: "",
        bath_number: "",
        bed_number: "",
        sqft: "",
        email: "",
        date: ""
    });

    const onSaveSubmit = e => {
        console.log("onSaveSubmit().");
        e.preventDefault();
        props.editItem(input);
        setEditing(!editing);
    };

    const handleChange = e => {
        console.log("handlechange");
        setInput({ ...input, [e.target.name]: e.target.value });
    };

    return (
        <>
        <CardDiv className="mylistings">
            <div className="card-line"><h1>{props.index.address}</h1></div>
            <div className="card-line"><h3>{props.index.city}, {props.index.state} {props.index.zip}</h3></div>
            <div className="card-line"><p>Price:</p> <h4>{props.index.price}</h4></div>
            <div className="card-line"><p>Baths:</p> <h4>{props.index.bath_number}</h4></div>
            <div className="card-line"><p>Beds:</p> <h4>{props.index.bed_number}</h4></div>
            <div className="card-line"><p>Sq.Ft:</p> <h4>{props.index.sqft}</h4></div>
            <div className="card-line"><p>Date:</p> <h4>{props.index.date}</h4></div>
            <div className="card-line"><p>Email:</p> <h4>{props.index.email}</h4></div>
            <button
            onClick={() => {
                setEditing(!editing);
                setInput(props.index);
            }}
            className="card-btn"
            >
            Edit
            </button>
            <button
            className="card-btn"
            onClick={() => {
                console.log("click");
                props.deleteItem(props.index.id);
            }}
            >
            Delete
            </button>
        </CardDiv>

        {editing ? (
            <EditForm onSubmit={onSaveSubmit} className="edit-form">
                <label>Number of Baths</label>
                <input
                    type="text"
                    name="baths"
                    onChange={handleChange}
                    placeholder="Enter number here"
                    value={input.bath_number}
                />

                <label>Number of Beds</label>
                <input
                    type="text"
                    name="beds"
                    onChange={handleChange}
                    placeholder="Enter number here"
                    value={input.bed_number}
                />

                <label>Zipcode</label>
                <input
                    type="text"
                    name="zipcode"
                    onChange={handleChange}
                    placeholder="Enter zipcode here"
                    value={input.zip}
                />

                <label>City</label>
                <input
                    type="text"
                    name="city"
                    onChange={handleChange}
                    placeholder="Enter city here"
                    value={input.city}
                />

                <label>State</label>
                <input
                    type="text"
                    name="state"
                    onChange={handleChange}
                    placeholder="Enter full name of state here"
                    value={input.state}
                />

                <label>Square-footage</label>
                <input
                    type="text"
                    name="square-footage"
                    onChange={handleChange}
                    placeholder="Enter number here"
                    value={input.sqft}
                />

                <label>Date</label>
                <input
                    type="text"
                    name="date"
                    onChange={handleChange}
                    placeholder="Enter date here"
                    value={input.date}
                />

                <button 
                    className="card-btn"
                    onClick={() => {
                        setEditing(!editing);
                        setInput(props.index);
                    }}
                >
                    Save
                </button>
            </EditForm>
        ) : null}
        </>
    );
};

const mapStateToProps = state => {
    return {
        user: state.user,
        isLoading: state.isLoading,
        error: state.error
    };
};

export default connect(
    mapStateToProps,
    { deleteItem, editItem }
)(MyListingsCards);