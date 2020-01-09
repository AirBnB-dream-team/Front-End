import React, { useState } from 'react';
import { withFormik, Form, Field} from 'formik';
import * as Yup from 'yup';

import axios from 'axios';






function ListingEdit(props){   
   
    const { values, touched, errors, setShowModal
          } = props;

          console.log('Errors: ',errors)
          console.log('Touched: ',touched)
          

    const checkPrice = (e) => {
        e.preventDefault();
        console.log(`Bedrooms: ${values.bedrooms} Bathrooms: ${values.bathrooms}`)

    }
    return (
       
            <Form className='edit-form'>
                <div className='label'>
                    <label htmlFor="bed_number">Bedrooms</label>
                </div>
                
                <Field
                    type='number'
                    name='bedrooms' 
                    id='bedrooms'
                    placeholder="No. of Bedrooms"
                    value={values.bed_number}
                />
                {touched.bedrooms && errors.bedrooms && (
                    <p className="errors"> {errors.bedrooms}</p>
                )}
                <div className='label'>
                    <label htmlFor="bath_number">Bathrooms</label>
                </div>
                 <Field
                    type='number'
                    name='bathrooms' 
                    id='bathrooms'
                    placeholder="No. of bathrooms"
                    value={values.bathrooms}
                />
                {touched.bathrooms && errors.bathrooms && (
                    <p className="errors"> {errors.bathrooms}</p>
                )}
                <div className='label'>
                    <label htmlFor="zip">Zip Code</label>
                </div>
                <Field
                    
                    name='zip' 
                    id='zip'
                    placeholder="Zip"
                    value={values.zip}
                />
                {touched.zip && errors.zip && (
                    <p className="errors"> {errors.zip}</p>
                )}
                <div className='label'>
                    <label htmlFor="address">Street Address</label>
                </div>
                <Field
                    name='address' 
                    id='address'
                    placeholder="address"
                    value={values.address}
                />
                {touched.address && errors.address && (
                    <p className="errors"> {errors.address}</p>)}
                <div className='label'>
                    <label htmlFor="city">City</label>
                </div>
                <Field
                    name='city' 
                    id='city'
                    placeholder="city"
                    value={values.city}
                />
                
                {touched.city && errors.city && (
                    <p className="errors"> {errors.city}</p>)}
                <div className='label'>
                    <label htmlFor="state">State</label>
                </div>
                <Field
                    name='state' 
                    id='state'
                    placeholder="state"
                    value={values.state}
                />
                {touched.state && errors.state && (
                    <p className="errors"> {errors.state}</p>)}
                <div className='label'>
                    <label htmlFor="price">Price</label>
                </div>
                <Field
                    name='price' 
                    id='price'
                    placeholder="price"
                    value={values.price}
                />
                {touched.price && errors.price && (
                    <p className="errors"> {errors.price}</p>)}
                <div className='label'>
                    <label htmlFor="sqft">Sqft</label>
                </div>
                <Field
                    name='sqft' 
                    id='sqft'
                    placeholder="sqft"
                    value={values.sqft}
                />

                {touched.sqft && errors.sqft && (
                    <p className="errors"> {errors.sqft}</p>)}
                <div className='label'>
                    <label htmlFor="email">Email</label>
                </div>
                <Field
                    name='email' 
                    id='email'
                    placeholder="email"
                    value={values.email}
                />
                {touched.email && errors.email && (
                    <p className="errors"> {errors.email}</p>)}
                <div className='label'>
                    <label htmlFor="date">Date</label>
                </div>
                <Field
                    type="date"
                    name='date' 
                    id='date'
                    placeholder="date"
                    value={values.date}
                />
                {touched.date && errors.date && (
                    <p className="errors"> {errors.date}</p>)}
                <div className="editmodal-btns">
                    <button className="modal-btn" disabled={!values.bedrooms || !values.bathrooms} onClick={checkPrice}>Check Price</button>
                    <button className="modal-btn" disabled={Object.getOwnPropertyNames(touched).length === 0|| !(Object.getOwnPropertyNames(errors).length === 0)} type="submit" onClick={setShowModal}>Save Listing</button>
                </div>
            </Form>
       
            
       

    )
}

const FormikListingEdit = withFormik({
    mapPropsToValues({ 
        bedrooms,
        bathrooms,
        zip,
        address,
        city,
        state,
        price,
        sqft,
        email,
        date,
        }) {
        return {
          bedrooms: bedrooms || "",
          bathrooms: bathrooms || "",
          zip: zip || "",
          address: address || "",
          city: city || "",
          state: state ||"",
          price: price || "",
          sqft: sqft || "",
          email: email || "",
          date: date || ""
          
        };
    },
    validationSchema: Yup.object().shape({
        bedrooms:Yup.number().min(0).required("Bedrooms required"),
        bathrooms:Yup.number().min(0).required("Bathrooms required"),
        zip: Yup.string().required("Zip Required").test('len', 'Must be exactly 5 characters', val => val && val.toString().length === 5),
        address:Yup.string().required('Address Required'),
        city:Yup.string().required('City Required'),
        price:Yup.number().required('Price Required'),
        email: Yup.string().email('Invalid Email Address').required('Email required'),
        date: Yup.date().min(new Date()).required('Date Required')

    }),
    handleSubmit(values, {setStatus, resetForm}) {
        console.log("submitting! ", values);
        // This is just a placeholder api data.
        axios.
        post("https://reqres.in/api/users/", values)
        .then ( res => {
            console.log('Successfully submitted', values)
            setStatus(res.data)
            resetForm();
        })
      }

})(ListingEdit);

export default FormikListingEdit;