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

                <Field
                    
                    name='zip' 
                    id='zip'
                    placeholder="Zip"
                    value={values.zip}
                />
                {touched.zip && errors.zip && (
                    <p className="errors"> {errors.zip}</p>
                )}

                <Field
                    name='address' 
                    id='address'
                    placeholder="address"
                    value={values.address}
                />
                {touched.address && errors.address && (
                    <p className="errors"> {errors.address}</p>)}

                <Field
                    name='city' 
                    id='city'
                    placeholder="city"
                    value={values.city}
                />
                
                {touched.city && errors.city && (
                    <p className="errors"> {errors.city}</p>)}

                <Field
                    name='state' 
                    id='state'
                    placeholder="state"
                    value={values.state}
                />
                {touched.state && errors.state && (
                    <p className="errors"> {errors.state}</p>)}
                <Field
                    name='price' 
                    id='price'
                    placeholder="price"
                    value={values.price}
                />
                {touched.price && errors.price && (
                    <p className="errors"> {errors.price}</p>)}

                <Field
                    name='sqft' 
                    id='sqft'
                    placeholder="sqft"
                    value={values.sqft}
                />

                {touched.sqft && errors.sqft && (
                    <p className="errors"> {errors.sqft}</p>)}
                <Field
                    name='email' 
                    id='email'
                    placeholder="email"
                    value={values.email}
                />
                {touched.email && errors.email && (
                    <p className="errors"> {errors.email}</p>)}

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