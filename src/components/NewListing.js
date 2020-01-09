import React, { useState } from 'react';
import { withFormik, Form, Field} from 'formik';
import * as Yup from 'yup';

import axios from 'axios';






function NewListing(props){   
   
    const { values, touched, errors
          } = props;

          console.log('Errors: ',errors)
          console.log('Touched: ',touched)
          

    const checkPrice = (e) => {
        e.preventDefault();
        console.log(`Bedrooms: ${values.bed_number} Bathrooms: ${values.bath_number}`)

    }
    return (
       
            <Form className='new-form'>
                <div className='label'>
                    <label htmlFor="bed_number">Bedrooms</label>
                </div>
                <Field

                   
                    name='bed_number' 
                    id='bed_number'
                    placeholder="No. of Bedrooms"
                    value={values.bed_number}
                />
                {touched.bed_number && errors.bed_number && (
                    <p className="errors"> {errors.bed_number}</p>
                )}
                <div className='label'>
                    <label htmlFor="bath_number">Bathrooms</label>
                </div>
                
                 <Field

                    
                    name='bath_number' 
                    id='bath_number'
                    placeholder="No. of bathrooms"
                    value={values.bath_number}
                />
                {touched.bath_number && errors.bath_number && (
                    <p className="errors"> {errors.bath_number}</p>
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
                    
                    name='date' 
                    id='date'
                    placeholder="date"
                    value={values.date}
                />
                {touched.date && errors.date && (
                    <p className="errors"> {errors.date}</p>)}
                
                <div className="editmodal-btns">
                    <button disabled={!values.bed_number || !values.bath_number}onClick={checkPrice}className="new-btn">Check Price</button>
                    
                    <button disabled={Object.getOwnPropertyNames(touched).length === 0|| !(Object.getOwnPropertyNames(errors).length === 0)}type="submit" className="new-btn">Create Listing</button>
                </div>

            </Form>
       
            
       

    )
}

const FormikNewListing = withFormik({
    mapPropsToValues({ 
        bed_number,
        bath_number,
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
          bed_number: bed_number || "",
          bath_number: bath_number || "",
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
        bed_number:Yup.string().required("Bedrooms required"),
        bath_number:Yup.string().required("Bathrooms required"),
        zip: Yup.string().required("Zip Required").test('len', 'Must be exactly 5 characters', val => val && val.toString().length === 5),
        address:Yup.string().required('Address Required'),
        city:Yup.string().required('City Required'),
        price:Yup.string().required('Price Required'),
        email: Yup.string().email('Invalid Email Address').required('Email required'),
        date: Yup.string().required('Date Required')

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

})(NewListing);

export default FormikNewListing;