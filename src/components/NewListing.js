import React, { useState } from 'react';
import { withFormik, Form, Field, yupToFormErrors } from 'formik';
import * as Yup from 'yup';

import axios from 'axios';






function NewListing(props){   
   const [price, setPrice] = useState();

    const { values, touched, errors
          } = props;

    const checkPrice = (e) => {
        e.preventDefault();
        console.log(`Bedrooms: ${values.bedrooms} Bathrooms: ${values.bathrooms}`)
       //Axios call here?

       //After axios returns the price variable replace the place variable with value and uncomment
       // setPrice(value)

    }
    return (
       
            <Form className='new-listing'>
                <Field
                    type='number'
                    name='bedrooms' 
                    id='bedrooms'
                    placeholder="No. of Bedrooms"
                    value={values.bedrooms}
                />
                {touched.bedrooms && errors.bedrooms && (
                    <p className="error"> {errors.bedrooms}</p>
                )}
                 <Field
                    type='number'
                    name='bathrooms' 
                    id='bathrooms'
                    placeholder="No. of bathrooms"
                    value={values.bathrooms}
                />
                {touched.bathrooms && errors.bathrooms && (
                    <p className="error"> {errors.bathrooms}</p>
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

                <Field
                    name='city' 
                    id='city'
                    placeholder="city"
                    value={values.city}
                />


                <Field
                    name='state' 
                    id='state'
                    placeholder="state"
                    value={values.state}
                />

                <Field
                    name='price' 
                    id='price'
                    placeholder="price"
                    value={values.price}
                />

                <Field
                    name='sqft' 
                    id='sqft'
                    placeholder="sqft"
                    value={values.sqft}
                />
                <Field
                    name='email' 
                    id='email'
                    placeholder="email"
                    value={values.email}
                />

                <Field
                    type="date"
                    name='date' 
                    id='date'
                    placeholder="date"
                    value={values.date}
                />
                <button disabled={!values.bedrooms || !values.bathrooms}onClick={checkPrice}>Check Price</button>
                
                <button type="submit">Create Listing</button>

            </Form>
       
            
       

    )
}

const FormikNewListing = withFormik({
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
        zip: Yup.string().required("Zip Required").test('len', 'Must be exactly 5 characters', val => val && val.toString().length === 5)
    })

})(NewListing);

export default FormikNewListing;