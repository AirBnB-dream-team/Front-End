import React from 'react';
import { withFormik, Form, Field } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import {connect} from 'react-redux';
import {register} from '../actions/register'







function RegisterForm(props){   
   
    const { values,
            touched,
            errors,
          } = props;
    return (
       
            <Form className='login-form'>
                <label htmlFor='username'>Username</label>
                <Field
                    name='username' 
                    id='username' 
                    value={values.username}
                />
                {touched.username && errors.username && (
                    <p> {errors.username}</p>
                )}
                <label htmlFor='password'>Password</label>
                <Field 
                    type='password' 
                    name='password' 
                    id='password'
                    value = {values.password}
                />
                {touched.password && errors.password && (
                    <p> {errors.password}</p>
                )}
                

                <label htmlFor='email'>Email</label>
                <Field
                    type='email' 
                    name='email' 
                    value = {values.email}
                />
                {touched.email && errors.email && (
                    <p> {errors.email}</p>
                )}
                <button type="submit">Register</button>

            </Form>
       
            
       

    )
}

const FormikRegisterForm = withFormik({
    mapPropsToValues({ username, password, email }) {
        return {
          username: username || "",
          password: password || "",
          email: email || ""
        };
    },
    validationSchema: Yup.object().shape({
        username: Yup.string().required('Username required'),
        email: Yup.string().email('Invalid Email Address').required('Email required'),
        password:Yup.string().min(3, "3 or more characters").matches('^(?=.*[0-9]$)(?=.*[a-zA-Z])', "Password must contain atleast 1 letter and 1 number").required("PassRequired")
    }),
    handleSubmit(values, {props, resetForm}) {
        props.register(values);
        resetForm();
      }

})(RegisterForm);

export default connect(null, {register})(FormikRegisterForm);