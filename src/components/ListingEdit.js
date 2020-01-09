import React from 'react';
import { withFormik, Form, Field} from 'formik';
import * as Yup from 'yup';

import {connect} from 'react-redux';
import {updateListing} from '../actions/listingsActions'






function Edit(props){  
    
    
   
    const { values, touched, errors
          } = props;

          


          const checkPrice = (e) => {
            e.preventDefault();
            console.log(props)
    
        }
        return (
           
                <Form className='new-listing'>
                    <Field
    
                       
                        name='bed_number' 
                        id='bed_number'
                        placeholder="No. of Bedrooms"
                        value={values.bed_number}
                    />
                    {touched.bed_number && errors.bed_number && (
                        <p className="error"> {errors.bed_number}</p>
                    )}
                     <Field
    
                        
                        name='bath_number' 
                        id='bath_number'
                        placeholder="No. of bathrooms"
                        value={values.bath_number}
                    />
                    {touched.bath_number && errors.bath_number && (
                        <p className="error"> {errors.bath_number}</p>
                    )}
    
                    <Field
                        
                        name='zip' 
                        id='zip'
                        placeholder="Zip"
                        value={values.zip}
                    />
                    {touched.zip && errors.zip && (
                        <p className="error"> {errors.zip}</p>
                    )}
    
                    <Field
                        name='address' 
                        id='address'
                        placeholder="address"
                        value={values.address}
                    />
                    {touched.address && errors.address && (
                        <p className="error"> {errors.address}</p>)}
    
                    <Field
                        name='city' 
                        id='city'
                        placeholder="city"
                        value={values.city}
                    />
                    
                    {touched.city && errors.city && (
                        <p className="error"> {errors.city}</p>)}
    
                    <Field
                        name='state' 
                        id='state'
                        placeholder="state"
                        value={values.state}
                    />
                    {touched.state && errors.state && (
                        <p className="error"> {errors.state}</p>)}
                    <Field
                        name='price' 
                        id='price'
                        placeholder="price"
                        value={values.price}
                    />
                    {touched.price && errors.price && (
                        <p className="error"> {errors.price}</p>)}
    
                    <Field
                        name='sqft' 
                        id='sqft'
                        placeholder="sqft"
                        value={values.sqft}
                    />
    
                    {touched.sqft && errors.sqft && (
                        <p className="error"> {errors.sqft}</p>)}
                    <Field
                        name='email' 
                        id='email'
                        placeholder="email"
                        value={values.email}
                    />
                    {touched.email && errors.email && (
                        <p className="error"> {errors.email}</p>)}
    
                    <Field
                        
                        name='date' 
                        id='date'
                        placeholder="date"
                        value={values.date}
                    />
                    {touched.date && errors.date && (
                        <p className="error"> {errors.date}</p>)}
                <button disabled={!values.bed_number || !values.bath_number}onClick={checkPrice}>Check Price</button>
                
                <button disabled={Object.getOwnPropertyNames(touched).length === 0|| !(Object.getOwnPropertyNames(errors).length === 0)}type="submit" >Save Listing</button>

            </Form>
       
            
       

    )
}

const FormikEdit = withFormik({
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
    handleSubmit(values, {props, resetForm}) {
        props.updateListing(props.listing.id, values, props.listing.planner_id);
        resetForm();
        props.setShowModal(false)
      }

})(Edit);

export default connect(null, {updateListing})(FormikEdit);